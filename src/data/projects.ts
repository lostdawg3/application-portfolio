// import type { Project } from "@/types/project";

// export const projects: Project[] = [
//     {
//         id: "vertical-media-feed",
//         number: "01",
//         title: "Vertical Media Feed",
//         category: "Social / Content",
//         description:
//             "A social media feed with active-center playback, player pooling, fast-scroll handling, and performance-focused media architecture.",
//         tech: ["Swift", "Kotlin", "Supabase", "PostgreSQL"],
//         imageAlt: "Vertical media feed project preview",
//         imagePlaceholder: "Media Feed",
//     },
//     {
//         id: "turn-request-flow",
//         number: "02",
//         title: "Turn",
//         category: "Productivity / Ops",
//         description:
//             "A realtime request lifecycle demo for profile discovery, pending states, editing, withdrawing, and backend-connected interactions.",
//         tech: [""],
//         imageAlt: "Turn request flow project preview",
//         imagePlaceholder: "Request Flow",
//     },
//     {
//         id: "cityscene",
//         number: "03",
//         title: "Event Location",
//         category: "Lifestyle",
//         description: 
//             "A location event social media with realtime status, profiles, media, and events.",
//         tech: ["Swift", "Kotlin", "Supabase", "Maps"],
//         imageAlt: "Event social media",
//         imagePlaceholder: "Events",
//     },
//     {
//         id: "cigar-scanner",
//         number: "04",
//         title: "Cigar Scanner",
//         category: "Object Dectection",
//         description:
//             "A scanner concept for cigar band recognition, collection tracking, quality scoring, and personal humidor insights.",
//         tech: ["React Native", "Typescript", "Python", "Vision", "Swift", "Kotlin"],
//         imageAlt: "Cigar scanner project preview",
//         imagePlaceholder: "Cigar Scanner"
//     }
// ]




import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    id: "vertical-media-feed",
    number: "01",
    title: "Vertical Media Feed",
    category: "Native Mobile / Media Systems",
    description:
      "A vertical media feed with active-center playback, player pooling, fast-scroll handling, and performance-focused media architecture.",
    longDescription:
      "A high-performance vertical media feed built to handle fast scrolling, player reuse, lifecycle cleanup, thumbnail handoff, and active-center playback. The focus is not just UI polish, but the systems work required to make video feel instant and stable on real mobile devices.",
    tech: ["Kotlin"],
    imageAlt: "Vertical media feed project preview",
    imagePlaceholder: "Media Feed",
    status: "Case Study",
    isPrivate: false,
    screens: [
      {
        id: "feed-home",
        title: "Active Feed",
        subtitle: "Center video owns playback while adjacent cells stay prepared.",
      },
      {
        id: "player-pool",
        title: "Player Pool",
        subtitle: "Reusable players reduce churn during fast scroll sessions.",
      },
      {
        id: "scroll-policy",
        title: "Scroll Policy",
        subtitle: "Velocity-aware logic avoids attaching too aggressively.",
      },
      {
        id: "performance",
        title: "Performance",
        subtitle: "Designed around memory pressure, lifecycle, and smooth handoff.",
      },
    ],
    highlights: [
      "Built active-center playback logic for vertical feeds.",
      "Designed player and surface reuse strategy for smoother scrolling.",
      "Handled lifecycle cleanup, memory pressure, and fast-scroll behavior.",
      "Packaged as a senior-level native mobile performance case study.",
    ],
  },
  {
    id: "turn-request-flow",
    number: "02",
    title: "Turn Request Flow",
    category: "Productivity / Ops",
    description:
      "A realtime request lifecycle demo for profile discovery, pending states, editing, withdrawing, and backend-connected interactions.",
    longDescription:
      "A sanitized React Native and backend-connected request flow inspired by private product work. The demo focuses on request lifecycles, optimistic UI, realtime updates, profile interactions, and backend-authoritative state without exposing the unreleased product's secret UI or business logic.",
    tech: ["React Native", "TypeScript", "Supabase", "PostgreSQL"],
    imageAlt: "Turn request flow project preview",
    imagePlaceholder: "Request Flow",
    status: "Private Product",
    isPrivate: true,
    screens: [
      {
        id: "profile-discovery",
        title: "Profile Discovery",
        subtitle: "Browse nearby or contextual profiles in a protected demo flow.",
      },
      {
        id: "request-composer",
        title: "Request Composer",
        subtitle: "Send, edit, or withdraw a request before it is accepted.",
      },
      {
        id: "pending-state",
        title: "Pending State",
        subtitle: "Client UI reflects backend-authoritative lifecycle changes.",
      },
      {
        id: "activity",
        title: "Activity",
        subtitle: "Realtime updates keep request state synchronized.",
      },
    ],
    highlights: [
      "Modeled request states such as pending, accepted, withdrawn, and expired.",
      "Designed frontend state around backend-authoritative business rules.",
      "Used TypeScript models to keep request data predictable.",
      "Keeps full product visuals and source code private while showing engineering depth.",
    ],
  },
  {
    id: "pet-location-tracker",
    number: "03",
    title: "Pet Location Tracker",
    category: "Lifestyle / IoT",
    description:
      "A location-aware mobile concept with realtime status, geofencing, activity history, and map-based device tracking.",
    longDescription:
      "A location-focused mobile prototype that demonstrates realtime status, map-based tracking, safe zones, activity timelines, and device/pet state. This project is designed as a focused proof asset for mobile roles involving location, IoT, maps, presence, and realtime backend systems.",
    tech: ["Swift", "Kotlin", "Supabase", "Maps"],
    imageAlt: "Pet location tracker project preview",
    imagePlaceholder: "Location Tracker",
    status: "Prototype",
    isPrivate: false,
    screens: [
      {
        id: "map",
        title: "Live Map",
        subtitle: "Track current location and nearby context.",
      },
      {
        id: "safe-zone",
        title: "Safe Zones",
        subtitle: "Geofence-style boundaries with alert-ready state.",
      },
      {
        id: "activity",
        title: "Activity Timeline",
        subtitle: "Recent movement and status updates in one view.",
      },
      {
        id: "device",
        title: "Device Status",
        subtitle: "Battery, signal, and last-seen data modeled for mobile UX.",
      },
    ],
    highlights: [
      "Demonstrates map-first mobile product thinking.",
      "Models realtime status and activity history.",
      "Useful for location, family safety, IoT, and presence-based roles.",
      "Can share public demo without exposing TURN-specific location logic.",
    ],
  },
  {
    id: "cigar-scanner-ai",
    number: "04",
    title: "Cigar Scanner AI",
    category: "AI / Vision",
    description:
      "An AI-assisted scanner concept for cigar band recognition, collection tracking, quality scoring, and personal humidor insights.",
    longDescription:
      "A mobile AI/OCR concept focused on scanning cigar bands, identifying likely matches, saving collection history, and presenting structured product insights. This project is useful for showing camera workflows, AI-assisted recognition, data matching, and product thinking around collectors.",
    tech: ["React Native", "TypeScript", "Python", "Vision"],
    imageAlt: "Cigar scanner AI project preview",
    imagePlaceholder: "Cigar Scanner",
    status: "Prototype",
    isPrivate: false,
    screens: [
      {
        id: "discover",
        title: "Discover",
        subtitle: "Browse cigar profiles, recommendations, and collection insights.",
      },
      {
        id: "scan",
        title: "Scan",
        subtitle: "Camera-first scanning flow for cigar band recognition.",
      },
      {
        id: "details",
        title: "Details",
        subtitle: "Display origin, flavor notes, quality score, and metadata.",
      },
      {
        id: "collection",
        title: "Collection",
        subtitle: "Save scan history and track a personal humidor.",
      },
    ],
    highlights: [
      "Shows AI/OCR product direction without needing full ML infrastructure first.",
      "Can support Python experience through image-processing utilities.",
      "Demonstrates camera, recognition, and collection workflows.",
      "Useful proof for AI-assisted mobile product roles.",
    ],
  },
];