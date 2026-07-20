"use client";

import Image from "next/image";
import { useLayoutEffect, useRef, useState } from "react";

const DESIGN_WIDTH = 865;
const DESIGN_HEIGHT = 595;

/*
 * Screen corner coordinates measured from hero-devices-blank.png,
 * in design-space pixels (865x595). Order: TL, TR, BR, BL.
 * If the artwork ever changes, re-measure these four points per
 * screen and everything else follows.
 */
type Point = [number, number];
type Quad = [Point, Point, Point, Point];

// const LAPTOP_SCREEN: { width: number; height: number; corners: Quad } = {
//   width: 560,
//   height: 352, // matches the real quad's aspect so content isn't squashed
//   corners: [
//     // Left edge is shrunk ~15% toward its center to exaggerate the
//     // viewing angle: text renders smaller on the far (left) side and
//     // larger on the near (right) side. The right edge stays pinned to
//     // the glass. To dial the effect, move TL.y / BL.y toward 61 / 352
//     // (flatter) or further toward 206 (stronger).
//     [343, 83],
//     [820, 43],
//     [810, 357],
//     [324, 330],
//   ],
// };

const LAPTOP_SCREEN: {
  width: number;
  height: number;
  corners: Quad;
} = {
  width: 560,
  height: 360,
  corners: [
    // Top-left: slightly lower than the right to preserve perspective
    [331, 67],

    // Top-right: follows the upper glass edge
    [823, 47],

    // Bottom-right: follows the screen directly above the hinge
    [800, 402],

    // Bottom-left: shorter edge creates the correct perspective
    [298, 371],
  ],
};

const PHONE_SCREEN: { width: number; height: number; corners: Quad } = {
  width: 160,
  height: 410, // ditto — the phone screen is taller than 340 in true proportion
  corners: [
    [152, 168],
    [262, 171],
    [281, 440],
    [172, 452],
  ],
};

/*
 * Computes the CSS matrix3d() that maps a w x h rectangle
 * (transform-origin: top left) onto an arbitrary quadrilateral.
 * Standard 4-point homography (Heckbert's projective mapping).
 */
function cornersToMatrix3d(w: number, h: number, [p0, p1, p2, p3]: Quad) {
  const [x0, y0] = p0;
  const [x1, y1] = p1;
  const [x2, y2] = p2;
  const [x3, y3] = p3;

  const dx1 = x1 - x2;
  const dx2 = x3 - x2;
  const dy1 = y1 - y2;
  const dy2 = y3 - y2;
  const sx = x0 - x1 + x2 - x3;
  const sy = y0 - y1 + y2 - y3;

  const det = dx1 * dy2 - dx2 * dy1;
  const g = (sx * dy2 - dx2 * sy) / det;
  const hh = (dx1 * sy - sx * dy1) / det;

  const a = x1 - x0 + g * x1;
  const b = x3 - x0 + hh * x3;
  const d = y1 - y0 + g * y1;
  const e = y3 - y0 + hh * y3;

  // Column-major 4x4, with the unit square scaled to w x h.
  const m = [
    a / w, d / w, 0, g / w,
    b / h, e / h, 0, hh / h,
    0, 0, 1, 0,
    x0, y0, 0, 1,
  ];

  return `matrix3d(${m.map((v) => v.toFixed(9)).join(", ")})`;
}

const LAPTOP_SCREEN_TRANSFORM = cornersToMatrix3d(
  LAPTOP_SCREEN.width,
  LAPTOP_SCREEN.height,
  LAPTOP_SCREEN.corners
);

const PHONE_SCREEN_TRANSFORM = cornersToMatrix3d(
  PHONE_SCREEN.width,
  PHONE_SCREEN.height,
  PHONE_SCREEN.corners
);

const explorerItems = [
  { name: "components", active: false },
  { name: "features", active: false },
  { name: "portfolio", active: true },
  { name: "services", active: false },
];

export function HeroDevices() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(0);

  useLayoutEffect(() => {
    const container = containerRef.current;

    if (!container) {
      return;
    }

    const updateScale = () => {
      const containerWidth = container.getBoundingClientRect().width;
      setScale(containerWidth / DESIGN_WIDTH);
    };

    updateScale();

    const observer = new ResizeObserver(updateScale);
    observer.observe(container);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative aspect-[865/595] w-full max-w-[540px] xl:max-w-[820px]"
      aria-label="Laptop and phone displaying TypeScript code"
    >
      {/* Backdrop light behind the devices — neutral, so the aluminum
          reads as gray metal instead of picking up a blue cast. */}
      <div className="pointer-events-none absolute left-[20%] top-[4%] h-[72%] w-[74%] rounded-full bg-slate-300/10 blur-3xl" />

      <div
        className="absolute left-0 top-0 h-[595px] w-[865px] origin-top-left"
        style={{
          opacity: scale === 0 ? 0 : 1,
          transform: `scale(${scale})`,
        }}
      >
        <Image
          src="/images/hero-devices-blank.png"
          alt=""
          width={DESIGN_WIDTH}
          height={DESIGN_HEIGHT}
          priority
          className="absolute inset-0 z-0 h-[595px] w-[865px]"
          style={{
            /* brightness 1.65 lifts the aluminum to ~3x the page background
               luminance; saturate(0.8) pulls the blue cast out of the glass
               and metal; the faint neutral drop-shadow detaches the
               silhouette from the backdrop without tinting it. */
            filter:
              "brightness(1.5) contrast(1.05) saturate(0.8) drop-shadow(0 0 40px rgba(203,213,225,0.12))",
          }}
        />

        {/* Laptop screen — no background: the render's own glass shows
            through, so the text sits on the real screen with no seams. */}
        <div
          className="absolute left-0 top-0 z-10 origin-top-left overflow-hidden rounded-[4px] [backface-visibility:hidden]"
          style={{
            width: LAPTOP_SCREEN.width,
            height: LAPTOP_SCREEN.height,
            transform: LAPTOP_SCREEN_TRANSFORM,
          }}
        >
          <LaptopScreen />
        </div>

        {/* Phone screen — transparent for the same reason. */}
        <div
          className="absolute left-0 top-0 z-20 origin-top-left overflow-hidden rounded-[16px] [backface-visibility:hidden]"
          style={{
            width: PHONE_SCREEN.width,
            height: PHONE_SCREEN.height,
            transform: PHONE_SCREEN_TRANSFORM,
          }}
        >
          <PhoneScreen />
        </div>
      </div>
    </div>
  );
}

function LaptopScreen() {
  return (
    <div className="flex h-full flex-col font-mono">
      {/* Editor toolbar */}
      <div className="flex h-10 shrink-0 items-center border-b border-white/[0.08] bg-white/[0.03] px-4">
        <div className="flex gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        </div>

        <div className="ml-8 flex h-full items-center gap-7 text-[9px] text-slate-500">
          <span className="flex h-full items-center border-b border-blue-400 text-sky-300">
            engineer.ts
          </span>

          <span>projects.ts</span>
          <span>systems.ts</span>
        </div>
      </div>

      <div className="flex min-h-0 flex-1">
        {/* Explorer */}
        <aside className="w-[118px] shrink-0 border-r border-white/[0.08] bg-black/25 px-4 py-4">
          <p className="mb-4 text-[8px] font-semibold uppercase tracking-[0.18em] text-slate-500">
            Explorer
          </p>

          <div className="space-y-3 text-[9px]">
            <div className="flex items-center gap-2 text-slate-400">
              <span className="text-slate-600">⌄</span>
              <span className="font-medium">src</span>
            </div>

            {explorerItems.map((item) => (
              <div
                key={item.name}
                className={`flex items-center gap-2 pl-3 ${
                  item.active ? "text-blue-300" : "text-slate-500"
                }`}
              >
                <span
                  className={`h-1.5 w-1.5 rounded-full ${
                    item.active ? "bg-blue-400" : "bg-slate-700"
                  }`}
                />

                <span>{item.name}</span>
              </div>
            ))}
          </div>
        </aside>

        {/* Editor */}
        <div className="relative flex min-w-0 flex-1 overflow-hidden">
          <div className="w-10 shrink-0 select-none border-r border-white/[0.04] py-5 pr-3 text-right text-[9px] leading-[1.75] text-slate-600">
            {Array.from({ length: 13 }, (_, index) => (
              <div key={index}>{index + 1}</div>
            ))}
          </div>

          <pre className="overflow-hidden whitespace-pre px-5 py-5 text-[11px] leading-[1.58] text-slate-300">
            <code>
              <span className="text-[#c792ea]">type</span>
              {" Engineer = {\n"}
              {"  "}
              <span className="text-[#82aaff]">name</span>
              {": "}
              <span className="text-[#ffcb6b]">string</span>
              {";\n  "}
              <span className="text-[#82aaff]">focus</span>
              {": "}
              <span className="text-[#ffcb6b]">string[]</span>
              {";\n};\n\n"}

              <span className="text-[#c792ea]">const</span>
              {" engineer: "}
              <span className="text-[#82aaff]">Engineer</span>
              {" = {\n  name: "}
              <span className="text-[#c3e88d]">
                &quot;Greg Turner&quot;
              </span>
              {",\n  focus: [\n    "}
              <span className="text-[#c3e88d]">
                &quot;Mobile&quot;
              </span>
              {",\n    "}
              <span className="text-[#c3e88d]">
                &quot;Cross-platform&quot;
              </span>
              {",\n    "}
              <span className="text-[#c3e88d]">
                &quot;Backend Systems&quot;
              </span>
              {"\n  ],\n};"}
            </code>
          </pre>

        </div>
      </div>

      {/* Status bar */}
      <div className="flex h-6 shrink-0 items-center justify-between border-t border-white/[0.08] bg-black/25 px-4 text-[8px] text-slate-500">
        <span>main*</span>

        <div className="flex gap-4">
          <span>TypeScript</span>
          <span>UTF-8</span>
          <span>Prettier</span>
        </div>
      </div>
    </div>
  );
}

function PhoneScreen() {
  return (
    <div className="relative flex h-full flex-col px-4 pb-6 pt-14 font-mono">

      <div className="text-[13px] font-bold tracking-tight text-blue-400">
        GT
      </div>

      <div className="mt-12">
        <p className="text-[14px] font-semibold leading-[1.3] text-white">
          Engineer.
        </p>

        <p className="text-[14px] font-semibold leading-[1.3] text-blue-400">
          Builder.
        </p>

        <p className="text-[14px] font-semibold leading-[1.3] text-cyan-300">
          Problem Solver.
        </p>
      </div>

      <div className="mt-8 rounded-lg border border-white/[0.08] bg-white/[0.025] p-3">
        <pre className="overflow-hidden whitespace-pre text-[8px] leading-[1.55] text-slate-400">
          <code>
            <span className="text-[#c792ea]">const</span>
            {" focus = [\n  "}
            <span className="text-[#c3e88d]">
              &quot;Mobile&quot;
            </span>
            {",\n  "}
            <span className="text-[#c3e88d]">
              &quot;Systems&quot;
            </span>
            {"\n];"}
          </code>
        </pre>
      </div>

      <div className="mt-auto">
        <div className="mb-5 flex items-start gap-2 text-[8px] leading-[1.4] text-slate-400">
          <span className="mt-0.5 h-2 w-2 shrink-0 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.85)]" />

          Available for new projects
        </div>

        <div className="rounded-lg border border-white/[0.12] bg-white/[0.025] py-2.5 text-center text-[8px] text-slate-200">
          Let&apos;s Connect
        </div>
      </div>
    </div>
  );
}



