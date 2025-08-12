import { SiteConfig } from "@/types/siteConfig";

export const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://tiktok-calculator.online";

export const SOURCE_CODE_URL = "https://github.com/jiangyifeng96/tiktok-calculator";
export const PRO_VERSION = "https://tiktok-calculator.online";

const BSKY_URL = 'https://bsky.app/profile/jiangyifeng96.bsky.social'
const EMAIL_URL = 'mailto:jiangyifeng96@gmail.com'
const GITHUB_URL = 'https://github.com/jiangyifeng96'

export const siteConfig: SiteConfig = {
  name: "TikTok Calculator",
  tagLine: 'TikTok Analytics & Performance Estimation Tool',
  description:
    "Free TikTok Analytics Calculator - Estimate potential TikTok engagement metrics and social media performance. Our TikTok analytics tool provides statistical estimates for engagement rates, follower growth patterns, and content performance metrics for educational and research purposes only.",
  url: BASE_URL,
  authors: [
    {
      name: "jiangyifeng96",
      url: "https://tiktok-calculator.online",
    }
  ],
  creator: '@jiangyifeng96',
  socialLinks: {
    bluesky: BSKY_URL,
    email: EMAIL_URL,
    github: GITHUB_URL,
  },
  themeColors: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
  defaultNextTheme: 'system', // next-theme option: system | dark | light
  icons: {
    icon: "/favicon.ico",
    shortcut: "/logo.png",
    apple: "/logo.png", // apple-touch-icon.png
  },
}
