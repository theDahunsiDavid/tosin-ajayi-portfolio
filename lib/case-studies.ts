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
          "All competitors failed to optimize for elderly and disabled users—a significant market gap. By combining Starling's accessibility foundation with Monzo's user-friendly approach and adding biometric quick actions, FinPay could uniquely serve both tech-savvy users and underserved accessibility-focused segments.",
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
            "Priscilla transformed our app from frustrating to delightful. The redesign didn't just improve metrics—it fundamentally changed how our users feel about digital banking. The attention to accessibility and user confidence was exceptional.",
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
              "Identified that 68% of users struggled to locate transfer functions, and 85% wanted biometric authentication—critical insights that shaped the entire redesign.",
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
              "I conducted 6 rounds of usability testing with 56 participants, observing real users attempting core tasks. Each round revealed insights that refined the design—from adjusting button sizes after watching James struggle with tap targets, to repositioning the Quick Transfer feature after users consistently overlooked it. I used think-aloud protocols to understand mental models and measured task success rates to quantify improvements. This iterative testing approach prevented costly mistakes and ensured the final design truly met user needs.",
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
          "ShopSphere, a UK fashion retailer with 500K monthly visitors, suffered from a 73% checkout abandonment rate—significantly higher than the 69% industry average. Mobile users faced a broken experience with 45% form error rates, and the platform completely excluded users with disabilities due to accessibility failures.",
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
          "No competitor successfully combined mobile excellence with accessibility compliance. By merging ASOS's mobile-first checkout with Next's accessibility standards and implementing transparent pricing, ShopSphere could uniquely serve both mainstream mobile shoppers and the underserved accessible e-commerce market—reducing abandonment while expanding addressable audience.",
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
            "The redesign didn't just improve our metrics—it fundamentally transformed our business. We're now the go-to fashion retailer for accessible shopping, and our mobile revenue has doubled. Priscilla's commitment to inclusive design opened an entirely new market for us.",
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
          description:
            "Quick checkout option without forced account creation",
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
              "I conducted extensive testing across devices and user types. Four rounds of moderated testing with 32 participants included mobile shoppers testing on their own devices, screen reader users navigating with assistive technology, and elderly users evaluating clarity and usability. Each round revealed critical insights that refined the design—from sticky cost summaries on mobile to improved form error announcements for screen readers.",
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
    title: "HealthHub - Telemedicine Platform",
    description:
      "Created an intuitive telemedicine platform connecting patients with healthcare providers, improving appointment booking efficiency by 58%.",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwYXBwfGVufDB8fHx8MTczNzM4Njk4M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["Telemedicine", "Healthcare", "Mobile App"],
    outcome: "58% faster booking, 4.8★ patient satisfaction",
    comingSoon: true,
    detail: {
      role: "Lead Product Designer",
      duration: "5 months",
      team: "2 Designers, 5 Developers, 1 PM",
      overview: {
        role: "Lead Product Designer",
        team: ["Product Manager", "2 UX Designers", "5 Engineers", "Medical Advisor"],
        tools: ["Figma", "Miro", "UserTesting", "Mixpanel"],
        timeline: "20 weeks (Coming Soon)",
        objective: "Design an intuitive telemedicine platform that simplifies healthcare access.",
      },
      problemStatement: {
        challenge: "Patients struggled with complex booking systems and poor communication.",
        context: "Healthcare access needed modernization for digital-first patients.",
        userNeeds: [
          "Simple appointment booking",
          "Clear communication with providers",
          "Secure health records access",
        ],
      },
      competitiveAnalysis: {
        title: "Telemedicine Platforms",
        competitors: [],
        keyInsight: "Opportunity to combine simplicity with comprehensive healthcare features.",
      },
      challenge: "Complex booking and poor patient-provider communication.",
      solution: "Streamlined telemedicine platform with intuitive booking flow.",
      solutionDetails: {
        description: "Coming soon - comprehensive case study in development.",
        keyFeatures: [],
        designDecisions: [],
      },
      impactMetrics: {
        metrics: [
          { value: "58%", label: "Faster Booking" },
          { value: "4.8★", label: "Patient Satisfaction" },
        ],
        outcomes: ["Coming soon"],
        testimonial: {
          quote: "Case study in development",
          author: "Coming Soon",
          role: "HealthHub",
        },
      },
      businessGoals: ["Improve booking efficiency", "Increase patient satisfaction"],
      researchProcess: "Comprehensive healthcare UX research in progress.",
      researchMethods: [],
      insights: [],
      painPoints: [],
      personas: [],
      journeyDescription: "Patient journey mapping in progress.",
      journeyStages: [],
      designApproach: "User-centered healthcare design methodology.",
      testingApproach: "Multi-phase usability testing with patients and providers.",
      testingMetrics: [],
      taskSuccessRate: "TBD",
      testingFindings: [],
      finalSolution: "Coming soon",
      keyFeatures: [],
      metrics: [],
      researchImpact: "Coming soon",
      learnings: [],
      methodology: {
        approach: "Healthcare-Focused UX",
        description: "Coming soon",
        phases: [],
      },
    },
  },
  {
    id: "fitpro",
    slug: "fitpro",
    title: "FitPro - Fitness Tracking App",
    description:
      "Designed a comprehensive fitness tracking app with personalized workout plans, nutrition tracking, and social features to motivate users.",
    image:
      "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxmaXRuZXNzJTIwYXBwfGVufDB8fHx8MTczNzM4NzAwMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["Mobile App", "Fitness", "Social"],
    outcome: "2x increase in daily active users, 4.7★ rating",
    comingSoon: true,
    detail: {
      role: "Senior Product Designer",
      duration: "4 months",
      team: "3 Designers, 4 Developers",
      overview: {
        role: "Senior Product Designer",
        team: ["3 UX/UI Designers", "4 Engineers", "Fitness Advisor"],
        tools: ["Figma", "Principle", "Firebase Analytics"],
        timeline: "16 weeks (Coming Soon)",
        objective: "Create engaging fitness app with social motivation features.",
      },
      problemStatement: {
        challenge: "Users lacked motivation and struggled with tracking consistency.",
        context: "Fitness apps needed better engagement and social features.",
        userNeeds: [
          "Personalized workout plans",
          "Easy progress tracking",
          "Social motivation features",
        ],
      },
      competitiveAnalysis: {
        title: "Fitness Apps",
        competitors: [],
        keyInsight: "Opportunity to combine personalization with social motivation.",
      },
      challenge: "Low user engagement and retention in fitness tracking.",
      solution: "Social fitness platform with personalized plans and gamification.",
      solutionDetails: {
        description: "Coming soon - detailed case study in development.",
        keyFeatures: [],
        designDecisions: [],
      },
      impactMetrics: {
        metrics: [
          { value: "2x", label: "Daily Active Users" },
          { value: "4.7★", label: "App Rating" },
        ],
        outcomes: ["Coming soon"],
        testimonial: {
          quote: "Case study in development",
          author: "Coming Soon",
          role: "FitPro",
        },
      },
      businessGoals: ["Increase user engagement", "Improve retention rates"],
      researchProcess: "Fitness user behavior research in progress.",
      researchMethods: [],
      insights: [],
      painPoints: [],
      personas: [],
      journeyDescription: "User fitness journey mapping in progress.",
      journeyStages: [],
      designApproach: "Gamification and social motivation design.",
      testingApproach: "Iterative testing with fitness enthusiasts.",
      testingMetrics: [],
      taskSuccessRate: "TBD",
      testingFindings: [],
      finalSolution: "Coming soon",
      keyFeatures: [],
      metrics: [],
      researchImpact: "Coming soon",
      learnings: [],
      methodology: {
        approach: "Behavioral Design",
        description: "Coming soon",
        phases: [],
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
        objective: "Create collaborative travel planning platform with smart recommendations.",
      },
      problemStatement: {
        challenge: "Trip planning was fragmented across multiple tools and platforms.",
        context: "Travelers needed unified platform for planning and collaboration.",
        userNeeds: [
          "Collaborative itinerary planning",
          "Budget tracking and splitting",
          "Personalized recommendations",
        ],
      },
      competitiveAnalysis: {
        title: "Travel Planning Platforms",
        competitors: [],
        keyInsight: "Opportunity to unify planning, collaboration, and recommendations.",
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
      businessGoals: ["Increase trip completion rates", "Improve user engagement"],
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
        objective: "Create intelligent recipe discovery with meal planning features.",
      },
      problemStatement: {
        challenge: "Users struggled to find recipes matching their preferences and pantry.",
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
        keyInsight: "Opportunity to combine AI recommendations with practical meal planning.",
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
    study.tags.some((t) => t.toLowerCase() === tag.toLowerCase())
  );
}
