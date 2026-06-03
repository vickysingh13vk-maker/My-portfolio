import type { Project, Service, Experience, Tool, Testimonial, Skill } from "./types";

export const projects: Project[] = [
  {
    slug: "koboldo",
    title: "Koboldo",
    category: "Social Commerce Platform",
    description:
      "Designed a next-generation social commerce experience combining eCommerce, product discovery, social sharing, comparisons, and community engagement.",
    challenge:
      "Users struggled to make confident purchase decisions in fragmented digital commerce spaces. The challenge was unifying product discovery, peer recommendations, and social proof into a single cohesive experience that felt natural rather than overwhelming.",
    research:
      "Conducted 24 user interviews across three demographics — Gen Z shoppers, millennial deal-seekers, and power buyers. Mapped competitive landscapes across Instagram Shopping, Pinterest, and TikTok Shop. Identified three core friction points: trust, discovery, and decision paralysis.",
    userJourney:
      "Mapped five key user archetypes — the Discoverer, the Researcher, the Social Buyer, the Deal Hunter, and the Influencer. Each journey was plotted across awareness, consideration, decision, and post-purchase phases to identify moments of delight and drop-off.",
    ia:
      "Restructured navigation around intent rather than category. Primary architecture: Discover → Compare → Community → Cart. Reduced depth from 5 levels to 3 while increasing content density by 40%.",
    wireframes:
      "Produced 180+ low-fidelity wireframes across mobile and web. Rapid prototyping cycles with weekly user testing. Key innovations: swipe-based comparison, social proof layers, and contextual recommendation cards.",
    designExploration:
      "Explored three visual directions: Editorial (magazine-inspired), Social (feed-first), and Commerce-native (product-first). User testing validated the Commerce-native direction with social layers added progressively.",
    finalUI:
      "Delivered 220+ production-ready screens across iOS, Android, and web. Design system with 180 components. Animation library with 40 micro-interactions defining the brand motion language.",
    designSystem:
      "Built a comprehensive design system with atomic components, semantic token architecture, and multi-platform guidelines. System covers typography, color, spacing, icons, and interaction states.",
    results:
      "Platform achieved 82% user retention at day-7. Conversion rate improved 3.4x versus the client's previous app. Average session duration increased to 8.2 minutes. Product launched to 50,000 beta users.",
    tags: ["eCommerce", "Social", "Mobile", "Product Design"],
    color: "#F0FDF4",
    cover: "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?auto=format&fit=crop&w=900&q=80",
  },
  {
    slug: "ecb",
    title: "ECB",
    category: "FinTech Platform",
    description:
      "Designed a lending and investment platform connecting borrowers and investors through a simple and intuitive financial experience.",
    challenge:
      "Financial products carry inherent complexity and anxiety. The task was making sophisticated lending and investment mechanics accessible to non-financial users while meeting regulatory compliance and building trust at every interaction.",
    research:
      "Interviewed 30 users across two groups: borrowers seeking capital and retail investors. Ran card sorting and tree testing to validate information architecture. Audited 12 competitor platforms for trust patterns and transparency signals.",
    userJourney:
      "Mapped parallel journeys for borrowers and investors with a shared trust-building phase. Critical moments: application submission, risk disclosure, fund movement, and portfolio review. Each touchpoint designed for clarity and confidence.",
    ia:
      "Dual-track architecture — Borrower Portal and Investor Dashboard — unified under a shared authentication and notification layer. Clear separation of concerns with cross-linking where contextually appropriate.",
    wireframes:
      "120+ wireframes covering onboarding, KYC flows, application processes, dashboards, and transaction histories. Extensive edge case coverage for error states, empty states, and loading patterns.",
    designExploration:
      "Explored conservative (banking-traditional) vs progressive (fintech-modern) visual directions. Settled on a trust-first approach: clean whites, minimal color use, data clarity over visual complexity.",
    finalUI:
      "160+ screens across web and mobile. Custom data visualization components for portfolio performance, risk scoring, and repayment tracking. Accessibility-first with WCAG 2.1 AA compliance throughout.",
    designSystem:
      "Financial-grade design system with strict typographic hierarchy, accessible color system with AAA contrast ratios for critical financial data, and form patterns optimized for accuracy.",
    results:
      "User onboarding completion rate reached 74%. Loan application abandonment decreased by 58%. Platform processed $2M in transactions within first 90 days of launch.",
    tags: ["FinTech", "Web", "Dashboard", "UX Design"],
    color: "#F0F9FF",
    cover: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80",
  },
  {
    slug: "hyperspace",
    title: "HyperSpace",
    category: "Crypto Wallet",
    description:
      "Created a modern crypto wallet experience with portfolio management, trading, and communication features.",
    challenge:
      "Crypto wallets are notoriously complex and intimidating. The challenge was abstracting blockchain complexity without sacrificing the power features that experienced users demand — a dual audience with fundamentally different mental models.",
    research:
      "Segmented users into Newcomers, Casuals, and Power Users. Ran contextual inquiry sessions to understand real-world wallet usage patterns. Identified seed phrase anxiety, gas fee confusion, and portfolio visibility as primary pain points.",
    userJourney:
      "Progressive disclosure model: simplified view for newcomers, unlockable advanced features for power users. Critical flows: receive, send, swap, stake, and communicate. Each flow designed for zero-error completion.",
    ia:
      "Tab architecture: Portfolio → Markets → Send/Receive → Discover → Settings. Wallet management surfaced contextually rather than buried in settings. Quick actions accessible from every screen.",
    wireframes:
      "200+ wireframes covering all transaction flows, security touchpoints, and portfolio views. Special attention to error recovery paths and confirmation patterns for irreversible transactions.",
    designExploration:
      "Three directions tested: Dark-premium (crypto-native), Light-clean (mainstream appeal), and Adaptive (user-controlled). Dark-premium won with crypto-native users; adaptive system adopted for wider appeal.",
    finalUI:
      "180+ screens with custom charting components, animated portfolio graphs, and a cohesive motion language. Real-time data display patterns optimized for legibility under changing market conditions.",
    designSystem:
      "Crypto-native design system with custom iconography for 200+ tokens, data visualization patterns, security state indicators, and a dark-first color system.",
    results:
      "Beta achieved 15,000 wallet activations in 60 days. Transaction completion rate 94%. Support tickets reduced 67% after UX improvements. Featured in CoinDesk as one of the best-designed wallets.",
    tags: ["Crypto", "Mobile", "Web3", "Product Design"],
    color: "#FAFAF9",
    cover: "https://images.unsplash.com/photo-1621416894569-0f39ed31d247?auto=format&fit=crop&w=900&q=80",
  },
  {
    slug: "aimshala",
    title: "Aimshala",
    category: "EdTech Platform",
    description:
      "Designed mobile, web, and dashboard experiences for a large-scale online education platform.",
    challenge:
      "Online education suffers from chronic disengagement — the average MOOC completion rate is below 10%. The challenge was designing experiences that sustained motivation, accommodated diverse learning styles, and scaled to hundreds of thousands of students.",
    research:
      "Partnered with educators and learning scientists to map motivation models. Conducted diary studies with 40 students over 4 weeks. Identified accountability, progress visibility, and peer connection as the three pillars of sustained engagement.",
    userJourney:
      "Four user types: Student, Parent, Educator, and Administrator. Each with distinct journeys, but unified data layer. Student journey: Discovery → Enrollment → Learning → Assessment → Achievement → Community.",
    ia:
      "Content-first architecture with learning-path guidance, progress tracking, and community integrated at every level. Dashboard for educators surfaces class health metrics and at-risk signals in real time.",
    wireframes:
      "300+ wireframes across three platforms: mobile app (iOS/Android), web platform, and educator dashboard. Focus on consistent experience across contexts with platform-appropriate interaction patterns.",
    designExploration:
      "Explored gamification-heavy vs. content-first vs. social-learning visual directions. Research showed students preferred content-first with selective motivational elements rather than heavy gamification.",
    finalUI:
      "350+ screens. Custom video player with chapter navigation, interactive quiz components, progress visualization system, and live session interface. Educator dashboard with class analytics and content management.",
    designSystem:
      "Education-grade design system with accessibility-first approach, dyslexia-friendly typography option, high-contrast mode, and component library covering 200+ unique components.",
    results:
      "Course completion rate increased to 41% (vs. 9% industry average). DAU grew 340% in first quarter. Educator NPS reached 72. Platform scaled to 200,000 registered learners.",
    tags: ["EdTech", "Mobile", "Web", "Dashboard"],
    color: "#FFFBEB",
    cover: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=900&q=80",
  },
  {
    slug: "doxinbird",
    title: "DoxinBird",
    category: "ERP Platform",
    description:
      "Built user-focused enterprise workflows and operational dashboards.",
    challenge:
      "Enterprise software is infamous for poor UX. Legacy ERP systems trained users to expect friction and confusion. The challenge was delivering the power of enterprise software with the ease of consumer products, without alienating existing users.",
    research:
      "Shadowed 18 employees across departments over two weeks. Process mapping revealed 47 distinct workflows with significant redundancy. Identified highest-impact friction points: data entry, approval chains, and cross-department visibility.",
    userJourney:
      "Role-based journeys for Operations, Finance, HR, and Executive users. Shared data infrastructure with role-appropriate views. Focus on reducing steps in high-frequency tasks by minimum 50%.",
    ia:
      "Modular architecture: each department as a module with shared infrastructure (notifications, search, approvals, reporting). Context-aware navigation showing only relevant modules per role.",
    wireframes:
      "250+ wireframes covering core business processes: procurement, inventory, HR workflows, financial reporting, and executive dashboards. Prototype testing with actual users in real work environments.",
    designExploration:
      "Enterprise-appropriate visual direction: structured, data-dense, but human. Avoided both the sterility of traditional enterprise and the casualness of consumer apps. Information density calibrated per user role.",
    finalUI:
      "280+ screens. Custom data grid components, interactive org chart, financial visualization suite, and bulk action patterns. All screens designed for data density without cognitive overload.",
    designSystem:
      "Enterprise design system with 240+ components, comprehensive data display patterns, form system for complex data entry, and strict accessibility standards meeting WCAG 2.1 AA.",
    results:
      "User training time reduced from 3 days to 4 hours. Task completion speed improved 62% on average. System adoption rate reached 91% — exceptional for enterprise software. Saved 14 hours per employee per week.",
    tags: ["ERP", "Enterprise", "Dashboard", "B2B"],
    color: "#F8FAFC",
    cover: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80",
  },
  {
    slug: "cinemaghar",
    title: "Cinemaghar",
    category: "OTT Streaming Platform",
    description:
      "Designed an entertainment platform combining streaming, gamification, and user engagement features.",
    challenge:
      "The streaming market is saturated. Differentiation through content alone is increasingly expensive. The challenge was designing an engagement layer that created habit and community around content consumption — turning passive viewers into active participants.",
    research:
      "Studied engagement patterns across Netflix, Hotstar, and YouTube. Ran focus groups with 35 streaming users to understand social viewing behaviors. Identified watch parties, shared watchlists, and content discussion as unmet social needs.",
    userJourney:
      "Four engagement modes: Solo Viewing, Social Viewing, Community Engagement, and Content Discovery. Gamification layer overlaid across all modes with points, achievements, and leaderboards.",
    ia:
      "Content-first with social layers: Home → Browse → My List → Watch Party → Community → Profile/Achievements. Search and recommendations powered by behavior, not just metadata.",
    wireframes:
      "160+ wireframes covering content discovery, playback experience, social features, and gamification system. Special focus on the transition between watching and engaging.",
    designExploration:
      "Cinematic dark theme as primary direction. Visual language inspired by theatrical experience — deep blacks, accent colors from cinema poster aesthetics, typographic boldness.",
    finalUI:
      "200+ screens with custom video player, real-time watch party UI, community features, and gamification dashboard. Motion design language that feels cinematic without being distracting.",
    designSystem:
      "Entertainment design system with dark-first components, custom player controls, social interaction patterns, and achievement/badge component library.",
    results:
      "Average watch time increased 2.3x versus previous platform. Watch party feature achieved 34% adoption among active users. Social features drove 28% increase in content sharing. Monthly retention improved to 71%.",
    tags: ["OTT", "Streaming", "Mobile", "Entertainment"],
    color: "#0A0A0A",
    cover: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=900&q=80",
  },
];

export const services: Service[] = [
  {
    title: "Digital Product Design",
    description:
      "End-to-end design for mobile applications, websites, SaaS products, and dashboards — from concept to production-ready screens.",
    icon: "monitor",
  },
  {
    title: "AI Product Design",
    description:
      "Leveraging AI tools to accelerate ideation, design, content creation, and product development with modern AI-powered workflows.",
    icon: "cpu",
  },
  {
    title: "Brand Identity Design",
    description:
      "Creating memorable brands, logos, packaging, and visual systems that communicate your unique value to the right audience.",
    icon: "pen-tool",
  },
  {
    title: "Marketing Creative Design",
    description:
      "Developing social media campaigns, advertising creatives, and marketing assets that convert attention into action.",
    icon: "layers",
  },
  {
    title: "Design Systems",
    description:
      "Building scalable component libraries and design systems that enable teams to ship consistent, quality products faster.",
    icon: "grid",
  },
  {
    title: "Product Strategy",
    description:
      "Helping businesses transform ideas into successful digital products through structured discovery, positioning, and roadmapping.",
    icon: "compass",
  },
];

export const experiences: Experience[] = [
  {
    company: "Alpheric Inc.",
    role: "Senior Product Designer & Creative Lead",
    period: "2023 — Present",
    description:
      "Leading product design and creative direction for AI-powered digital products. Overseeing design systems, brand strategy, and cross-functional design operations.",
  },
  {
    company: "RewardLion",
    role: "Senior UI/UX Designer",
    period: "2022 — 2025",
    description:
      "Designed loyalty and rewards platform experiences across web and mobile. Led user research initiatives and established design processes for the product team.",
  },
  {
    company: "Koboldo Inc.",
    role: "User Experience Designer",
    period: "2021 — 2023",
    description:
      "Spearheaded UX design for the social commerce platform. Drove end-to-end product design from discovery to delivery for 200+ screens.",
  },
  {
    company: "Kadritech",
    role: "UI/UX Designer",
    period: "2021 — 2022",
    description:
      "Designed enterprise software interfaces and SaaS dashboards. Collaborated closely with engineering to deliver pixel-perfect implementations.",
  },
  {
    company: "Immence",
    role: "Lead Designer",
    period: "2021",
    description:
      "Led design for multiple concurrent client projects spanning mobile apps, web platforms, and brand identity. Mentored junior designers.",
  },
  {
    company: "Virtue Infotech",
    role: "UI/UX Designer & Graphic Designer",
    period: "2020 — 2021",
    description:
      "Started career designing digital interfaces and brand materials. Developed foundational expertise in both product design and visual communication.",
  },
];

export const aiTools: Tool[] = [
  { name: "ChatGPT", category: "ai", domain: "chatgpt.com" },
  { name: "Claude", category: "ai", domain: "claude.ai" },
  { name: "Claude Code", category: "ai", domain: "anthropic.com" },
  { name: "Gemini", category: "ai", domain: "gemini.google.com" },
  { name: "OpenAI Codex", category: "ai", domain: "openai.com" },
  { name: "Veo 3", category: "ai", domain: "deepmind.google" },
  { name: "Nano Banana", category: "ai", domain: "aistudio.google.com" },
];

export const designTools: Tool[] = [
  { name: "Figma", category: "design", domain: "figma.com" },
  { name: "FigJam", category: "design", domain: "figma.com" },
  { name: "Adobe Photoshop", category: "design", domain: "adobe.com" },
  { name: "Adobe Illustrator", category: "design", domain: "adobe.com" },
  { name: "Adobe XD", category: "design", domain: "adobe.com" },
  { name: "Canva", category: "design", domain: "canva.com" },
];

export const skills: Skill[] = [
  { name: "Product Strategy", level: 95 },
  { name: "UX Design", level: 95 },
  { name: "UI Design", level: 93 },
  { name: "Design Systems", level: 90 },
  { name: "Prototyping", level: 88 },
  { name: "User Research", level: 85 },
  { name: "Branding", level: 87 },
  { name: "AI-Powered Design", level: 92 },
];

export const testimonials: Testimonial[] = [
  {
    name: "Aditya Sharma",
    role: "Co-Founder & CEO",
    company: "Koboldo Inc.",
    content:
      "Vikram transformed our product vision into an experience that users genuinely love. His ability to balance user needs with business objectives is rare. The work he delivered on Koboldo exceeded every benchmark we set.",
  },
  {
    name: "Priya Menon",
    role: "Head of Product",
    company: "Alpheric Inc.",
    content:
      "Working with Vikram is like having a product strategist and world-class designer in one person. He asks the right questions, pushes back intelligently, and delivers work that moves metrics. One of the best design minds I've worked with.",
  },
  {
    name: "Marcus Chen",
    role: "Founder",
    company: "ECB Financial",
    content:
      "Vikram took our complex financial product and made it feel simple without dumbing it down. The design system he built has scaled with us as we've grown. An exceptional designer with real product thinking.",
  },
];
