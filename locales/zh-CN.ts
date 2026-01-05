export const zhCN = {
  // Code Examples
  codeExamples: {
    // Hero 首页代码示例
    heroTitle: "AGENTS.md",
    heroSetupCommands: "设置命令",
    heroSetupList: [
      "安装依赖：`pnpm install`",
      "启动开发服务器：`pnpm dev`",
      "运行测试：`pnpm test`",
    ],
    heroCodeStyle: "代码风格",
    heroCodeStyleList: [
      "TypeScript 严格模式",
      "单引号，无分号",
      "尽可能使用函数式模式",
    ],
    
    // 其他示例
    sampleTitle: "AGENTS.md 示例文件",
    devTips: "开发环境提示",
    devTipsList: [
      "使用 `pnpm dlx turbo run where <project_name>` 跳转到包，而不是用 `ls` 扫描。",
      "运行 `pnpm install --filter <project_name>` 将包添加到您的工作区，以便 Vite、ESLint 和 TypeScript 可以识别它。",
      "使用 `pnpm create vite@latest <project_name> -- --template react-ts` 快速创建一个带有 TypeScript 检查的新 React + Vite 包。",
      "检查每个包的 package.json 中的 name 字段以确认正确的名称——跳过顶级的那个。",
    ],
    testingInstructions: "测试说明",
    testingList: [
      "在 .github/workflows 文件夹中查找 CI 计划。",
      "运行 `pnpm turbo run test --filter <project_name>` 以运行为该包定义的每个检查。",
      "从包根目录，您可以直接调用 `pnpm test`。提交前应通过所有测试。",
      "要专注于一个步骤，添加 Vitest 模式：`pnpm vitest run -t \"<test name>\"`。",
      "修复任何测试或类型错误，直到整个测试套件通过。",
      "移动文件或更改导入后，运行 `pnpm lint --filter <project_name>` 以确保 ESLint 和 TypeScript 规则仍然通过。",
      "为您更改的代码添加或更新测试，即使没有人要求。",
    ],
    prInstructions: "PR 说明",
    prList: [
      "标题格式：[<project_name>] <Title>",
      "提交前始终运行 `pnpm lint` 和 `pnpm test`。",
    ],
    inAction: "AGENTS.md 实战",
  },

  // Hero Section
  hero: {
    title: "AGENTS.md",
    subtitle: "一个简单、开放的编码代理指导格式，",
    projectCount: "被超过 60,000 个开源项目使用",
    description: "将 AGENTS.md 视为 AI 代理的 README：一个专门的、可预测的地方，用于提供上下文和指令，帮助 AI 编码代理处理您的项目。",
    exploreExamples: "浏览示例",
    viewOnGitHub: "在 GitHub 上查看",
  },

  // Why Section
  why: {
    title: "为什么需要 AGENTS.md？",
    readmeForHumans: "README.md 是给人类看的：包含快速入门、项目描述和贡献指南。",
    agentsComplement: "AGENTS.md 作为补充，包含编码代理需要的额外、有时详细的上下文：构建步骤、测试和可能会让 README 显得杂乱或与人类贡献者无关的约定。",
    intentionalSeparation: "我们有意将其分开，以便：",
    clearPlace: "为代理提供清晰、可预测的指令位置。",
    keepReadmeConcise: "保持 README 简洁，专注于人类贡献者。",
    preciseGuidance: "提供精确的、面向代理的指导，补充现有的 README 和文档。",
    openFormat: "我们选择了一个可以适用于所有人的名称和格式，而不是引入另一个专有文件。如果您正在构建或使用编码代理并发现这很有帮助，请随时采用它。",
  },

  // Compatibility Section
  compatibility: {
    title: "一个 AGENTS.md 适用于多个代理",
    description: "您的代理定义与不断增长的 AI 编码代理和工具生态系统兼容：",
    viewAll: "查看所有支持的代理",
    collapse: "收起支持的代理",
  },

  // Examples Section
  examples: {
    title: "示例",
  },

  // How to Use Section
  howToUse: {
    title: "如何使用 AGENTS.md？",
    steps: [
      {
        title: "添加 AGENTS.md",
        body: "在仓库根目录创建一个 AGENTS.md 文件。大多数编码代理甚至可以在您礼貌地询问时为您生成一个。",
        list: undefined,
      },
      {
        title: "涵盖重要内容",
        body: "添加帮助代理有效处理您项目的部分。常见选择：",
        list: [
          "项目概述",
          "构建和测试命令",
          "代码风格指南",
          "测试说明",
          "安全注意事项",
        ],
      },
      {
        title: "添加额外说明",
        body: "提交信息或拉取请求指南、安全陷阱、大型数据集、部署步骤：任何您会告诉新团队成员的内容也属于这里。",
        list: undefined,
      },
      {
        title: "大型单体仓库？为子项目使用嵌套的 AGENTS.md 文件",
        body: "在每个包内放置另一个 AGENTS.md。代理会自动读取目录树中最近的文件，因此最接近的文件优先，每个子项目都可以提供定制的说明。例如，在撰写本文时，OpenAI 主仓库有 88 个 AGENTS.md 文件。",
        list: undefined,
      },
    ],
  },

  // About Section
  about: {
    title: "关于",
    emergence: "AGENTS.md 源于 AI 软件开发生态系统的协作努力，包括 OpenAI Codex、Amp、Google 的 Jules、Cursor 和 Factory。",
    commitment: "我们致力于帮助维护和发展这一开放格式，使整个开发者社区受益，无论您使用哪个编码代理。",
    stewardship: "AGENTS.md 现在由 Linux 基金会下的 Agentic AI Foundation 管理。",
    learnMore: "了解更多 →",
  },

  // FAQ Section
  faq: {
    title: "常见问题",
    items: [
      {
        question: "是否有必填字段？",
        answer: "没有。AGENTS.md 只是标准的 Markdown。使用您喜欢的任何标题；代理只是解析您提供的文本。",
        code: undefined,
      },
      {
        question: "如果指令冲突怎么办？",
        answer: "最接近被编辑文件的 AGENTS.md 优先；明确的用户聊天提示会覆盖一切。",
        code: undefined,
      },
      {
        question: "代理会自动运行 AGENTS.md 中的测试命令吗？",
        answer: "是的——如果您列出了它们。代理将尝试执行相关的编程检查，并在完成任务前修复失败。",
        code: undefined,
      },
      {
        question: "我可以稍后更新它吗？",
        answer: "当然可以。将 AGENTS.md 视为活文档。",
        code: undefined,
      },
      {
        question: "如何将现有文档迁移到 AGENTS.md？",
        answer: "将现有文件重命名为 AGENTS.md，并创建符号链接以实现向后兼容：",
        code: "mv AGENT.md AGENTS.md && ln -s AGENTS.md AGENT.md",
      },
      {
        question: "如何配置 Aider？",
        answer: "在 .aider.conf.yml 中配置 Aider 使用 AGENTS.md：",
        code: "read: AGENTS.md",
      },
      {
        question: "如何配置 Gemini CLI？",
        answer: "在 .gemini/settings.json 中配置 Gemini CLI 使用 AGENTS.md：",
        code: '{\n  "contextFileName": "AGENTS.md"\n}',
      },
    ],
  },
};

export type Translation = typeof zhCN;
