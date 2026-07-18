import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    id: "vertical-media-feed",
    number: "01",
    title: "Vertical Media Feed",
    category: "Native Android / Media Systems",
    description:
      "A Kotlin-based Android media feed system focused on active-center playback, player pooling, fast-scroll handling, and performance-focused media architecture.",
    longDescription:
      "A high-performance Android vertical media feed built to handle fast scrolling, player reuse, lifecycle cleanup, thumbnail handoff, active-center playback, and smooth surface transitions. The focus is not cloning a social app, but solving the native media systems work required to make video feel stable, responsive, and reliable on real devices.",
    tech: ["Kotlin", "Android", "Media3", "Jetpack Compose", "Perfetto"],
    imageAlt: "Vertical media feed project preview",
    imagePlaceholder: "Media Feed",
    status: "Case Study",
    isPrivate: false,
    screens: [
      {
        id: "active-center-playback",
        title: "Active-Center Playback",
        subtitle:
          "The centered item owns playback while nearby cells stay prepared for smooth transitions.",
      },
      {
        id: "player-pooling",
        title: "Player Pooling",
        subtitle:
          "Reusable playback resources reduce churn, allocation pressure, and scroll-time instability.",
      },
      {
        id: "surface-coordination",
        title: "Surface Coordination",
        subtitle:
          "Manual surface, thumbnail, and player handoff logic helps reduce flicker and visual stalls.",
      },
      {
        id: "perfetto-analysis",
        title: "Perfetto Analysis",
        subtitle:
          "Profiling is used to inspect frame timing, scroll behavior, and performance bottlenecks.",
      },
    ],
    highlights: [
      "Built active-center playback behavior for a native Android vertical media feed.",
      "Designed player pooling and surface coordination to reduce churn during fast scrolling.",
      "Handled thumbnail handoff, lifecycle cleanup, scroll-state coordination, and memory pressure.",
      "Used Perfetto to reason about performance, frame timing, and scroll behavior.",
    ],
  },
  {
    id: "private-realtime-social-product",
    number: "02",
    title: "Private Realtime Social Product",
    category: "Private Product / Realtime Mobile",
    description:
      "An unreleased mobile product focused on contextual discovery, request-based interactions, realtime state, and backend-authoritative architecture.",
    longDescription:
      "An unreleased private mobile product. Public details are intentionally sanitized to protect the product name, visual identity, interaction model, and proprietary mechanics. The portfolio version focuses on transferable engineering proof: mobile architecture, profile flows, request lifecycles, realtime updates, backend-authoritative state, privacy-aware access patterns, and iOS/Android implementation planning.",
    tech: ["Swift", "SwiftUI", "Kotlin", "Jetpack Compose", "Supabase", "PostgreSQL"],
    imageAlt: "Private realtime social product preview",
    imagePlaceholder: "Protected Preview",
    status: "Private Product",
    isPrivate: true,
    screens: [
      {
        id: "protected-discovery",
        title: "Protected Discovery Surface",
        subtitle:
          "Public preview intentionally obscures the core visual mechanic and discovery model.",
      },
      {
        id: "profile-interactions",
        title: "Profile Interaction Flow",
        subtitle:
          "Selected implementation concepts can be discussed without exposing the full product loop.",
      },
      {
        id: "request-lifecycle",
        title: "Request Lifecycle",
        subtitle:
          "Backend-authoritative states support pending, edited, accepted, withdrawn, and expired flows.",
      },
      {
        id: "native-platforms",
        title: "Native Platform Direction",
        subtitle:
          "iOS and Android implementations are planned around shared behavior with native UI patterns.",
      },
    ],
    highlights: [
      "Designed mobile architecture for a realtime, backend-connected social product.",
      "Modeled request and profile interaction states around backend-authoritative business rules.",
      "Planned iOS and Android behavior while protecting private product visuals and mechanics.",
      "Public showcase intentionally uses sanitized naming and protected preview language.",
    ],
  },
  {
    id: "private-city-event-product",
    number: "03",
    title: "Private City/Event Product",
    category: "Private Product / Location & Events",
    description:
      "A private city-focused mobile product involving location-aware events, profiles, media, and contextual discovery.",
    longDescription:
      "A private city and event discovery product. The public portfolio version avoids exposing the product name, full screen designs, unique interaction loops, and proprietary planning details. The safe showcase focuses on selected engineering areas: event discovery, location-aware flows, media presentation, profile-based context, saved activity, and backend-connected mobile architecture.",
    tech: ["Swift", "Kotlin", "Supabase", "PostgreSQL", "Maps", "Realtime"],
    imageAlt: "Private city and event product preview",
    imagePlaceholder: "City / Events",
    status: "Private Product",
    isPrivate: true,
    screens: [
      {
        id: "event-discovery",
        title: "Event Discovery",
        subtitle:
          "Safe preview of city/event discovery without revealing the full product concept.",
      },
      {
        id: "location-context",
        title: "Location Context",
        subtitle:
          "Map and place-based interactions can be shown in abstracted form for hiring proof.",
      },
      {
        id: "media-profiles",
        title: "Media & Profiles",
        subtitle:
          "Profile, media, and event context are presented without exposing proprietary visual identity.",
      },
      {
        id: "saved-activity",
        title: "Saved Activity",
        subtitle:
          "Selected flows can show saved places, plans, or event activity using sanitized data.",
      },
    ],
    highlights: [
      "Explores location-aware discovery, events, profiles, and media in a mobile-first product.",
      "Demonstrates map/event architecture without publishing the unreleased product identity.",
      "Supports iOS and Android product execution across contextual city experiences.",
      "Public version should use abstracted, blurred, or sample-data screens only.",
    ],
  },
  {
    id: "cigar-scanner",
    number: "04",
    title: "Cigar Scanner",
    category: "AI / Vision / Collection",
    description:
      "A scanner concept for cigar band recognition, collection tracking, quality scoring, and personal humidor insights.",
    longDescription:
      "A mobile scanner concept focused on identifying cigar bands, matching likely products, saving collection history, and presenting structured cigar insights. This project is useful for showing camera workflows, AI-assisted recognition, OCR/object detection direction, data matching, and product thinking around collectors.",
    tech: ["React Native", "TypeScript", "Python", "Vision", "Swift", "Kotlin"],
    imageAlt: "Cigar scanner project preview",
    imagePlaceholder: "Cigar Scanner",
    status: "Prototype",
    isPrivate: false,
    screens: [
      {
        id: "discover",
        title: "Discover",
        subtitle:
          "Browse cigar profiles, recommendations, saved items, and collection insights.",
      },
      {
        id: "scan",
        title: "Scan",
        subtitle:
          "Camera-first scanning flow for cigar band recognition and metadata extraction.",
      },
      {
        id: "details",
        title: "Details",
        subtitle:
          "Display origin, brand, flavor notes, quality score, and structured product data.",
      },
      {
        id: "collection",
        title: "Collection",
        subtitle:
          "Save scan history, manage favorites, and track a personal humidor.",
      },
    ],
    highlights: [
      "Shows AI/OCR product direction without requiring full ML infrastructure first.",
      "Can support Python experience through image-processing or recognition utilities.",
      "Demonstrates camera, recognition, data matching, and collection workflows.",
      "Useful proof for AI-assisted mobile product roles.",
    ],
  },
];