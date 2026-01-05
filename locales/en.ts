import { Translation } from "./zh-CN";

export const en: Translation = {
  // Code Examples
  codeExamples: {
    // Hero 首页代码示例
    heroTitle: "AGENTS.md",
    heroSetupCommands: "Setup commands",
    heroSetupList: [
      "Install deps: `pnpm install`",
      "Start dev server: `pnpm dev`",
      "Run tests: `pnpm test`",
    ],
    heroCodeStyle: "Code style",
    heroCodeStyleList: [
      "TypeScript strict mode",
      "Single quotes, no semicolons",
      "Use functional patterns where possible",
    ],
    
    // 其他示例
    sampleTitle: "Sample AGENTS.md file",
    devTips: "Dev environment tips",
    devTipsList: [
      "Use `pnpm dlx turbo run where <project_name>` to jump to a package instead of scanning with `ls`.",
      "Run `pnpm install --filter <project_name>` to add the package to your workspace so Vite, ESLint, and TypeScript can see it.",
      "Use `pnpm create vite@latest <project_name> -- --template react-ts` to spin up a new React + Vite package with TypeScript checks ready.",
      "Check the name field inside each package's package.json to confirm the right name—skip the top-level one.",
    ],
    testingInstructions: "Testing instructions",
    testingList: [
      "Find the CI plan in the .github/workflows folder.",
      "Run `pnpm turbo run test --filter <project_name>` to run every check defined for that package.",
      "From the package root you can just call `pnpm test`. The commit should pass all tests before you merge.",
      "To focus on one step, add the Vitest pattern: `pnpm vitest run -t \"<test name>\"`.",
      "Fix any test or type errors until the whole suite is green.",
      "After moving files or changing imports, run `pnpm lint --filter <project_name>` to be sure ESLint and TypeScript rules still pass.",
      "Add or update tests for the code you change, even if nobody asked.",
    ],
    prInstructions: "PR instructions",
    prList: [
      "Title format: [<project_name>] <Title>",
      "Always run `pnpm lint` and `pnpm test` before committing.",
    ],
    inAction: "AGENTS.md in action",
  },

  // Hero Section
  hero: {
    title: "AGENTS.md",
    subtitle: "A simple, open format for guiding coding agents,",
    projectCount: "60k open-source projects",
    description: "Think of AGENTS.md as a README for agents: a dedicated, predictable place to provide the context and instructions to help AI coding agents work on your project.",
    exploreExamples: "Explore Examples",
    viewOnGitHub: "View on GitHub",
  },

  // Why Section
  why: {
    title: "Why AGENTS.md?",
    readmeForHumans: "README.md files are for humans: quick starts, project descriptions, and contribution guidelines.",
    agentsComplement: "AGENTS.md complements this by containing the extra, sometimes detailed context coding agents need: build steps, tests, and conventions that might clutter a README or aren't relevant to human contributors.",
    intentionalSeparation: "We intentionally kept it separate to:",
    clearPlace: "Give agents a clear, predictable place for instructions.",
    keepReadmeConcise: "Keep READMEs concise and focused on human contributors.",
    preciseGuidance: "Provide precise, agent-focused guidance that complements existing README and docs.",
    openFormat: "Rather than introducing another proprietary file, we chose a name and format that could work for anyone. If you're building or using coding agents and find this helpful, feel free to adopt it.",
  },

  // Compatibility Section
  compatibility: {
    title: "One AGENTS.md works across many agents",
    description: "Your agent definitions are compatible with a growing ecosystem of AI coding agents and tools:",
    viewAll: "View all supported agents",
    collapse: "Collapse supported agents",
  },

  // Examples Section
  examples: {
    title: "Examples",
  },

  // How to Use Section
  howToUse: {
    title: "How to use AGENTS.md?",
    steps: [
      {
        title: "Add AGENTS.md",
        body: "Create an AGENTS.md file at the root of the repository. Most coding agents can even scaffold one for you if you ask nicely.",
        list: undefined,
      },
      {
        title: "Cover what matters",
        body: "Add sections that help an agent work effectively with your project. Popular choices:",
        list: [
          "Project overview",
          "Build and test commands",
          "Code style guidelines",
          "Testing instructions",
          "Security considerations",
        ],
      },
      {
        title: "Add extra instructions",
        body: "Commit messages or pull request guidelines, security gotchas, large datasets, deployment steps: anything you'd tell a new teammate belongs here too.",
        list: undefined,
      },
      {
        title: "Large monorepo? Use nested AGENTS.md files for subprojects",
        body: "Place another AGENTS.md inside each package. Agents automatically read the nearest file in the directory tree, so the closest one takes precedence and every subproject can ship tailored instructions. For example, at time of writing the main OpenAI repo has 88 AGENTS.md files.",
        list: undefined,
      },
    ],
  },

  // About Section
  about: {
    title: "About",
    emergence: "AGENTS.md emerged from collaborative efforts across the AI software development ecosystem, including OpenAI Codex, Amp, Jules from Google, Cursor, and Factory.",
    commitment: "We're committed to helping maintain and evolve this as an open format that benefits the entire developer community, regardless of which coding agent you use.",
    stewardship: "AGENTS.md is now stewarded by the Agentic AI Foundation under the Linux Foundation.",
    learnMore: "Learn more →",
  },

  // FAQ Section
  faq: {
    title: "FAQ",
    items: [
      {
        question: "Are there required fields?",
        answer: "No. AGENTS.md is just standard Markdown. Use any headings you like; the agent simply parses the text you provide.",
        code: undefined,
      },
      {
        question: "What if instructions conflict?",
        answer: "The closest AGENTS.md to the edited file wins; explicit user chat prompts override everything.",
        code: undefined,
      },
      {
        question: "Will the agent run testing commands found in AGENTS.md automatically?",
        answer: "Yes—if you list them. The agent will attempt to execute relevant programmatic checks and fix failures before finishing the task.",
        code: undefined,
      },
      {
        question: "Can I update it later?",
        answer: "Absolutely. Treat AGENTS.md as living documentation.",
        code: undefined,
      },
      {
        question: "How do I migrate existing docs to AGENTS.md?",
        answer: "Rename existing files to AGENTS.md and create symbolic links for backward compatibility:",
        code: "mv AGENT.md AGENTS.md && ln -s AGENTS.md AGENT.md",
      },
      {
        question: "How do I configure Aider?",
        answer: "Configure Aider to use AGENTS.md in .aider.conf.yml:",
        code: "read: AGENTS.md",
      },
      {
        question: "How do I configure Gemini CLI?",
        answer: "Configure Gemini CLI to use AGENTS.md in .gemini/settings.json:",
        code: '{\n  "contextFileName": "AGENTS.md"\n}',
      },
    ],
  },
};
