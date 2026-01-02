/**
 * Case Study Data Layer
 *
 * This file contains all case study data with comprehensive TypeScript types.
 * It provides helper functions for retrieving case studies by slug and generating static paths.
 */

// ============================================================================
// Type Definitions
// ============================================================================

export interface Metric {
  value: string;
  label: string;
  change?: string;
}

export interface ResearchMethod {
  count: string;
  label: string;
}

export interface JourneyStage {
  name: string;
  action: string;
  emotion: string;
}

export interface Persona {
  name: string;
  age: string;
  occupation: string;
  bio: string;
  goals: string[];
  frustrations: string[];
}

export interface KeyFeature {
  title: string;
  description: string;
}

export interface Competitor {
  name: string;
  rating: string;
  strengths: string[];
  weaknesses: string[];
}

export interface CompetitiveAnalysis {
  title: string;
  competitors: Competitor[];
  keyInsight: string;
}

export interface MethodologyPhase {
  name: string;
  description: string;
  activities: string[];
  outcomes: string;
}

export interface Methodology {
  approach: string;
  description: string;
  phases: MethodologyPhase[];
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
}

export interface Overview {
  role: string;
  team: string[];
  tools: string[];
  timeline: string;
  objective: string;
}

export interface ProblemStatement {
  challenge: string;
  context: string;
  userNeeds: string[];
}

export interface SolutionDetails {
  description: string;
  keyFeatures: KeyFeature[];
  designDecisions: string[];
}

export interface ImpactMetrics {
  metrics: Metric[];
  outcomes: string[];
  testimonial: Testimonial;
}

export interface CaseStudyDetail {
  role: string;
  duration: string;
  team: string;
  overview: Overview;
  problemStatement: ProblemStatement;
  competitiveAnalysis: CompetitiveAnalysis;
  challenge: string;
  solution: string;
  solutionDetails: SolutionDetails;
  impactMetrics: ImpactMetrics;
  businessGoals: string[];
  researchProcess: string;
  researchMethods: ResearchMethod[];
  insights: string[];
  painPoints: string[];
  personas: Persona[];
  journeyDescription: string;
  journeyStages: JourneyStage[];
  designApproach: string;
  testingApproach: string;
  testingMetrics: Metric[];
  taskSuccessRate: string;
  testingFindings: string[];
  finalSolution: string;
  keyFeatures: KeyFeature[];
  metrics: Metric[];
  researchImpact: string;
  learnings: string[];
  methodology: Methodology;
}

export interface CaseStudy {
  id: string;
  slug: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  outcome: string;
  comingSoon?: boolean;
  detail: CaseStudyDetail;
}

// ============================================================================
// Case Study Data
// ============================================================================

export const caseStudies: CaseStudy[] = [
  {
    id: "finpay",
    slug: "finpay",
    title: "FinPay - Mobile Banking Revolution",
    description:
      "Redesigned a leading fintech app to improve user engagement and reduce transaction times by 65%. Led end-to-end design process from research to final handoff.",
    image:
      "https://images.unsplash.com/photo-1609921212029-bb5a28e60960?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ258ZW58MXx8fHwxNzYxNTMwMDMzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["Mobile App", "Fintech", "UI/UX"],
    outcome: "65% faster transactions, 89% increase in user satisfaction",
    detail: {
      role: "Lead UI/UX Designer",
      duration: "4 months",
      team: "2 Designers, 4 Developers, 1 PM",
      overview: {
        role: "Lead UI/UX Designer",
        team: [
          "Product Manager",
          "2 UX Designers",
          "4 Engineers",
          "Data Analyst",
        ],
        tools: ["Figma", "FigJam", "Maze", "Hotjar", "Google Analytics"],
        timeline: "16 weeks (Oct 2023 - Jan 2024)",
        objective:
          "Redesign FinPay's mobile banking experience to reduce transaction friction, improve user confidence, and increase daily active users by streamlining the money transfer process and enhancing overall app usability.",
      },
      problemStatement: {
        challenge:
          "FinPay, a UK-based digital bank with 2M+ users, was experiencing a 42% abandonment rate during money transfers. User feedback indicated confusion with navigation, anxiety around security, and frustration with the multi-step transaction process.",
        context:
          "The banking industry demands trust and simplicity. With competitors offering streamlined experiences, FinPay risked losing market share. The business needed to reduce support costs (£450K annually from confused users) while improving user satisfaction.",
        userNeeds: [
          "Quick, confident money transfers without fear of errors",
          "Clear visibility into transaction status and history",
          "Accessible design for users of all ages and abilities",
          "Biometric authentication for speed and security",
          "Simple navigation without buried features",
          "Immediate confirmation and peace of mind",
        ],
      },
      competitiveAnalysis: {
        title: "Mobile Banking Competitors",
        competitors: [
          {
            name: "Monzo",
            rating: "4.7",
            strengths: [
              "Instant notifications",
              "Intuitive navigation",
              "Strong community features",
            ],
            weaknesses: [
              "Limited business features",
              "No international transfers",
              "Bright design not accessible",
            ],
          },
          {
            name: "Revolut",
            rating: "4.5",
            strengths: [
              "Fast transfers",
              "Multi-currency support",
              "Crypto integration",
            ],
            weaknesses: [
              "Complex interface",
              "Poor accessibility",
              "Overwhelming feature set",
            ],
          },
          {
            name: "Starling Bank",
            rating: "4.8",
            strengths: [
              "Clean interface",
              "Quick transfers",
              "Good accessibility",
            ],
            weaknesses: [
              "Limited customization",
              "Basic spending insights",
              "Minimal biometric use",
            ],
          },
        ],
        keyInsight:
          "All competitors failed to optimize for elderly and disabled users: a significant market gap. By combining Starling's accessibility foundation with Monzo's user-friendly approach and adding biometric quick actions, FinPay could uniquely serve both tech-savvy users and underserved accessibility-focused segments.",
      },
      challenge:
        "FinPay, a leading UK digital bank, was experiencing high drop-off rates during money transfers and poor user engagement. Users found the interface confusing, and the transaction process was unnecessarily complex with multiple steps.",
      solution:
        "I led a comprehensive redesign using a user-centred design approach, conducting extensive research to understand pain points and streamlining the user journey to create an intuitive, accessible mobile banking experience.",
      solutionDetails: {
        description:
          "Through iterative design and rigorous testing, I redesigned the core user flows to prioritize speed, clarity, and trust. The solution reduced the transfer process from 7 steps to 3, introduced biometric quick actions, and created a clear visual hierarchy that guides users confidently through transactions.",
        keyFeatures: [
          {
            title: "One-Tap Quick Send",
            description:
              "Introduced biometric-enabled quick actions for frequent contacts, reducing transfer time from 45s to 8s",
          },
          {
            title: "Progressive Disclosure",
            description:
              "Simplified navigation by grouping features logically and revealing advanced options contextually",
          },
          {
            title: "Real-Time Feedback",
            description:
              "Added visual progress indicators and instant confirmation screens to build user confidence",
          },
          {
            title: "Accessible Design System",
            description:
              "Implemented WCAG 2.1 AA standards with scalable text, high contrast modes, and screen reader optimization",
          },
        ],
        designDecisions: [
          "Placed transfer button on home screen after research showed 82% of users' primary task",
          "Used gradual onboarding to educate users without overwhelming them",
          "Implemented error prevention with inline validation and clear recovery paths",
          "Created distinct visual states for transaction stages to reduce anxiety",
        ],
      },
      impactMetrics: {
        metrics: [
          {
            value: "65%",
            label: "Faster Transaction Time",
            change: "↓ from 45s to 16s",
          },
          {
            value: "42%",
            label: "Reduced Abandonment",
            change: "↓ from 42% to 12%",
          },
          {
            value: "89%",
            label: "User Satisfaction",
            change: "↑ from 62% to 89%",
          },
        ],
        outcomes: [
          "Increased daily active users by 34%, exceeding the 25% target",
          "App Store rating improved from 3.2 to 4.6 stars with 12K+ reviews",
          "Reduced customer support tickets by 58%, saving £260K annually",
          "Transaction success rate increased from 58% to 88%",
          "Achieved WCAG 2.1 AA accessibility compliance",
          "Featured in Fintech Weekly as a case study in user-centered banking design",
        ],
        testimonial: {
          quote:
            "Priscilla transformed our app from frustrating to delightful. The redesign didn't just improve metrics; it fundamentally changed how our users feel about digital banking. The attention to accessibility and user confidence was exceptional.",
          author: "Sarah Chen",
          role: "Head of Product, FinPay",
        },
      },
      businessGoals: [
        "Reduce transaction abandonment rate by 30%",
        "Increase daily active users by 25%",
        "Improve app store ratings from 3.2 to 4.5+",
        "Decrease customer support tickets by 40%",
      ],
      researchProcess:
        "I conducted a mixed-method research approach combining quantitative analytics with qualitative user interviews. The research phase included competitive analysis, user surveys, contextual inquiries, and usability testing of the existing product.",
      researchMethods: [
        { count: "24", label: "User Interviews" },
        { count: "156", label: "Survey Responses" },
        { count: "5", label: "Competitor Apps Analysed" },
      ],
      insights: [
        "Users struggled to locate the transfer function, with 68% taking more than 30 seconds to find it",
        "85% of users preferred biometric authentication over password entry for quick transactions",
        "Users wanted to see transaction history immediately after completing a transfer",
        "First-time users needed clearer onboarding to understand app features and security measures",
      ],
      painPoints: [
        "Complex navigation with features buried in menus",
        "Lack of visual feedback during transaction processing",
        "Inconsistent design patterns across different sections",
        "Poor accessibility for users with visual impairments",
      ],
      personas: [
        {
          name: "Sarah Mitchell",
          age: "34",
          occupation: "Marketing Manager",
          bio: "Busy professional who manages finances on-the-go. Values speed and efficiency in digital banking.",
          goals: [
            "Complete transactions quickly between meetings",
            "Easily track spending across categories",
            "Set up automated payments without hassle",
          ],
          frustrations: [
            "Too many steps to complete simple transfers",
            "Can't quickly see recent transactions",
            "Confusing categorisation of expenses",
          ],
        },
        {
          name: "James Thompson",
          age: "67",
          occupation: "Retired Teacher",
          bio: "Recently adopted digital banking. Needs clear, simple interfaces with good accessibility features.",
          goals: [
            "Safely manage pension payments",
            "Understand all transactions clearly",
            "Contact support easily when needed",
          ],
          frustrations: [
            "Small text and buttons difficult to read",
            "Overwhelmed by too many features",
            "Worried about making mistakes",
          ],
        },
      ],
      journeyDescription:
        "I mapped the current user journey for money transfers, identifying key pain points and opportunities for improvement at each stage.",
      journeyStages: [
        {
          name: "Entry",
          action: "Opens app and searches for transfer option",
          emotion: "😕 Confused",
        },
        {
          name: "Setup",
          action: "Enters recipient details and amount",
          emotion: "😰 Anxious",
        },
        {
          name: "Review",
          action: "Reviews transaction details",
          emotion: "😟 Uncertain",
        },
        {
          name: "Confirm",
          action: "Authenticates and confirms",
          emotion: "😊 Relieved",
        },
        {
          name: "Complete",
          action: "Views confirmation",
          emotion: "😃 Satisfied",
        },
      ],
      designApproach:
        "Using the Double Diamond framework, I ideated multiple solutions through sketching sessions, created low-fidelity wireframes for rapid testing, refined these into mid-fidelity prototypes, and finally developed high-fidelity mockups with complete visual design.",
      testingApproach:
        "I conducted three rounds of moderated usability testing with 8 participants per round, using tasks such as 'Transfer £50 to a friend' and 'Check your transaction history'. Sessions were recorded and analysed using the System Usability Scale (SUS) and task completion metrics.",
      testingMetrics: [
        { value: "24", label: "Participants" },
        { value: "3", label: "Testing Rounds" },
        { value: "95%", label: "Task Success Rate" },
      ],
      taskSuccessRate: "95%",
      testingFindings: [
        "Round 1: Users couldn't find the 'Quick Transfer' feature - I moved it to the home screen",
        "Round 2: Confirmation screen lacked clarity - added visual hierarchy and clearer CTAs",
        "Round 3: Biometric authentication flow was smooth, with 100% success rate",
        "Final validation showed transaction completion time reduced by 65%",
      ],
      finalSolution:
        "The redesigned FinPay app features a streamlined interface with a focus on the most common tasks. I introduced a prominent Quick Transfer button on the home screen, simplified the transfer flow from 5 steps to 3 steps, and implemented biometric authentication for faster access.",
      keyFeatures: [
        {
          title: "Quick Transfer Hub",
          description:
            "One-tap access to frequent contacts and saved payees directly from home screen",
        },
        {
          title: "Smart Categories",
          description:
            "AI-powered transaction categorisation with visual spending insights",
        },
        {
          title: "Biometric Security",
          description:
            "Face ID/Touch ID authentication for secure, frictionless access",
        },
        {
          title: "Accessibility First",
          description:
            "WCAG 2.1 AA compliant with scalable fonts and high contrast mode",
        },
      ],
      metrics: [
        { value: "65%", label: "Faster Transaction Completion" },
        { value: "89%", label: "Increase in User Satisfaction" },
        { value: "52%", label: "Reduction in Support Tickets" },
        { value: "4.7★", label: "App Store Rating" },
      ],
      researchImpact:
        "User research revealed that speed and simplicity were paramount to my primary persona, Sarah. This insight drove my decision to prioritise Quick Transfer functionality on the home screen, directly addressing business goals around engagement whilst solving user pain points. The research with elderly users like James informed my accessibility improvements, which unexpectedly became a key differentiator in the market.",
      learnings: [
        "Accessibility improvements benefit all users, not just those with impairments - my larger touch targets and clearer typography improved usability across all demographics",
        "Incremental testing prevented major redesign pivots - catching issues early saved weeks of development time",
        "Balancing business metrics with user needs created sustainable growth - focusing on user satisfaction ultimately drove the business KPIs",
      ],
      methodology: {
        approach: "User-Centred Design",
        description:
          "I employed a rigorous User-Centred Design methodology throughout this project, ensuring that every design decision was validated with real users. This iterative approach allowed me to balance business objectives with user needs, creating a solution that drove both satisfaction and commercial success.",
        phases: [
          {
            name: "Discover & Research",
            description:
              "I began by immersing myself in the existing FinPay experience to understand current pain points. I conducted 24 in-depth user interviews with customers ranging from tech-savvy millennials to elderly users managing pensions. I analysed app analytics to identify drop-off points and ran surveys with 156 existing users to quantify satisfaction levels. My competitive analysis of 5 leading banking apps revealed industry best practices and opportunities for differentiation.",
            activities: [
              "User interviews",
              "Analytics review",
              "Competitive analysis",
              "Heuristic evaluation",
              "User surveys",
            ],
            outcomes:
              "Identified that 68% of users struggled to locate transfer functions, and 85% wanted biometric authentication, critical insights that shaped the entire redesign.",
          },
          {
            name: "Define & Synthesise",
            description:
              "I synthesised research findings into actionable insights by creating detailed user personas representing my key demographics. Sarah Mitchell and James Thompson became my north stars, guiding every design decision. I mapped current user journeys to visualise pain points and created problem statements that aligned user needs with business goals. This phase was crucial for getting stakeholder buy-in, as I could clearly demonstrate how solving user problems would drive business metrics.",
            activities: [
              "Persona development",
              "Journey mapping",
              "Problem statement definition",
              "Stakeholder workshops",
              "Opportunity identification",
            ],
            outcomes:
              "Created 2 detailed personas and journey maps that revealed 5 critical pain points, each mapped to specific business objectives.",
          },
          {
            name: "Ideate & Conceptualise",
            description:
              "I facilitated collaborative ideation sessions with designers, developers, and product managers to generate diverse solutions. Using techniques like Crazy 8s and feature prioritisation matrices, I explored multiple approaches to simplifying transfers, improving navigation, and enhancing accessibility. I created multiple design concepts, from conservative iterations to bold reimaginings, ensuring I considered all possibilities before committing to a direction.",
            activities: [
              "Sketching workshops",
              "Crazy 8s exercises",
              "Feature prioritisation",
              "Concept exploration",
              "Design critiques",
            ],
            outcomes:
              "Generated 40+ unique concepts and narrowed down to 3 strong directions for prototyping and testing.",
          },
          {
            name: "Prototype & Design",
            description:
              "I created low-fidelity wireframes to test core concepts with users before investing in high-fidelity designs. Starting with paper prototypes, I validated navigation structures and information architecture with 12 users. Mid-fidelity prototypes let me test interaction patterns and visual hierarchy. Only after multiple rounds of iteration did I create high-fidelity designs incorporating FinPay's brand identity. Throughout this phase, I worked closely with developers to ensure technical feasibility whilst maintaining design quality.",
            activities: [
              "Paper prototyping",
              "Wireframing",
              "Interactive prototyping",
              "Design system development",
              "Accessibility audits",
            ],
            outcomes:
              "Created a comprehensive design system with 50+ reusable components and interactive prototypes for all key user flows.",
          },
          {
            name: "Test & Iterate",
            description:
              "I conducted 6 rounds of usability testing with 56 participants, observing real users attempting core tasks. Each round revealed insights that refined the design: from adjusting button sizes after watching James struggle with tap targets, to repositioning the Quick Transfer feature after users consistently overlooked it. I used think-aloud protocols to understand mental models and measured task success rates to quantify improvements. This iterative testing approach prevented costly mistakes and ensured the final design truly met user needs.",
            activities: [
              "Moderated usability testing",
              "A/B testing",
              "Accessibility testing",
              "Analytics validation",
              "Iteration cycles",
            ],
            outcomes:
              "Achieved 92% task success rate and 89% user satisfaction before launch, validating the effectiveness of my iterative approach.",
          },
        ],
      },
    },
  },
  {
    id: "shopsphere",
    slug: "shopsphere",
    title: "ShopSphere - E-commerce Platform",
    description:
      "Designed a responsive e-commerce platform for a UK retailer with accessible checkout flow, resulting in improved conversions across all devices.",
    image:
      "https://images.unsplash.com/photo-1727407209320-1fa6ae60ee05?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjBzaG9wcGluZ3xlbnwxfHx8fDE3NjE1MzY3MzV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["Responsive Web App", "E-commerce", "Accessibility"],
    outcome: "28% increase in conversion rate, WCAG 2.1 AA compliant",
    detail: {
      role: "Senior UX Designer",
      duration: "6 months",
      team: "3 Designers, 6 Developers, 1 Product Owner",
      overview: {
        role: "Senior UX Designer",
        team: [
          "Product Owner",
          "3 UX/UI Designers",
          "6 Frontend Engineers",
          "QA Specialist",
        ],
        tools: [
          "Figma",
          "Hotjar",
          "Google Analytics",
          "Optimal Workshop",
          "Axe DevTools",
        ],
        timeline: "24 weeks (Mar 2023 - Aug 2023)",
        objective:
          "Transform ShopSphere's e-commerce platform into a fully responsive, accessible shopping experience that reduces cart abandonment, increases mobile conversions, and meets WCAG 2.1 AA standards across all devices.",
      },
      problemStatement: {
        challenge:
          "ShopSphere, a UK fashion retailer with 500K monthly visitors, suffered from a 73% checkout abandonment rate, significantly higher than the 69% industry average. Mobile users faced a broken experience with 45% form error rates, and the platform completely excluded users with disabilities due to accessibility failures.",
        context:
          "With 68% of traffic from mobile devices and competitors offering seamless experiences, ShopSphere risked losing market share. The business needed to modernize quickly to stay competitive while expanding to an underserved accessible market worth £249 billion in the UK.",
        userNeeds: [
          "Transparent pricing with no surprise costs at checkout",
          "Mobile-optimized forms with smart autofill and validation",
          "Quick guest checkout without forced account creation",
          "Accessible experience for screen reader and keyboard users",
          "Visual product confirmation throughout checkout",
          "Multiple device support with saved cart persistence",
        ],
      },
      competitiveAnalysis: {
        title: "UK Fashion E-commerce",
        competitors: [
          {
            name: "ASOS",
            rating: "4.5",
            strengths: [
              "Seamless mobile checkout",
              "Guest checkout option",
              "Clear delivery estimates",
            ],
            weaknesses: [
              "Limited accessibility features",
              "Overwhelming product options",
              "Cluttered UI",
            ],
          },
          {
            name: "Zara",
            rating: "4.3",
            strengths: [
              "Beautiful minimalist design",
              "Fast checkout flow",
              "Real-time stock updates",
            ],
            weaknesses: [
              "Poor screen reader support",
              "Limited payment options",
              "No cart persistence",
            ],
          },
          {
            name: "Next",
            rating: "4.6",
            strengths: [
              "Strong accessibility",
              "Flexible delivery options",
              "Easy returns process",
            ],
            weaknesses: [
              "Dated visual design",
              "Slow mobile performance",
              "Multi-step checkout",
            ],
          },
        ],
        keyInsight:
          "No competitor successfully combined mobile excellence with accessibility compliance. By merging ASOS's mobile-first checkout with Next's accessibility standards and implementing transparent pricing, ShopSphere could uniquely serve both mainstream mobile shoppers and the underserved accessible e-commerce market, reducing abandonment while expanding addressable audience.",
      },
      challenge:
        "ShopSphere, a major UK fashion retailer, had a checkout abandonment rate of 73%, well above the industry average. Users complained about a confusing checkout process, unexpected costs, and poor mobile experience. The platform also failed to meet accessibility standards, excluding users with disabilities. With over 68% of traffic coming from mobile devices, responsive design was critical.",
      solution:
        "I redesigned the entire e-commerce journey as a fully responsive web application optimised for mobile, tablet, and desktop experiences. The solution focused on transparency, simplicity, and accessibility. By implementing a single-page checkout with adaptive layouts, clear progress indicators, and WCAG 2.1 AA compliance, I created an inclusive shopping experience that works seamlessly across all devices.",
      solutionDetails: {
        description:
          "I redesigned the checkout as a responsive single-page experience with adaptive layouts for mobile, tablet, and desktop. The solution prioritized transparency (showing all costs upfront), simplicity (reducing form fields by 60%), and accessibility (achieving WCAG 2.1 AA compliance with keyboard navigation and screen reader optimization).",
        keyFeatures: [
          {
            title: "Adaptive Single-Page Checkout",
            description:
              "Responsive layout that adapts seamlessly from mobile to desktop, reducing steps from 5 pages to 1 scrollable view",
          },
          {
            title: "Smart Form Intelligence",
            description:
              "Auto-address lookup, inline validation, and mobile-optimized input types reduced error rates by 78%",
          },
          {
            title: "Full Accessibility Compliance",
            description:
              "WCAG 2.1 AA certified with keyboard navigation, screen reader optimization, and high contrast modes",
          },
          {
            title: "Transparent Pricing",
            description:
              "All costs (delivery, VAT, discounts) visible from cart page, eliminating surprise fees at checkout",
          },
        ],
        designDecisions: [
          "Implemented guest checkout after research showed 24% abandoned due to forced registration",
          "Used sticky order summary on mobile to keep total cost visible during scrolling",
          "Reduced form fields from 23 to 9 essential inputs through smart defaults",
          "Added product thumbnails in checkout after testing showed 34% reduction in buyer hesitation",
        ],
      },
      impactMetrics: {
        metrics: [
          {
            value: "42%",
            label: "Reduced Cart Abandonment",
            change: "↓ from 73% to 42%",
          },
          {
            value: "51%",
            label: "Increase in Mobile Conversions",
            change: "↑ 51% vs previous",
          },
          {
            value: "100%",
            label: "WCAG 2.1 AA Compliance",
            change: "From 0% compliant",
          },
        ],
        outcomes: [
          "Cart abandonment dropped from 73% to 42%, exceeding the 60% target",
          "Mobile conversion rate increased by 51%, surpassing the 35% goal",
          "Average order value increased by 23% through better product visibility",
          "Achieved WCAG 2.1 AA compliance, opening platform to 14M UK users with disabilities",
          "Form completion time reduced from 4m 32s to 1m 48s",
          "Customer support tickets related to checkout decreased by 67%",
          "Featured in Digital Commerce 360 as exemplar of accessible e-commerce",
        ],
        testimonial: {
          quote:
            "The redesign didn't just improve our metrics; it fundamentally transformed our business. We're now the go-to fashion retailer for accessible shopping, and our mobile revenue has doubled. Priscilla's commitment to inclusive design opened an entirely new market for us.",
          author: "Michael Foster",
          role: "Head of Digital, ShopSphere",
        },
      },
      businessGoals: [
        "Reduce checkout abandonment from 73% to below 60%",
        "Increase mobile conversion rate by 35%",
        "Achieve WCAG 2.1 AA compliance across the platform",
        "Improve average order value by 15%",
      ],
      researchProcess:
        "I employed a comprehensive UX research strategy including heatmap analysis, session recordings, checkout funnel analytics, and moderated usability testing. I also conducted accessibility audits and recruited users with various disabilities for inclusive testing.",
      researchMethods: [
        { count: "32", label: "User Interviews" },
        { count: "2,400", label: "Session Recordings Analysed" },
        { count: "8", label: "Accessibility Audits" },
      ],
      insights: [
        "72% of users abandoned checkout when unexpected delivery costs appeared on the final step",
        "Mobile users struggled with form inputs, with 45% error rate on address fields",
        "Screen reader users couldn't complete checkout due to poor semantic HTML and missing ARIA labels",
        "Users wanted to see product images and details in the checkout for reassurance",
      ],
      painPoints: [
        "Hidden costs revealed only at final checkout step",
        "Multi-page checkout requiring 8+ steps to complete",
        "Form validation errors unclear and difficult to fix",
        "No guest checkout option, forcing account creation",
        "Poor colour contrast and keyboard navigation",
      ],
      personas: [
        {
          name: "Emma Richardson",
          age: "28",
          occupation: "Digital Marketing Specialist",
          bio: "Fashion-conscious professional who shops primarily on mobile during commute. Values quick checkout and transparent pricing.",
          goals: [
            "Complete purchases quickly on mobile",
            "See all costs upfront without surprises",
            "Easily save items for later consideration",
          ],
          frustrations: [
            "Hidden delivery costs at checkout",
            "Forced account creation",
            "Difficult mobile form inputs",
          ],
        },
        {
          name: "David Chen",
          age: "42",
          occupation: "Accessibility Consultant",
          bio: "Uses screen reader due to visual impairment. Experienced online shopper who values accessibility and clear navigation.",
          goals: [
            "Navigate site independently with screen reader",
            "Complete checkout without assistance",
            "Clearly understand product details and costs",
          ],
          frustrations: [
            "Poor alt text and ARIA labels",
            "Keyboard navigation traps",
            "Form errors not announced",
          ],
        },
      ],
      journeyDescription:
        "I mapped the complete shopping journey from product discovery through checkout, identifying critical pain points affecting conversion rates.",
      journeyStages: [
        {
          name: "Browse",
          action: "Discovers products via search or category",
          emotion: "😊 Interested",
        },
        {
          name: "Select",
          action: "Views product details and adds to cart",
          emotion: "🤔 Considering",
        },
        {
          name: "Review Cart",
          action: "Reviews cart and proceeds to checkout",
          emotion: "😟 Hesitant",
        },
        {
          name: "Checkout",
          action: "Fills shipping and payment details",
          emotion: "😰 Frustrated",
        },
        {
          name: "Confirm",
          action: "Reviews final costs and confirms",
          emotion: "😠 Angry",
        },
      ],
      designApproach:
        "I used a mobile-first design approach, starting with the most constrained viewport and progressively enhancing for larger screens. I created responsive wireframes, conducted accessibility audits at every stage, and developed a comprehensive component library.",
      testingApproach:
        "I conducted four rounds of usability testing across different devices (mobile, tablet, desktop) with diverse participants including screen reader users, elderly users, and typical e-commerce shoppers. Each session focused on completing a purchase from start to finish.",
      testingMetrics: [
        { value: "32", label: "Participants" },
        { value: "4", label: "Testing Rounds" },
        { value: "88%", label: "Task Success Rate" },
      ],
      taskSuccessRate: "88%",
      testingFindings: [
        "Round 1: Mobile users couldn't see total cost while scrolling - added sticky summary",
        "Round 2: Screen reader users missed form errors - improved ARIA live regions",
        "Round 3: Users abandoned due to forced registration - implemented guest checkout",
        "Round 4: Final validation showed 88% successful checkout completion",
      ],
      finalSolution:
        "The redesigned ShopSphere platform features a fully responsive, accessible checkout experience. The single-page design adapts intelligently across devices, while comprehensive accessibility features ensure all users can shop independently.",
      keyFeatures: [
        {
          title: "Responsive Checkout",
          description:
            "Single-page checkout that adapts seamlessly from mobile to desktop",
        },
        {
          title: "Smart Forms",
          description:
            "Auto-address lookup and inline validation reduce errors by 78%",
        },
        {
          title: "Guest Checkout",
          description: "Quick checkout option without forced account creation",
        },
        {
          title: "Full Accessibility",
          description:
            "WCAG 2.1 AA compliant with screen reader and keyboard navigation",
        },
      ],
      metrics: [
        { value: "42%", label: "Cart Abandonment Rate" },
        { value: "51%", label: "Mobile Conversion Increase" },
        { value: "100%", label: "WCAG 2.1 AA Compliant" },
        { value: "23%", label: "Higher Average Order Value" },
      ],
      researchImpact:
        "Research with mobile users like Emma revealed that unexpected costs at checkout were the primary abandonment driver. This insight led to the transparent pricing feature, which directly addressed the 73% abandonment rate. Testing with accessibility users like David uncovered critical WCAG failures that, once fixed, opened the platform to millions of previously excluded shoppers.",
      learnings: [
        "Mobile-first design creates better experiences on all devices - starting with constraints improved overall usability",
        "Accessibility benefits everyone - features like clear labels and error messages improved conversion for all users",
        "Transparency builds trust - showing all costs upfront reduced abandonment more than any UX optimization",
      ],
      methodology: {
        approach: "Mobile-First Responsive Design",
        description:
          "I employed a mobile-first, accessibility-driven approach to redesign ShopSphere's e-commerce platform. By starting with mobile constraints and building up, I ensured the experience worked seamlessly across all devices while meeting WCAG 2.1 AA standards from the ground up.",
        phases: [
          {
            name: "Research & Audit",
            description:
              "I began with comprehensive analytics review to identify drop-off points in the checkout funnel. I analyzed 2,400+ session recordings to understand user behavior patterns. Accessibility audits using Axe DevTools revealed 147 WCAG violations. User interviews with 32 shoppers, including those using assistive technologies, uncovered both usability and accessibility barriers preventing successful checkout completion.",
            activities: [
              "Analytics analysis",
              "Session recordings review",
              "Accessibility audits",
              "User interviews",
              "Heuristic evaluation",
            ],
            outcomes:
              "Identified that 72% of abandonments occurred at checkout due to surprise costs, and platform was completely inaccessible to screen reader users.",
          },
          {
            name: "Define & Strategize",
            description:
              "I synthesized research into actionable insights by creating personas representing mobile-first shoppers and users with accessibility needs. I mapped the complete shopping journey, identifying 8 critical friction points. Working with stakeholders, I defined success metrics that balanced business goals (reduced abandonment, increased conversion) with user needs (transparency, accessibility). This phase established the foundation for a mobile-first, accessible redesign.",
            activities: [
              "Persona creation",
              "Journey mapping",
              "Friction point analysis",
              "Success metrics definition",
              "Stakeholder alignment",
            ],
            outcomes:
              "Created 2 key personas and identified that transparent pricing and accessibility were the highest-impact opportunities.",
          },
          {
            name: "Design & Prototype",
            description:
              "I started with mobile wireframes to establish the core checkout flow within the most constrained viewport. I progressively enhanced the design for tablet and desktop, ensuring responsive breakpoints felt natural. Throughout, I worked with accessibility specialists to ensure WCAG 2.1 AA compliance, implementing proper semantic HTML, ARIA labels, and keyboard navigation. I created an interactive prototype demonstrating the responsive behavior and accessibility features.",
            activities: [
              "Mobile-first wireframing",
              "Responsive breakpoint design",
              "Accessibility implementation",
              "Interactive prototyping",
              "Design system creation",
            ],
            outcomes:
              "Delivered responsive prototypes for mobile, tablet, and desktop, all meeting WCAG 2.1 AA standards, with a comprehensive component library.",
          },
          {
            name: "Test & Refine",
            description:
              "I conducted extensive testing across devices and user types. Four rounds of moderated testing with 32 participants included mobile shoppers testing on their own devices, screen reader users navigating with assistive technology, and elderly users evaluating clarity and usability. Each round revealed critical insights that refined the design, from sticky cost summaries on mobile to improved form error announcements for screen readers.",
            activities: [
              "Multi-device usability testing",
              "Accessibility testing",
              "A/B testing",
              "Form validation testing",
              "Iterative refinement",
            ],
            outcomes:
              "Achieved 88% checkout completion rate in testing, validated WCAG 2.1 AA compliance, and received unanimous positive feedback on transparency.",
          },
        ],
      },
    },
  },
  {
    id: "healthhub",
    slug: "healthhub",
    title: "HealthHub - Patient Portal",
    description:
      "Designed an intuitive patient portal for the NHS, focusing on elderly users. Conducted extensive user research and usability testing to ensure the platform was accessible to all demographics.",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NjE1NzAxMTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["Healthcare", "Accessibility", "User Research"],
    outcome: "95% user satisfaction rating, 50,000+ active users",
    detail: {
      role: "Lead UX Designer & Researcher",
      duration: "8 months",
      team: "4 Designers, 8 Developers, 2 Clinical Advisors",
      overview: {
        role: "Lead Product Designer & Researcher",
        team: [
          "2 Clinical Advisors",
          "4 UX Designers",
          "8 Developers",
          "NHS Digital Advisor",
        ],
        tools: [
          "Figma",
          "UserTesting.com",
          "Axe DevTools",
          "NVDA Screen Reader",
          "Optimal Workshop",
        ],
        timeline: "32 weeks (Feb 2023 - Sep 2023)",
        objective:
          "Design an NHS-compliant patient portal that empowers elderly users (60+) to independently manage healthcare appointments, prescriptions, and test results, reducing surgery call volumes while achieving WCAG 2.1 AAA accessibility standards.",
      },
      problemStatement: {
        challenge:
          "NHS GP surgeries were overwhelmed with phone calls: 78% for routine tasks like appointment bookings. Elderly patients (the primary demographic) struggled with existing digital services due to small text, confusing navigation, and medical jargon. This created a barrier to care and increased surgery workload.",
        context:
          "The NHS Digital Transformation agenda required GP surgeries to offer online services, but existing portals had <15% adoption among 60+ users. With an aging population and limited surgery staff, creating an accessible digital solution was critical to sustainable healthcare delivery.",
        userNeeds: [
          "Large, readable text and touch targets for users with vision/dexterity issues",
          "Plain language explanations without medical jargon",
          "Clear confirmation before critical actions (cancel appointment, etc.)",
          "Reassurance about data privacy and security",
          "Simple navigation with minimal steps",
          "Help and support easily accessible",
        ],
      },
      competitiveAnalysis: {
        title: "NHS Patient Portals",
        competitors: [
          {
            name: "Patient Access",
            rating: "3.8",
            strengths: [
              "Wide NHS coverage",
              "Prescription ordering",
              "Appointment booking",
            ],
            weaknesses: [
              "Complex navigation",
              "Small text",
              "Poor elderly user adoption",
            ],
          },
          {
            name: "NHS App",
            rating: "4.1",
            strengths: [
              "Official NHS platform",
              "Good feature set",
              "Improving accessibility",
            ],
            weaknesses: [
              "Overwhelming for basic tasks",
              "Medical terminology",
              "Limited surgery integration",
            ],
          },
          {
            name: "mjog Patient Portal",
            rating: "3.5",
            strengths: [
              "Simple appointment system",
              "SMS reminders",
              "Easy cancellation",
            ],
            weaknesses: [
              "Dated design",
              "Limited test results access",
              "Poor mobile experience",
            ],
          },
        ],
        keyInsight:
          "All existing NHS portals failed to optimize for elderly users, the demographic that uses healthcare services most frequently. By designing specifically for 60+ patients with AAA accessibility, plain language alternatives, and reassuring interaction patterns, HealthHub could achieve 3-4x higher adoption rates than competitors among this critical underserved audience.",
      },
      challenge:
        "The NHS Trust needed a digital patient portal to reduce administrative burden and improve patient engagement. The primary challenge was designing for an elderly demographic (60+ years) who had varying levels of digital literacy. The portal needed to handle sensitive health information whilst remaining simple enough for all users.",
      solution:
        "Through extensive co-design sessions with patients and healthcare professionals, I created an accessible, empathetic portal that prioritised clarity and trust. The design used plain language, clear visual hierarchy, and multiple accessibility features to ensure usability across all age groups and abilities.",
      solutionDetails: {
        description:
          "I designed HealthHub as an accessibility-first portal optimized for elderly users through participatory design. The solution uses extra-large typography (minimum 18px), high contrast (7:1 ratio), plain language, and provides reassuring confirmation at every step. The interface reduces appointment booking from 7 steps to 3, with clear visual feedback and easy undo options.",
        keyFeatures: [
          {
            title: "Elderly-Optimized Interface",
            description:
              "Extra-large text (18px+), high contrast modes, generous spacing, and 48x48px minimum touch targets for users with reduced dexterity",
          },
          {
            title: "Plain Language System",
            description:
              "Medical jargon replaced with clear explanations, tooltips for complex terms, and step-by-step guidance",
          },
          {
            title: "Reassuring Interactions",
            description:
              "Confirmation dialogs before critical actions, easy undo functionality, and clear success/error messaging",
          },
          {
            title: "AAA Accessibility Compliance",
            description:
              "Achieved WCAG 2.1 AAA standards with screen reader optimization, keyboard navigation, and voice control compatibility",
          },
        ],
        designDecisions: [
          "Made 'Book Appointment' the primary dashboard action after observing it was users' top task",
          "Added plain language tooltips after 67% of users struggled with medical terms",
          "Implemented confirmation step for cancellations after users expressed anxiety about mistakes",
          "Increased minimum text size to 18px (vs NHS standard 16px) based on elderly user testing",
        ],
      },
      impactMetrics: {
        metrics: [
          {
            value: "62%",
            label: "Elderly User Adoption",
            change: "vs 15% industry avg",
          },
          {
            value: "43%",
            label: "Reduced Surgery Calls",
            change: "↓ 43% within 6 months",
          },
          {
            value: "AAA",
            label: "WCAG Accessibility",
            change: "Highest NHS standard",
          },
        ],
        outcomes: [
          "Achieved 62% adoption among 60+ users, 4x higher than industry average",
          "Reduced GP surgery phone calls by 43%, exceeding the 30% target",
          "Appointment attendance increased by 19% due to easy self-service management",
          "94% task success rate among elderly users during testing",
          "User satisfaction rating of 93%, surpassing the 90% goal",
          "Won NHS Digital Service Award for Accessible Design 2024",
          "Adopted by 120+ GP surgeries across UK within 12 months",
        ],
        testimonial: {
          quote:
            "HealthHub transformed how our elderly patients interact with the surgery. We've seen a dramatic reduction in phone call volume, but more importantly, our patients feel empowered and confident managing their own healthcare. Priscilla's commitment to co-design with real patients made all the difference.",
          author: "Dr. Emma Patterson",
          role: "Clinical Lead, NHS Hampshire",
        },
      },
      businessGoals: [
        "Reduce GP reception call volume by 40%",
        "Achieve 50,000 registered users in first year",
        "Increase appointment attendance rate by 15%",
        "Maintain 90%+ user satisfaction rating",
      ],
      researchProcess:
        "My research phase included ethnographic studies in GP surgeries, co-design workshops with patients aged 60-85, cognitive walkthroughs with healthcare professionals, and accessibility testing with users with various impairments. I partnered with Age UK to recruit participants representative of the target demographic.",
      researchMethods: [
        { count: "48", label: "Patient Interviews" },
        { count: "12", label: "Co-design Workshops" },
        { count: "6", label: "GP Surgeries Visited" },
      ],
      insights: [
        "67% of elderly users preferred larger text and buttons, even on desktop",
        "Patients were anxious about privacy and wanted clear explanations of data security",
        "Medical jargon was a significant barrier - users wanted plain English alternatives",
        "Users needed reassurance at every step, especially when booking or cancelling appointments",
      ],
      painPoints: [
        "Fear of making mistakes when booking or cancelling appointments",
        "Confusion about medical terminology in test results",
        "Difficulty navigating complex menu structures",
        "Anxiety about data security and who can see their information",
        "Small touch targets difficult for users with arthritis",
      ],
      personas: [
        {
          name: "Margaret Wilson",
          age: "72",
          occupation: "Retired Librarian",
          bio: "Manages multiple health conditions and attends regular appointments. Comfortable with basic technology but lacks confidence with new systems.",
          goals: [
            "Book and manage GP appointments independently",
            "View test results and understand what they mean",
            "Request prescription renewals without calling surgery",
          ],
          frustrations: [
            "Worried about accidentally cancelling wrong appointment",
            "Can't understand medical terms in test results",
            "Small text difficult to read",
          ],
        },
        {
          name: "Robert Hughes",
          age: "68",
          occupation: "Retired Engineer",
          bio: "Tech-savvy but has reduced dexterity due to Parkinson's disease. Values efficiency but needs accessible interface.",
          goals: [
            "Quickly check upcoming appointments",
            "Download medical records for travel insurance",
            "Message GP surgery about medication queries",
          ],
          frustrations: [
            "Small buttons difficult to tap accurately",
            "No confirmation before important actions",
            "Can't easily undo mistakes",
          ],
        },
      ],
      journeyDescription:
        "I mapped the typical patient journey from registration through to ongoing portal use, identifying opportunities to build trust and reduce anxiety at critical touchpoints.",
      journeyStages: [
        {
          name: "Registration",
          action: "Receives invite letter and registers online",
          emotion: "😰 Nervous",
        },
        {
          name: "First Login",
          action: "Logs in and explores features with onboarding",
          emotion: "😊 Curious",
        },
        {
          name: "Book Appointment",
          action: "Finds and books GP appointment",
          emotion: "😌 Confident",
        },
        {
          name: "View Results",
          action: "Checks test results with plain language",
          emotion: "😌 Reassured",
        },
        {
          name: "Ongoing Use",
          action: "Regularly manages health appointments",
          emotion: "😃 Empowered",
        },
      ],
      designApproach:
        "I used a participatory design approach, involving patients throughout the process. Low-fidelity paper prototypes were tested in GP surgeries, allowing me to observe real patients attempting tasks. Mid-fidelity prototypes incorporated feedback on language and hierarchy, and high-fidelity designs were tested for accessibility with assistive technologies.",
      testingApproach:
        "Testing was conducted in natural environments (GP surgeries and patients' homes) to understand real-world context. I used think-aloud protocols with elderly participants, observed body language and confidence levels, and conducted follow-up interviews. Accessibility testing included screen readers, voice control, and high contrast modes.",
      testingMetrics: [
        { value: "56", label: "Participants" },
        { value: "6", label: "Testing Rounds" },
        { value: "94%", label: "Task Success Rate" },
      ],
      taskSuccessRate: "94%",
      testingFindings: [
        "Round 1-2: Users couldn't find 'Book Appointment' - I made it the primary action on dashboard",
        "Round 3: Medical terminology caused confusion - I added plain language tooltips and explanations",
        "Round 4: Users wanted confirmation before cancelling appointments - I added a clear confirmation step with undo option",
        "Round 5-6: Accessibility testing revealed need for better colour contrast and focus indicators",
        "Final validation: Average task completion time 3m 12s, with 94% success rate among 65+ users",
      ],
      finalSolution:
        "HealthHub is a patient-centred portal that puts clarity and trust at its core. The design uses large, clear typography, simple navigation with a maximum of two levels, and plain language throughout. Every action includes clear confirmation steps, and comprehensive help is available at every stage.",
      keyFeatures: [
        {
          title: "Plain Language Interface",
          description:
            "Medical terms explained in simple English with helpful tooltips and guides",
        },
        {
          title: "Appointment Management",
          description:
            "Large, clear buttons for booking with confirmation steps and calendar integration",
        },
        {
          title: "Test Results Dashboard",
          description:
            "Results displayed with context, normal ranges, and 'what this means' explanations",
        },
        {
          title: "Enhanced Accessibility",
          description:
            "Exceeds WCAG 2.1 AAA standards with high contrast, large touch targets, and voice control",
        },
      ],
      metrics: [
        { value: "95%", label: "User Satisfaction Rating" },
        { value: "52,000+", label: "Active Users in First Year" },
        { value: "43%", label: "Reduction in Reception Calls" },
        { value: "89%", label: "Appointment Attendance Rate" },
      ],
      researchImpact:
        "My co-design workshops with elderly patients were transformative. Margaret's input about feeling 'terrified of pressing the wrong button' led me to implement comprehensive confirmation dialogs and undo functionality. This directly addressed the business goal of reducing call volume, as patients felt confident using the portal independently. Clinical advisor input ensured my plain language explanations were medically accurate whilst remaining accessible, balancing user needs with professional healthcare standards.",
      learnings: [
        "Co-design with representative users is invaluable - insights from elderly participants shaped every design decision and couldn't have been uncovered through traditional research alone",
        "Building trust takes time - extensive onboarding, clear explanations, and forgiving error handling were crucial for user adoption",
        "Exceeding accessibility standards benefits everyone - my AAA compliance features were praised by users of all ages and abilities",
      ],
      methodology: {
        approach: "Design Thinking with Co-Design",
        description:
          "I employed a Design Thinking methodology enhanced with participatory co-design practices. Given the sensitive healthcare context and elderly target demographic, I involved patients, healthcare professionals, and clinical advisors throughout the entire process. This was a greenfield project requiring us to understand market gaps and user needs before designing from scratch.",
        phases: [
          {
            name: "Empathise & Discover",
            description:
              "As this was a new patient portal, I began by conducting comprehensive market research to understand the digital healthcare landscape in the UK. I surveyed 250 NHS patients to identify gaps in current healthcare services and understand what features they needed most. My competitor analysis examined 7 existing patient portals across UK NHS Trusts and private healthcare providers, identifying common pain points and opportunities for innovation. I conducted ethnographic research in 6 GP surgeries, observing how patients currently interact with reception staff and manage appointments. I partnered with Age UK to recruit 48 patients aged 60-85 for in-depth interviews, understanding their fears, motivations, and digital literacy levels. This empathy phase was crucial—I heard Margaret describe feeling 'terrified of pressing the wrong button', which became a guiding principle for the entire design.",
            activities: [
              "Market gap analysis",
              "User surveys (250 patients)",
              "Competitor analysis (7 portals)",
              "Ethnographic studies",
              "Patient interviews",
              "Stakeholder workshops",
            ],
            outcomes:
              "Identified that 67% of patients wanted digital access to health records but feared making mistakes. Competitor analysis revealed all existing portals suffered from medical jargon and complex navigation, creating my opportunity for differentiation.",
          },
          {
            name: "Define & Synthesise",
            description:
              "I synthesised extensive research into clear problem statements and opportunity areas. Working with clinical advisors, I defined what success would look like—not just business metrics, but genuine improvements to patient care and experience. I created detailed personas representing our diverse patient base, from Margaret (72, retired librarian with multiple conditions) to Robert (68, tech-savvy but with Parkinson's). I mapped current patient journeys from registration to ongoing portal use, identifying moments of anxiety and opportunities to build trust. I facilitated workshops with GP surgery staff to understand administrative burdens and how digital solutions could help. This definition phase ensured everyone—from designers to clinicians to administrators—aligned on the problems we were solving.",
            activities: [
              "Problem statement definition",
              "Persona development",
              "Journey mapping",
              "Clinical advisor workshops",
              "Pain point prioritisation",
              "Opportunity framing",
            ],
            outcomes:
              "Defined 3 core user personas and mapped 5-stage patient journey highlighting 8 critical moments requiring careful design consideration.",
          },
          {
            name: "Ideate & Co-Create",
            description:
              "I facilitated 12 co-design workshops bringing together patients, healthcare professionals, and designers to ideate solutions collaboratively. In these sessions, I used low-fidelity sketching and card sorting exercises to explore how patients wanted to interact with health information. Patients helped design the dashboard layout, deciding what information felt most important to see first. We explored multiple approaches to presenting test results—medical staff wanted technical accuracy whilst patients wanted plain English explanations. Through collaborative ideation, we developed the concept of dual-layer information: headline summaries in plain language with 'learn more' options for detail. This co-creation process generated 50+ feature ideas which we then prioritised together based on patient needs and technical feasibility.",
            activities: [
              "Co-design workshops",
              "Collaborative sketching",
              "Card sorting exercises",
              "Feature prioritisation",
              "Plain language exploration",
              "Information architecture development",
            ],
            outcomes:
              "Generated 50+ feature concepts and collaboratively prioritised 15 core features for MVP, ensuring solutions truly addressed patient needs.",
          },
          {
            name: "Prototype & Build",
            description:
              "I created iterative prototypes tested directly with patients in natural environments—GP surgeries and their homes. Starting with paper prototypes, I observed Margaret and Robert attempting to book appointments, revealing immediately that our initial navigation was too complex. Mid-fidelity prototypes let us test language clarity—I worked with clinical advisors to translate medical terms into plain English whilst maintaining accuracy. Patients tested these prototypes in think-aloud sessions, revealing confusion points I would never have anticipated. High-fidelity prototypes incorporated HealthHub branding whilst adhering to WCAG AAA accessibility standards—large text, high contrast, clear focus indicators. I built a comprehensive design system spanning the complete patient journey from onboarding through prescription management, ensuring consistency across all 9 core screens.",
            activities: [
              "Paper prototyping",
              "In-context testing",
              "Plain language iteration",
              "High-fidelity design",
              "Accessibility implementation",
              "Design system creation",
            ],
            outcomes:
              "Developed complete design system with 9 key user flows and 70+ components, all tested with target users in real-world environments.",
          },
          {
            name: "Test & Refine",
            description:
              "I conducted 6 rounds of usability testing with 56 participants, recruiting heavily from the 65+ age group to match our target demographic. Early rounds revealed critical issues—users couldn't find the 'Book Appointment' button, so I made it the primary action on the dashboard. Medical terminology confused users, so I added plain language tooltips. Patients feared cancelling wrong appointments, so I implemented clear confirmation dialogs with undo options. I tested with various assistive technologies including screen readers, voice control, and high contrast modes, ensuring true accessibility. Each testing round informed specific iterations, and I measured improvements quantitatively—task completion times dropped from 5m 45s in round 1 to 3m 12s by round 6. Final validation testing achieved 94% task success rate among 65+ users, exceeding our 90% goal.",
            activities: [
              "Multi-round usability testing",
              "Accessibility validation",
              "Think-aloud protocols",
              "Iterative refinement",
              "Performance measurement",
              "Final validation",
            ],
            outcomes:
              "Achieved 94% task success rate with 65+ users, 95% satisfaction rating, and full WCAG AAA compliance, validating our co-design approach.",
          },
        ],
      },
    },
  },
  {
    id: "fitpro",
    slug: "fitpro",
    title: "FitPro - Fitness Coaching Platform",
    description:
      "Created a comprehensive fitness coaching platform connecting trainers with clients. Designed personalised workout plans, progress tracking, and video coaching features achieving 85% user retention.",
    image:
      "https://images.unsplash.com/photo-1748280621226-91f9530fc329?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwd29ya291dCUyMGFwcHxlbnwxfHx8fDE3NjE0NzIyNTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["Health & Fitness", "Mobile App", "Social Features"],
    outcome: "85% retention rate, 15,000+ active users",
    detail: {
      role: "Senior UX/UI Designer",
      duration: "9 months",
      team: "5 Designers, 8 Developers, 1 Fitness Consultant",
      overview: {
        role: "Senior UX/UI Designer",
        team: [
          "Fitness Consultant",
          "5 UX Designers",
          "8 Developers",
          "2 Product Managers",
        ],
        tools: ["Figma", "UserTesting", "Mixpanel", "Amplitude", "Miro"],
        timeline: "36 weeks (Aug 2023 - Apr 2024)",
        objective:
          "Design a dual-sided fitness coaching platform that connects certified trainers with clients through personalized workouts, progress tracking, and accountability features to achieve 70%+ 3-month retention in a market with 15% average retention.",
      },
      problemStatement: {
        challenge:
          "The fitness app market had 15% average 3-month retention. Users abandoned generic workout apps within 3 weeks due to lack of personalization and accountability. Trainers wanted to offer online coaching but existing platforms required manual workout creation for each client, making it unsustainable.",
        context:
          "Post-pandemic fitness shifted online, creating demand for virtual coaching. However, existing apps were either impersonal (like Nike Training Club) or required expensive one-on-one video sessions. The opportunity was to create scalable personalized coaching at accessible prices.",
        userNeeds: [
          "Clients: Personalized workout plans adapted to goals and fitness level",
          "Clients: Accountability and motivation from qualified trainers",
          "Clients: Simple, visual progress tracking without overwhelming metrics",
          "Trainers: Efficient tools to create and manage multiple client programs",
          "Trainers: Easy progress monitoring and check-in workflows",
          "Both: Seamless communication and feedback mechanism",
        ],
      },
      competitiveAnalysis: {
        title: "Fitness & Coaching Apps",
        competitors: [
          {
            name: "Nike Training Club",
            rating: "4.7",
            strengths: [
              "High-quality workouts",
              "Video demonstrations",
              "Free content",
            ],
            weaknesses: [
              "Generic programs",
              "No personalization",
              "No trainer oversight",
            ],
          },
          {
            name: "Future",
            rating: "4.8",
            strengths: [
              "Real trainer coaching",
              "Personalized plans",
              "Accountability",
            ],
            weaknesses: [
              "Expensive (£150/mo)",
              "US-only",
              "Limited trainer availability",
            ],
          },
          {
            name: "MyFitnessPal",
            rating: "4.6",
            strengths: [
              "Comprehensive tracking",
              "Large user base",
              "Nutrition focus",
            ],
            weaknesses: [
              "Workout features secondary",
              "No trainer connection",
              "Overwhelming metrics",
            ],
          },
        ],
        keyInsight:
          "A massive market gap existed between free generic apps (Nike Training Club) suffering 70%+ abandonment and expensive 1-on-1 coaching (Future at £150/mo). By offering affordable trainer-led coaching (£29/mo) with efficient template tools enabling scalable personalization, FitPro could capture the huge middle market seeking accountability without premium pricing while achieving industry-leading retention.",
      },
      challenge:
        "The fitness app market was saturated with generic workout apps that users abandoned after weeks. FitPro needed to create sustained engagement through personalisation and accountability. The challenge was designing for diverse fitness levels whilst keeping the platform simple enough for beginners.",
      solution:
        "I designed a dual-sided platform connecting certified trainers with clients through personalised workout plans, progress tracking, and virtual coaching. By gamifying achievements and building social accountability features, we created long-term user engagement.",
      solutionDetails: {
        description:
          "I designed a dual-sided platform where trainers use template-based tools to quickly create personalized programs, while clients receive tailored workouts with video guidance, progress tracking, and trainer check-ins. Gamification, achievements, and community features create sustained engagement beyond the workouts themselves.",
        keyFeatures: [
          {
            title: "Intelligent Program Builder (Trainers)",
            description:
              "Template-based system lets trainers create personalized 12-week programs in 20 minutes instead of 8 hours",
          },
          {
            title: "Adaptive Workout Flow (Clients)",
            description:
              "Workouts adapt based on performance, with clear video demos, rest timers, and real-time progress tracking",
          },
          {
            title: "Accountability System",
            description:
              "Weekly check-ins, trainer feedback, achievement badges, and social sharing keep users motivated",
          },
          {
            title: "Visual Progress Dashboard",
            description:
              "Simple, inspiring progress visualization showing workout completion, strength gains, and achievement milestones",
          },
        ],
        designDecisions: [
          "Created template-based program builder after observing trainers spent 8 hours per client",
          "Added weekly check-in notifications after research showed accountability was #1 retention driver",
          "Simplified metrics to 3 core KPIs after testing showed users abandoned complex tracking",
          "Implemented social sharing of achievements after community features showed 2.3x engagement boost",
        ],
      },
      impactMetrics: {
        metrics: [
          {
            value: "85%",
            label: "3-Month Retention",
            change: "vs 15% industry avg",
          },
          { value: "18K+", label: "Active Users", change: "Exceeded 10K goal" },
          {
            value: "650+",
            label: "Certified Trainers",
            change: "Exceeded 500 goal",
          },
        ],
        outcomes: [
          "Achieved 85% 3-month retention rate, 5.7x higher than industry average",
          "Grew to 18,000+ active users within 6 months, exceeding 10K goal by 80%",
          "Onboarded 650+ certified trainers, surpassing 500 target",
          "Average trainer manages 32 clients efficiently (vs 8-12 with manual programs)",
          "User satisfaction rating of 4.7/5 with 89% saying they'd recommend FitPro",
          "Trainers report 85% time savings in program creation",
          "Featured in Men's Health and Women's Health as 'Best Value Personal Training'",
          "Monthly recurring revenue of £520K within first year",
        ],
        testimonial: {
          quote:
            "FitPro transformed my online coaching business. I went from managing 8 clients manually to 35 clients efficiently. The template system saves me hours while still letting me personalize every program. My clients are more engaged than ever, and they actually stick with it.",
          author: "Tom Richardson",
          role: "Certified Personal Trainer, FitPro Coach",
        },
      },
      businessGoals: [
        "Achieve 70% user retention after 3 months",
        "Onboard 500+ certified trainers in first year",
        "Generate 10,000 active users within 6 months",
        "Maintain 4.6+ star rating across app stores",
      ],
      researchProcess:
        "I conducted ethnographic research at gyms, interviewed personal trainers about client relationships, ran surveys with fitness app users about abandonment reasons, and analysed competitor platforms. I also partnered with sports scientists to understand effective workout programming.",
      researchMethods: [
        { count: "44", label: "User Interviews" },
        { count: "28", label: "Trainer Interviews" },
        { count: "15", label: "Gym Observations" },
      ],
      insights: [
        "73% of users abandon fitness apps within 3 weeks due to lack of personalisation",
        "Users needed accountability - 89% said they'd work harder with trainer oversight",
        "Progress tracking was motivating but most apps made it too complex",
        "Trainers wanted efficient tools to manage multiple clients without admin burden",
      ],
      painPoints: [
        "Generic workout plans that don't account for individual goals or limitations",
        "No accountability or feedback from qualified professionals",
        "Confusing progress tracking with too many metrics",
        "Trainers spending hours creating individual workout plans manually",
        "Lack of community and social motivation",
      ],
      personas: [
        {
          name: "Lauren Davies",
          age: "26",
          occupation: "Accountant",
          bio: "Wants to get fit but has tried and abandoned 4 fitness apps. Needs accountability and expert guidance to stay motivated. Works unpredictable hours.",
          goals: [
            "Follow expert-designed workout plan",
            "Get feedback and motivation from qualified trainer",
            "Track progress in simple, visual way",
          ],
          frustrations: [
            "Generic workout plans too easy or too hard",
            "No one to keep her accountable",
            "Progress tracking apps too complicated",
          ],
        },
        {
          name: "Tom Richardson",
          age: "34",
          occupation: "Personal Trainer",
          bio: "Manages 25 in-person clients and wants to offer online coaching. Needs efficient tools to create and manage personalised plans at scale.",
          goals: [
            "Manage multiple clients efficiently",
            "Create customised workout plans quickly",
            "Monitor client progress remotely",
          ],
          frustrations: [
            "Creating individual plans takes hours",
            "Can't easily track multiple clients' progress",
            "Limited ways to provide feedback remotely",
          ],
        },
      ],
      journeyDescription:
        "I mapped the complete user journey from onboarding through sustained engagement, identifying key moments to build motivation and prevent abandonment.",
      journeyStages: [
        {
          name: "Onboard",
          action: "Completes fitness assessment and goals",
          emotion: "😊 Motivated",
        },
        {
          name: "Match",
          action: "Gets matched with certified trainer",
          emotion: "😊 Excited",
        },
        {
          name: "Plan",
          action: "Receives personalised workout programme",
          emotion: "😌 Confident",
        },
        {
          name: "Execute",
          action: "Completes workouts with video guidance",
          emotion: "💪 Determined",
        },
        {
          name: "Progress",
          action: "Sees progress and gets trainer feedback",
          emotion: "😃 Proud",
        },
      ],
      designApproach:
        "I used jobs-to-be-done framework to understand what users 'hire' fitness apps to do. Low-fidelity prototypes explored different onboarding flows and workout interfaces. Mid-fidelity designs tested the trainer-client communication model. High-fidelity prototypes included motion design for workout demonstrations and celebration animations for achievements.",
      testingApproach:
        "I conducted longitudinal testing over 6 weeks with participants using functional prototypes for real workouts. This allowed me to identify abandonment triggers and engagement drivers. I tested with both clients and trainers, observing how the platform supported their relationship. A/B testing optimised key features like progress visualisation and notification timing.",
      testingMetrics: [
        { value: "72", label: "Participants (Clients)" },
        { value: "16", label: "Trainers Involved" },
        { value: "89%", label: "6-Week Retention (Testing)" },
      ],
      taskSuccessRate: "89%",
      testingFindings: [
        "Users with trainer check-ins had 3.4x higher retention than those without",
        "Visual progress charts (vs numbers) increased engagement by 56%",
        "Video demonstrations with trainers outperformed generic stock footage by 71% in completion rates",
        "Weekly goal-setting nudges increased workout frequency from 2.1 to 3.8 times per week",
        "Social features (sharing achievements) increased 4-week retention by 28%",
      ],
      finalSolution:
        "FitPro creates meaningful connections between trainers and clients through personalised programming, progress tracking, and asynchronous communication. The platform empowers trainers to scale their business whilst giving clients the accountability and expertise they need to succeed.",
      keyFeatures: [
        {
          title: "Smart Workout Builder",
          description:
            "Trainers create customised plans using exercise library with automatic progression",
        },
        {
          title: "Video Form Checks",
          description:
            "Clients record exercises; trainers provide feedback on form and technique",
        },
        {
          title: "Visual Progress Tracking",
          description:
            "Beautiful charts showing strength gains, consistency, and achievement milestones",
        },
        {
          title: "Accountability Check-ins",
          description:
            "Regular trainer messages and community challenges maintain motivation",
        },
      ],
      metrics: [
        { value: "85%", label: "3-Month Retention Rate" },
        { value: "4.7/5", label: "App Store Rating" },
        { value: "15,000+", label: "Active Users" },
        { value: "620+", label: "Certified Trainers" },
      ],
      researchImpact:
        "Our 6-week longitudinal study revealed that the relationship between trainer and client was the critical factor in sustained engagement. This insight led us to prioritise features enabling meaningful connection - video form checks, personalised feedback, and weekly goal-setting. Lauren's feedback about previous apps being 'too complicated' informed our decision to simplify progress tracking to just 3 key metrics, making success visible and achievable. Tom's struggle creating individual plans led to our Smart Workout Builder, which reduced plan creation time from 2 hours to 15 minutes whilst maintaining personalisation.",
      learnings: [
        "Human connection drives digital engagement - the trainer-client relationship was more important than any feature",
        "Simplicity beats comprehensiveness - showing fewer metrics with better visualisation increased engagement more than tracking everything",
        "Longitudinal testing is essential for retention-focused products - issues that cause abandonment only appear after weeks of use",
      ],
      methodology: {
        approach: "Design Thinking for Engagement & Retention",
        description:
          "I employed Design Thinking methodology specifically adapted for designing retention-focused products. Building a fitness platform that users would still use 3 months later required understanding not just initial delight but sustained motivation. As this was a greenfield project in a saturated market with notoriously poor retention, I began with extensive market research to understand why users abandon fitness apps.",
        phases: [
          {
            name: "Empathise & Understand",
            description:
              "I started this project by understanding the fitness app graveyard—the 73% of users who abandon apps within 3 weeks. I surveyed 400 UK fitness app users (including abandoners) asking why they quit. The answers were revealing: generic workouts, no accountability, and overwhelming complexity. My competitor analysis examined 8 fitness platforms from generic (Nike Training Club, Freeletics) to coaching-focused (Trainerize, Future). I conducted ethnographic research in 15 gyms, observing trainer-client interactions to understand what makes the relationship work. I interviewed 44 clients (including Lauren, who'd tried 4 different apps) and 28 trainers (including Tom, struggling to scale beyond in-person clients). The empathy phase included a 6-week longitudinal study where I shadowed 12 users through their entire fitness journey from enthusiastic start to either success or abandonment, identifying the exact moments where motivation failed.",
            activities: [
              "User abandonment surveys (400 participants)",
              "Competitor analysis (8 platforms)",
              "Gym ethnography (15 locations)",
              "User interviews (44)",
              "Trainer interviews (28)",
              "6-week longitudinal study (12 participants)",
            ],
            outcomes:
              "Discovered that 73% abandon due to lack of accountability and personalisation, not lack of content. Identified that human trainer connection was the missing ingredient in all generic fitness apps and our key differentiator.",
          },
          {
            name: "Define & Frame",
            description:
              "I synthesised research into a clear problem statement: fitness apps fail because they treat motivation as infinite when it's actually fragile and context-dependent. I created dual personas—Lauren (client needing accountability) and Tom (trainer needing scale)—representing both sides of our marketplace. I mapped the complete 12-week user journey, identifying high-risk abandonment moments: week 1 (overwhelm), week 3 (plateau), week 6 (boredom). For each moment, I defined interventions to maintain motivation. Working with a fitness consultant, I established what 'good' personalisation looked like—not just difficulty level but exercise preferences, available equipment, schedule constraints. I defined success criteria around retention (70% at 3 months) rather than just downloads. This reframing—optimising for sustained use rather than acquisition—guided every design decision.",
            activities: [
              "Problem reframing",
              "Dual-persona development",
              "12-week journey mapping",
              "Abandonment moment identification",
              "Personalisation framework definition",
              "Retention-focused success criteria",
            ],
            outcomes:
              "Defined 2 primary personas with mapped 12-week journeys identifying 6 critical abandonment moments requiring intervention. Established retention-first success metrics challenging typical app growth focus.",
          },
          {
            name: "Ideate & Innovate",
            description:
              "I facilitated innovation workshops focused on creating sustained engagement. Rather than brainstorming features, I asked 'what would make someone still be using this in 3 months?' The shift in framing was powerful. I explored gamification carefully—research showed badges could motivate initially but felt hollow without human validation. I ideated around the trainer-client relationship, exploring video form checks, personalised encouragement, and goal-setting conversations. For trainers, I explored tools that enabled personalisation at scale—template libraries, smart workout builders, client progress dashboards. I worked with sports scientists to design progress tracking that would feel rewarding without being overwhelming. The concept of showing just 3 key metrics (consistency, strength progression, achievements) emerged from testing multiple approaches. Social features were carefully considered—I designed opt-in community challenges avoiding the comparison anxiety that demotivates many users.",
            activities: [
              "Retention-focused ideation",
              "Gamification exploration",
              "Trainer tool design",
              "Progress tracking simplification",
              "Social feature design",
              "Sports science consultation",
            ],
            outcomes:
              "Generated 70+ retention-focused features, prioritised human connection (trainer feedback, video checks) over automated gamification. Validated simplified 3-metric tracking approach through user testing.",
          },
          {
            name: "Prototype & Test",
            description:
              "I created prototypes for both client and trainer experiences, but critically, I designed for their interconnection—client success depended on trainer efficiency. Client app prototypes focused on clarity and motivation—I tested multiple approaches to workout presentation, settling on video demonstrations with coach voiceovers for personal feel. The Smart Workout Builder for trainers went through 11 iterations—Tom tested each version whilst creating plans for real clients. His feedback ('I need to save exercise combinations I use often') led to the template library feature. I built working prototypes that simulated the full trainer-client interaction flow, testing them in real gym environments with actual trainer-client pairs. High-fidelity designs incorporated motivational psychology—celebration animations for completed workouts, encouraging messages from trainers, visual progress that highlighted wins. The design system emphasised energy and achievement whilst avoiding fitness industry clichés of impossible bodies.",
            activities: [
              "Dual-sided prototyping",
              "Workout presentation testing",
              "Smart builder iteration (11 versions)",
              "Real trainer-client testing",
              "Motivational psychology application",
              "Design system creation",
            ],
            outcomes:
              "Developed comprehensive design system with 90+ components optimised for motivation and retention. Smart Workout Builder reduced plan creation from 2h to 15min through 11 iterative refinements.",
          },
          {
            name: "Test & Validate",
            description:
              "For a retention-focused product, testing needed to happen over time, not just in labs. I conducted initial usability testing to ensure core flows worked, then launched a 12-week beta with 200 users and 25 trainers. This longitudinal approach was crucial—I identified issues that only appeared after weeks of use. Week 3 showed first drop-off as users hit plateaus; I worked with trainers to implement encouraging check-ins. Week 6 revealed boredom; I added workout variation prompts for trainers. I measured not just task completion but emotional response—did users feel motivated after interactions? Did trainers feel efficient or burdened? I conducted weekly surveys with beta participants tracking motivation, confidence, and satisfaction. The video form check feature showed strongest correlation with retention—users who submitted videos had 94% retention vs 61% who didn't. This insight led us to actively encourage video submissions through trainer prompts. Final metrics validated our approach: 85% 3-month retention far exceeding our 70% goal.",
            activities: [
              "12-week beta program",
              "Longitudinal testing (200 users)",
              "Weekly motivation tracking",
              "Feature correlation analysis",
              "Emotional response measurement",
              "Iterative refinement",
            ],
            outcomes:
              "Achieved 85% 3-month retention (vs 70% goal) through 12-week beta revealing video form checks as highest-impact retention feature. Identified and addressed week 3 and week 6 abandonment moments.",
          },
        ],
      },
    },
  },
  {
    id: "travelease",
    slug: "travelease",
    title: "TravelEase - Trip Planning Platform",
    description:
      "Built an end-to-end trip planning platform with collaborative itineraries, budget tracking, and personalized recommendations.",
    image:
      "https://images.unsplash.com/photo-1488646953014-85cb44e25828?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmF2ZWwlMjBhcHB8ZW58MHx8fHwxNzM3Mzg3MDE2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["Web App", "Travel", "Collaboration"],
    outcome: "45% more trip completions, 89% user satisfaction",
    comingSoon: true,
    detail: {
      role: "Lead UX Designer",
      duration: "6 months",
      team: "2 Designers, 6 Developers, 1 PM",
      overview: {
        role: "Lead UX Designer",
        team: ["Product Manager", "2 UX Designers", "6 Engineers"],
        tools: ["Figma", "Notion", "Hotjar", "Amplitude"],
        timeline: "24 weeks (Coming Soon)",
        objective:
          "Create collaborative travel planning platform with smart recommendations.",
      },
      problemStatement: {
        challenge:
          "Trip planning was fragmented across multiple tools and platforms.",
        context:
          "Travelers needed unified platform for planning and collaboration.",
        userNeeds: [
          "Collaborative itinerary planning",
          "Budget tracking and splitting",
          "Personalized recommendations",
        ],
      },
      competitiveAnalysis: {
        title: "Travel Planning Platforms",
        competitors: [],
        keyInsight:
          "Opportunity to unify planning, collaboration, and recommendations.",
      },
      challenge: "Fragmented trip planning across multiple disconnected tools.",
      solution: "Unified collaborative platform with smart recommendations.",
      solutionDetails: {
        description: "Coming soon - full case study in development.",
        keyFeatures: [],
        designDecisions: [],
      },
      impactMetrics: {
        metrics: [
          { value: "45%", label: "More Trip Completions" },
          { value: "89%", label: "User Satisfaction" },
        ],
        outcomes: ["Coming soon"],
        testimonial: {
          quote: "Case study in development",
          author: "Coming Soon",
          role: "TravelEase",
        },
      },
      businessGoals: [
        "Increase trip completion rates",
        "Improve user engagement",
      ],
      researchProcess: "Travel behavior research in progress.",
      researchMethods: [],
      insights: [],
      painPoints: [],
      personas: [],
      journeyDescription: "Travel planning journey mapping in progress.",
      journeyStages: [],
      designApproach: "Collaborative design with focus on group planning.",
      testingApproach: "Multi-user testing with travel groups.",
      testingMetrics: [],
      taskSuccessRate: "TBD",
      testingFindings: [],
      finalSolution: "Coming soon",
      keyFeatures: [],
      metrics: [],
      researchImpact: "Coming soon",
      learnings: [],
      methodology: {
        approach: "Collaborative UX Design",
        description: "Coming soon",
        phases: [],
      },
    },
  },
  {
    id: "foodhub",
    slug: "foodhub",
    title: "FoodHub - Recipe Discovery App",
    description:
      "Designed a recipe discovery and meal planning app with smart grocery lists, dietary preferences, and cooking mode features.",
    image:
      "https://images.unsplash.com/photo-1466637574441-749b8f19452f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb29kJTIwYXBwfGVufDB8fHx8MTczNzM4NzAzM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["Mobile App", "Food", "AI"],
    outcome: "3x recipe engagement, 92% positive reviews",
    comingSoon: true,
    detail: {
      role: "Senior UX Designer",
      duration: "4 months",
      team: "2 Designers, 5 Developers",
      overview: {
        role: "Senior UX Designer",
        team: ["2 UX/UI Designers", "5 Engineers", "Culinary Advisor"],
        tools: ["Figma", "Maze", "Firebase", "Mixpanel"],
        timeline: "16 weeks (Coming Soon)",
        objective:
          "Create intelligent recipe discovery with meal planning features.",
      },
      problemStatement: {
        challenge:
          "Users struggled to find recipes matching their preferences and pantry.",
        context: "Recipe apps needed better personalization and meal planning.",
        userNeeds: [
          "Smart recipe recommendations",
          "Easy meal planning",
          "Automatic grocery lists",
        ],
      },
      competitiveAnalysis: {
        title: "Recipe Apps",
        competitors: [],
        keyInsight:
          "Opportunity to combine AI recommendations with practical meal planning.",
      },
      challenge: "Generic recipe recommendations without personalization.",
      solution: "AI-powered recipe discovery with smart meal planning.",
      solutionDetails: {
        description: "Coming soon - comprehensive case study in development.",
        keyFeatures: [],
        designDecisions: [],
      },
      impactMetrics: {
        metrics: [
          { value: "3x", label: "Recipe Engagement" },
          { value: "92%", label: "Positive Reviews" },
        ],
        outcomes: ["Coming soon"],
        testimonial: {
          quote: "Case study in development",
          author: "Coming Soon",
          role: "FoodHub",
        },
      },
      businessGoals: ["Increase recipe engagement", "Improve user retention"],
      researchProcess: "Food and cooking behavior research in progress.",
      researchMethods: [],
      insights: [],
      painPoints: [],
      personas: [],
      journeyDescription: "Cooking journey mapping in progress.",
      journeyStages: [],
      designApproach: "AI-powered personalization design.",
      testingApproach: "User testing with home cooks.",
      testingMetrics: [],
      taskSuccessRate: "TBD",
      testingFindings: [],
      finalSolution: "Coming soon",
      keyFeatures: [],
      metrics: [],
      researchImpact: "Coming soon",
      learnings: [],
      methodology: {
        approach: "AI-Driven UX Design",
        description: "Coming soon",
        phases: [],
      },
    },
  },
];

// ============================================================================
// Helper Functions
// ============================================================================

/**
 * Get a case study by its slug
 * @param slug - The URL slug of the case study
 * @returns The case study or undefined if not found
 */
export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((study) => study.slug === slug);
}

/**
 * Get all case study slugs for static path generation
 * @returns Array of slug strings
 */
export function getAllCaseStudySlugs(): string[] {
  return caseStudies.map((study) => study.slug);
}

/**
 * Get all case studies
 * @returns Array of all case studies
 */
export function getAllCaseStudies(): CaseStudy[] {
  return caseStudies;
}

/**
 * Get published case studies (not marked as coming soon)
 * @returns Array of published case studies
 */
export function getPublishedCaseStudies(): CaseStudy[] {
  return caseStudies.filter((study) => !study.comingSoon);
}

/**
 * Get case studies by tag
 * @param tag - The tag to filter by
 * @returns Array of case studies with the specified tag
 */
export function getCaseStudiesByTag(tag: string): CaseStudy[] {
  return caseStudies.filter((study) =>
    study.tags.some((t) => t.toLowerCase() === tag.toLowerCase()),
  );
}
