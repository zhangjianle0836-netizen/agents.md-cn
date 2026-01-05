#!/bin/bash

# 获取脚本所在目录（支持拖入终端启动）
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

# 进入项目目录
cd "$SCRIPT_DIR" || exit 1

echo "=========================================="
echo "🚀 正在启动 AGENTS.md 开发服务器..."
echo "📁 项目目录: $SCRIPT_DIR"
echo "🌐 端口: 5558"
echo "=========================================="
echo ""

# 检查 pnpm 是否安装
if ! command -v pnpm &> /dev/null; then
    echo "❌ 错误: pnpm 未安装"
    echo "请运行: npm install -g pnpm"
    exit 1
fi

# 检查依赖是否安装
if [ ! -d "node_modules" ]; then
    echo "📦 首次启动，正在安装依赖..."
    pnpm install
    echo ""
fi

# 启动开发服务器
echo "✅ 启动开发服务器..."
echo "🔗 访问地址: http://localhost:5558"
echo "🌏 语言设置: 中文 (zh-CN)"
echo ""
echo "按 Ctrl+C 停止服务器"
echo ""

# 注入中文环境变量
export NEXT_PUBLIC_LOCALE=zh-CN

pnpm dev --port 5558
