# Next.js 15 多语言项目

基于 Next.js 15 构建的现代化多语言网站，支持中文、英文、日语。

## ✨ 特性

- 🌐 内置多语言支持 (中文、英文、日语)
- 🎨 基于 Tailwind CSS 的现代 UI 设计
- 🌙 深色/浅色主题切换
- 📱 响应式布局
- 📝 MDX 博客系统
- 🔍 SEO 优化
- 📊 集成多个统计分析工具
  - Google Analytics
  - Baidu Analytics
  - Google Adsense
  - Vercel Analytics

## 🚀 开发环境

### 环境要求

- Node.js 18.17 或更高版本
- pnpm 9.0 或更高版本（推荐）

### 安装和运行

1. 安装依赖:
```bash
pnpm install
```

2. 启动开发服务器:
```bash
pnpm dev
```

访问 http://localhost:3000 查看应用。

## 📁 项目结构

```
├── app/                      # 应用路由目录
│   ├── [locale]/            # 多语言路由
│   │   ├── about/           # 关于页面
│   │   ├── blogs/           # 博客页面
│   │   └── ...              # 其他页面
│   ├── api/                 # API 路由
│   └── globals/             # 全局组件
├── blogs/                   # 博客内容 (MDX)
│   ├── en/                  # 英文博客
│   ├── ja/                  # 日文博客
│   └── zh/                  # 中文博客
├── components/              # 可复用组件
│   ├── ui/                  # 基础 UI 组件
│   ├── header/              # 头部组件
│   ├── footer/              # 底部组件
│   └── ...                  # 其他组件
├── config/                  # 配置文件
├── content/                 # 静态内容 (MDX)
├── i18n/                    # 国际化配置
│   ├── messages/            # 翻译文件
│   ├── routing.ts           # 路由配置
│   └── request.ts           # 请求配置
├── lib/                     # 工具函数
├── public/                  # 静态资源
└── types/                   # 类型定义
```

## 🛠️ 技术栈

- **框架**: Next.js 15 (App Router)
- **语言**: TypeScript
- **样式**: Tailwind CSS + Shadcn/ui
- **国际化**: next-intl
- **内容**: MDX
- **状态管理**: Zustand
- **部署**: Vercel
- **包管理器**: pnpm

## 📝 内容管理

### 博客文章

在 `blogs/[locale]` 目录下创建 MDX 文件，支持以下格式:

```markdown
---
title: 文章标题
description: 文章描述
date: 2025-02-20
---

文章内容...
```

### 静态页面

在 `content/[page]/[locale].mdx` 下管理静态页面内容。

## 🔍 SEO 优化

项目内置了完整的 SEO 优化方案:
- 服务端渲染和静态生成
- 自动生成 sitemap.xml
- 配置 robots.txt
- 优化的 metadata
- 支持 Open Graph
- 多语言 SEO 支持

## 📊 统计分析

在 `.env` 文件中配置相应的 ID 即可启用:

```bash
NEXT_PUBLIC_GOOGLE_ANALYTICS=
NEXT_PUBLIC_BAIDU_TONGJI=
NEXT_PUBLIC_GOOGLE_ADSENSE=
NEXT_PUBLIC_PLAUSIBLE_DOMAIN=
NEXT_PUBLIC_PLAUSIBLE_SRC=
```

## 🚀 部署

### 构建生产版本

```bash
pnpm build
```

### 启动生产服务器

```bash
pnpm start
```

## 💡 开发指南

### 多语言开发

1. 新增语言支持：
   - 在 `i18n/messages/` 添加新的语言文件
   - 更新 `i18n/routing.ts` 配置
   - 在 `blogs/` 和 `content/` 下创建对应语言目录

2. 使用翻译：
```tsx
import { useTranslations } from 'next-intl';

export default function MyComponent() {
  const t = useTranslations('namespace');
  return <h1>{t('title')}</h1>;
}
```

### 代码规范

```bash
# 代码检查
pnpm lint

# 类型检查
pnpm type-check
```

## 🔧 故障排除

### 常见问题

**1. 包管理器版本不一致**
```bash
# 删除 node_modules 和 lockfile
rm -rf node_modules pnpm-lock.yaml
# 重新安装
pnpm install
```

**2. MDX 文件不显示**
- 检查文件路径是否正确
- 确认 frontmatter 格式正确

**3. 多语言路由问题**
- 确保使用 `i18n/routing.ts` 中的 `Link` 组件
- 检查 `middleware.ts` 配置

**4. 样式不生效**
- 确认 Tailwind CSS 类名拼写正确
- 检查是否需要重启开发服务器

## 📄 许可证

MIT


