export type CaseStudyStatus = "live" | "build" | "soon" | "partnership";

export interface CaseStudyStat {
  num: string;
  label: string;
}

export interface SystemComponent {
  icon: string;
  name: string;
  desc: string;
  status: "live" | "build";
}

export interface CaseStudy {
  slug: string;
  initials: string;
  name: string;
  nameParts: [string, string]; // two lines
  type: string;
  status: CaseStudyStatus;
  statusLabel: string;
  img: string;
  badgeBg: string;
  badgeText: string;
  headline: string;
  body: string;
  stats: CaseStudyStat[];
  cta: string;
  // detail page fields
  industry: string;
  platform: string | null;
  stack: string;
  timeline: string;
  heroStats: CaseStudyStat[];
  heroTagline: string;
  heroBg: string;
  heroOverlay: string;
  heroStatusLabel: string;
  heroIndustry: string;
  problemTitle: string;
  problemBody: string[];
  approachTitle: string;
  approachBody: string[];
  results: CaseStudyStat[];
  systemComponents: SystemComponent[];
  widthSpan?: number; // for BCPS wide card
}

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "vegans-explore",
    initials: "VE",
    name: "Vegans Explore",
    nameParts: ["Vegans", "Explore"],
    type: "Health + Wellness / Community",
    status: "live",
    statusLabel: "Platform Live",
    img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=420&h=600&fit=crop",
    badgeBg: "#0a3020",
    badgeText: "#5ecfa0",
    headline: "A Full Community Platform Built in Under 90 Days.",
    body: "Multi-city vegan community with directory, gated content, events, classifieds, and an AI operations team running daily. Built once. Running continuously.",
    stats: [
      { num: "2K+", label: "Members" },
      { num: "90d", label: "Launch" },
    ],
    cta: "View Case Study",
    industry: "Plant-Based Travel",
    platform: "vegansexplore.com",
    stack: "LESARUSS OS",
    timeline: "90-Day Launch",
    heroStats: [
      { num: "2K+", label: "Active Members" },
      { num: "Live", label: "Platform Status" },
      { num: "1", label: "Operating System" },
    ],
    heroTagline: "A global plant-based travel and lifestyle community. Built on the LESARUSS operating system from day one.",
    heroBg: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=1400&h=600&fit=crop",
    heroOverlay: "linear-gradient(160deg, #071a04 0%, #0d2e08 50%, #143d0c 100%)",
    heroStatusLabel: "Platform Live",
    heroIndustry: "Health + Wellness / Community",
    problemTitle: "A Community Without Infrastructure.",
    problemBody: [
      "Vegans Explore had a passionate audience but no central platform to host them. Content was scattered across social media. Revenue was zero. There was no way to capture, retain, or monetize the people who were already showing up.",
      "The founder needed a full operating system: community, content, commerce, and coaching - all under one roof, all under one brand. Not a patchwork of tools. A system.",
    ],
    approachTitle: "One System. Zero Shortcuts.",
    approachBody: [
      "LESARUSS deployed its full operating model: brand identity, community infrastructure, content engine, and revenue architecture - built in sequence, not simultaneously.",
      "Every decision was made with the template in mind. What works for Vegans Explore becomes the blueprint for the next brand in the portfolio.",
    ],
    results: [
      { num: "2K+", label: "Community Members at Launch" },
      { num: "90", label: "Days from Zero to Live Platform" },
      { num: "$0", label: "Ad Spend to Reach First 1,000" },
    ],
    systemComponents: [
      { icon: "globe", name: "Brand Identity System", desc: "Logo, color palette, typography, voice - locked and documented", status: "live" },
      { icon: "users", name: "Community Platform", desc: "Circle-powered community with onboarding flows and member tiers", status: "live" },
      { icon: "edit", name: "Content Engine", desc: "Weekly cadence: newsletters, community posts, and long-form guides", status: "live" },
      { icon: "credit-card", name: "Revenue Architecture", desc: "Membership tiers, digital products, and affiliate integrations", status: "live" },
      { icon: "bar-chart", name: "Mission Control Dashboard", desc: "Internal ops tool: member data, revenue tracking, content calendar", status: "build" },
    ],
  },
  {
    slug: "chester-is-cool",
    initials: "CH",
    name: "Chester Is Cool",
    nameParts: ["Chester", "Is Cool"],
    type: "Education Platform",
    status: "build",
    statusLabel: "In Build",
    img: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=420&h=600&fit=crop",
    badgeBg: "#1a2f5a",
    badgeText: "#6b9ef0",
    headline: "Building Youth Sports Communities That Last.",
    body: "Registration, team management, scheduling, and parent communication, unified under one brand with full mobile-first architecture.",
    stats: [
      { num: "5+", label: "Sports" },
      { num: "Full", label: "Stack" },
    ],
    cta: "View Case Study",
    industry: "Youth Sports / Education",
    platform: null,
    stack: "LESARUSS OS",
    timeline: "In Build",
    heroStats: [
      { num: "5+", label: "Sports" },
      { num: "Build", label: "Status" },
      { num: "1", label: "Operating System" },
    ],
    heroTagline: "A dedicated platform for youth sports registration, team management, and community - built under one brand.",
    heroBg: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1400&h=600&fit=crop",
    heroOverlay: "linear-gradient(160deg, #0a1a35 0%, #1a2f5a 50%, #1a3a70 100%)",
    heroStatusLabel: "In Build",
    heroIndustry: "Education Platform",
    problemTitle: "A scattered sports community with no home base.",
    problemBody: [
      "Parents juggling five different apps. Coaches with no central command. Kids with no digital identity inside the sport they love. Chester Is Cool is built to fix that.",
    ],
    approachTitle: "One brand. Every touchpoint.",
    approachBody: [
      "LESARUSS is building a full mobile-first platform: registration, scheduling, team management, and parent communication - all under one roof.",
    ],
    results: [
      { num: "5+", label: "Sports Covered" },
      { num: "Full", label: "Mobile Stack" },
      { num: "1", label: "Brand Identity" },
    ],
    systemComponents: [
      { icon: "users", name: "Team Management", desc: "Rosters, schedules, and coach tools", status: "build" },
      { icon: "globe", name: "Brand Identity System", desc: "Logo, colors, and voice locked", status: "live" },
      { icon: "edit", name: "Parent Portal", desc: "Registration, waivers, and communication", status: "build" },
    ],
  },
  {
    slug: "topspot-usa",
    initials: "TS",
    name: "TopSpot USA",
    nameParts: ["TopSpot", "USA"],
    type: "Music Platform",
    status: "build",
    statusLabel: "In Build",
    img: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=420&h=600&fit=crop",
    badgeBg: "#3a2200",
    badgeText: "#f0a96b",
    headline: "Giving Creators the Platform They Actually Own.",
    body: "Monetize directly. Manage subscriber relationships. Stop relying on algorithm-dependent platforms for revenue.",
    stats: [
      { num: "0%", label: "Platform Tax" },
      { num: "Direct", label: "Revenue" },
    ],
    cta: "View Case Study",
    industry: "Music / Creator Economy",
    platform: null,
    stack: "LESARUSS OS",
    timeline: "In Build",
    heroStats: [
      { num: "0%", label: "Platform Tax" },
      { num: "Direct", label: "Revenue" },
      { num: "1", label: "Operating System" },
    ],
    heroTagline: "A creator-owned music platform where artists monetize directly without algorithm dependency.",
    heroBg: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=1400&h=600&fit=crop",
    heroOverlay: "linear-gradient(160deg, #1a1000 0%, #3a2200 50%, #4a3200 100%)",
    heroStatusLabel: "In Build",
    heroIndustry: "Music Platform",
    problemTitle: "Creators building on rented land.",
    problemBody: [
      "Every streaming platform takes its cut. Every algorithm change tanks your reach. TopSpot USA gives creators the infrastructure to own their audience and their revenue.",
    ],
    approachTitle: "Direct. No middleman.",
    approachBody: [
      "LESARUSS is building a direct-to-fan platform with subscriber management, digital product delivery, and community tools - all under the creator's own brand.",
    ],
    results: [
      { num: "0%", label: "Platform Cut" },
      { num: "100%", label: "Creator Owned" },
      { num: "Direct", label: "Fan Revenue" },
    ],
    systemComponents: [
      { icon: "credit-card", name: "Revenue Architecture", desc: "Direct subscription and product sales", status: "build" },
      { icon: "users", name: "Fan Community", desc: "Private community with member tiers", status: "build" },
      { icon: "globe", name: "Brand Identity System", desc: "Logo, colors, and voice locked", status: "live" },
    ],
  },
  {
    slug: "k12-unlocked",
    initials: "K12",
    name: "K12 Unlocked",
    nameParts: ["K12", "Unlocked"],
    type: "EdTech + AI Education",
    status: "build",
    statusLabel: "In Build",
    img: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=420&h=600&fit=crop",
    badgeBg: "#3d0a1a",
    badgeText: "#f06b9e",
    headline: "Modern Curriculum Delivery for Non-Traditional Learners.",
    body: "Learning management, educator tools, and parent dashboards for a growing homeschool and alternative education community. Built for retention.",
    stats: [
      { num: "5", label: "Grade Bands" },
      { num: "Live", label: "Status" },
    ],
    cta: "View Case Study",
    industry: "EdTech / Alternative Education",
    platform: null,
    stack: "LESARUSS OS",
    timeline: "In Build",
    heroStats: [
      { num: "5", label: "Grade Bands" },
      { num: "Build", label: "Status" },
      { num: "1", label: "Operating System" },
    ],
    heroTagline: "A modern learning platform for homeschool and alternative education communities, built for retention.",
    heroBg: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1400&h=600&fit=crop",
    heroOverlay: "linear-gradient(160deg, #200010 0%, #3d0a1a 50%, #4d0a25 100%)",
    heroStatusLabel: "In Build",
    heroIndustry: "EdTech + AI Education",
    problemTitle: "Homeschool families with no central system.",
    problemBody: [
      "Curriculum from one source. Community from another. Tracking in a spreadsheet. K12 Unlocked replaces the patchwork with a single operating system built for alternative educators.",
    ],
    approachTitle: "Structure without rigidity.",
    approachBody: [
      "LESARUSS is building a flexible LMS with educator tools, parent dashboards, and AI-assisted curriculum delivery - designed for families who chose a different path.",
    ],
    results: [
      { num: "5", label: "Grade Bands" },
      { num: "AI", label: "Curriculum Assist" },
      { num: "Full", label: "Parent Dashboard" },
    ],
    systemComponents: [
      { icon: "edit", name: "Curriculum Engine", desc: "Structured courses across 5 grade bands", status: "build" },
      { icon: "users", name: "Educator + Parent Portals", desc: "Separate dashboards for each role", status: "build" },
      { icon: "globe", name: "Brand Identity System", desc: "Logo, colors, and voice locked", status: "live" },
    ],
  },
  {
    slug: "anime3000",
    initials: "A3K",
    name: "Anime3000",
    nameParts: ["Anime", "3000"],
    type: "Fan Community Platform",
    status: "soon",
    statusLabel: "Coming Apr 20",
    img: "https://images.unsplash.com/photo-1535016120720-40c646be5580?w=420&h=600&fit=crop",
    badgeBg: "#1a1a50",
    badgeText: "#9b9bff",
    headline: "Fandom Infrastructure for the Most Passionate Audience Online.",
    body: "A dedicated community platform for anime, cosplay, and fan culture. Content, events, marketplace, and member perks in one system.",
    stats: [
      { num: "Apr 20", label: "Reveal Date" },
      { num: "Live", label: "Status" },
    ],
    cta: "Reveal Apr 20",
    industry: "Entertainment / Fan Culture",
    platform: null,
    stack: "LESARUSS OS",
    timeline: "Apr 20 Reveal",
    heroStats: [
      { num: "Apr 20", label: "Reveal Date" },
      { num: "Live", label: "Status" },
      { num: "1", label: "Operating System" },
    ],
    heroTagline: "The infrastructure layer for the most passionate fan community on the internet.",
    heroBg: "https://images.unsplash.com/photo-1535016120720-40c646be5580?w=1400&h=600&fit=crop",
    heroOverlay: "linear-gradient(160deg, #070720 0%, #1a1a50 50%, #252560 100%)",
    heroStatusLabel: "Coming Apr 20",
    heroIndustry: "Fan Community Platform",
    problemTitle: "A fanbase with nowhere to belong.",
    problemBody: [
      "Anime fans are everywhere and nowhere. Discord servers, Reddit threads, Twitter feeds - all fragmented. Anime3000 builds the permanent home.",
    ],
    approachTitle: "Community first. Always.",
    approachBody: [
      "LESARUSS is building a full fan community platform: content, events, marketplace, and member perks - designed for the depth of fandom, not the casual scroll.",
    ],
    results: [
      { num: "Apr 20", label: "Launch Date" },
      { num: "Full", label: "Platform Stack" },
      { num: "1", label: "Fan Home" },
    ],
    systemComponents: [
      { icon: "users", name: "Community Platform", desc: "Tiered membership with exclusive perks", status: "build" },
      { icon: "edit", name: "Content Engine", desc: "News, reviews, and fan-created content", status: "build" },
      { icon: "credit-card", name: "Marketplace", desc: "Fan merch, art, and collectibles", status: "build" },
    ],
  },
  {
    slug: "lash-makers",
    initials: "LM",
    name: "Lash Makers",
    nameParts: ["Lash", "Makers"],
    type: "Beauty Industry Platform",
    status: "build",
    statusLabel: "In Build",
    img: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=420&h=600&fit=crop",
    badgeBg: "#3d0a2a",
    badgeText: "#f06bcc",
    headline: "A Dedicated Platform for the Beauty Professional.",
    body: "Booking, client management, product education, and community for lash artists and beauty professionals growing their independent business.",
    stats: [
      { num: "Pro", label: "Focused" },
      { num: "Full", label: "Stack" },
    ],
    cta: "View Case Study",
    industry: "Beauty / Professional Services",
    platform: null,
    stack: "LESARUSS OS",
    timeline: "In Build",
    heroStats: [
      { num: "Pro", label: "Focused" },
      { num: "Build", label: "Status" },
      { num: "1", label: "Operating System" },
    ],
    heroTagline: "The operating system for independent beauty professionals - booking, education, community, and revenue in one place.",
    heroBg: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=1400&h=600&fit=crop",
    heroOverlay: "linear-gradient(160deg, #1a0010 0%, #3d0a2a 50%, #4d0a35 100%)",
    heroStatusLabel: "In Build",
    heroIndustry: "Beauty Industry Platform",
    problemTitle: "A beauty professional with no business infrastructure.",
    problemBody: [
      "Booking on one app. Client notes in a text thread. Education from YouTube. Lash Makers replaces the chaos with a professional system built for the beauty industry.",
    ],
    approachTitle: "Pro tools. Independent brand.",
    approachBody: [
      "LESARUSS is building a full professional platform: client management, booking, product education, and a community of peers - all under one roof.",
    ],
    results: [
      { num: "Full", label: "Client Management" },
      { num: "Pro", label: "Education System" },
      { num: "1", label: "Platform" },
    ],
    systemComponents: [
      { icon: "users", name: "Client Management", desc: "Booking, notes, and retention tools", status: "build" },
      { icon: "edit", name: "Education Platform", desc: "Product training and technique library", status: "build" },
      { icon: "globe", name: "Brand Identity System", desc: "Logo, colors, and voice locked", status: "live" },
    ],
  },
  {
    slug: "balance-for-life",
    initials: "BFL",
    name: "Balance For Life",
    nameParts: ["Balance", "For Life"],
    type: "Health + Wellness Platform",
    status: "build",
    statusLabel: "In Build",
    img: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=420&h=600&fit=crop",
    badgeBg: "#0a3020",
    badgeText: "#5ecfa0",
    headline: "Wellness Habit-Building at Scale.",
    body: "A community-first wellness platform that turns health goals into daily systems. Accountability, coaching, challenges, and tracking in one place.",
    stats: [
      { num: "Habit", label: "Driven" },
      { num: "Scale", label: "Ready" },
    ],
    cta: "View Case Study",
    industry: "Health + Wellness",
    platform: null,
    stack: "LESARUSS OS",
    timeline: "In Build",
    heroStats: [
      { num: "Habit", label: "Driven" },
      { num: "Build", label: "Status" },
      { num: "1", label: "Operating System" },
    ],
    heroTagline: "A community-first wellness platform that turns health goals into daily systems.",
    heroBg: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=1400&h=600&fit=crop",
    heroOverlay: "linear-gradient(160deg, #041a10 0%, #0a3020 50%, #0d3a25 100%)",
    heroStatusLabel: "In Build",
    heroIndustry: "Health + Wellness Platform",
    problemTitle: "Wellness goals with no system behind them.",
    problemBody: [
      "Motivation is not a system. Balance For Life builds the daily infrastructure: accountability, challenges, coaching, and community - so habits stick.",
    ],
    approachTitle: "Systems over willpower.",
    approachBody: [
      "LESARUSS is building a community-first wellness platform with habit tracking, coaching tools, and group accountability - designed to