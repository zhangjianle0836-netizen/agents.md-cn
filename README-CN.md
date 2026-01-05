# AGENTS.md

![AGENTS.md logo](./public/og.png)

> **📢 说明 / Notice**  
> 
> 🇨🇳 **本项目是 [AGENTS.md](https://github.com/agentsmd/agents.md) 的中文汉化版本**  
> 我们对原项目进行了完整的中文本地化，包括网站界面、文档和示例内容。  
> 
> 🇺🇸 **This is a Chinese localization of [AGENTS.md](https://github.com/agentsmd/agents.md)**  
> We have fully localized the original project into Chinese, including the website interface, documentation, and example content.  
> 
> ⚖️ 原项目采用 MIT License，版权归 © 2025 OpenAI 所有。  
> Original project is licensed under MIT License, © 2025 OpenAI.  
> 
> 📖 [查看中文版 README](./README-CN.md) | [View English README](./README.md)

[AGENTS.md](https://agents.md) 是一个简单、开放的格式，用于指导编码代理。

将 AGENTS.md 视为代理的 README：一个专用的、可预测的地方，用于提供上下文和说明，帮助 AI 编码代理处理您的项目。

以下是 AGENTS.md 文件的最小示例：

```markdown
# 示例 AGENTS.md 文件

## 开发环境提示
- 使用 `pnpm dlx turbo run where <project_name>` 跳转到包，而不是用 `ls` 扫描。
- 运行 `pnpm install --filter <project_name>` 将包添加到您的工作空间，以便 Vite、ESLint 和 TypeScript 可以识别它。
- 使用 `pnpm create vite@latest <project_name> -- --template react-ts` 创建一个带有 TypeScript 检查的新 React + Vite 包。
- 检查每个包的 package.json 中的 name 字段以确认正确的名称——跳过顶层的。

## 测试说明
- 在 .github/workflows 文件夹中查找 CI 计划。
- 运行 `pnpm turbo run test --filter <project_name>` 来运行为该包定义的每个检查。
- 从包根目录，您只需调用 `pnpm test`。提交前应通过所有测试。
- 要专注于一个步骤，添加 Vitest 模式：`pnpm vitest run -t "<test name>"`。
- 修复任何测试或类型错误，直到整个套件通过。
- 移动文件或更改导入后，运行 `pnpm lint --filter <project_name>` 以确保 ESLint 和 TypeScript 规则仍然通过。
- 为您更改的代码添加或更新测试，即使没有人要求。

## PR 说明
- 标题格式：[<project_name>] <Title>
- 提交前始终运行 `pnpm lint` 和 `pnpm test`。
```

## 网站

此仓库还包括一个托管在 https://agents.md/ 的基本 Next.js 网站，该网站以简单的方式解释了项目的目标，并展示了一些示例。

### 本地运行应用
1. 安装依赖：
   ```bash
   pnpm install
   ```
2. 启动开发服务器：
   ```bash
   pnpm run dev
   ```
3. 打开浏览器并访问 http://localhost:3000
