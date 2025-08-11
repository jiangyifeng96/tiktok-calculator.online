'use client';

import { siteConfig } from '@/config/site';
import { useTranslations } from 'next-intl';

export function StructuredData() {
  const t = useTranslations('Home');
  
  const websiteStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": siteConfig.name,
    "alternateName": [
      "TikTok Money Calculator",
      "TikTok Earning Calculator", 
      "TikTok Revenue Calculator"
    ],
    "url": siteConfig.url,
    "description": t('description'),
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `${siteConfig.url}/?username={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    },
    "sameAs": [
      siteConfig.socialLinks.github,
      siteConfig.socialLinks.bluesky
    ]
  };

  const organizationStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": siteConfig.name,
    "url": siteConfig.url,
    "logo": `${siteConfig.url}/logo.png`,
    "description": t('description'),
    "founder": {
      "@type": "Person",
      "name": "jiangyifeng96"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "email": siteConfig.socialLinks.email?.replace('mailto:', ''),
      "contactType": "customer service"
    }
  };

  const softwareApplicationStructuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "TikTok Money Calculator",
    "alternateName": [
      "TikTok Calculator",
      "TikTok Earning Calculator",
      "TikTok Revenue Calculator"
    ],
    "applicationCategory": "FinanceApplication",
    "operatingSystem": "Web Browser",
    "url": siteConfig.url,
    "description": t('description'),
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock"
    },
    "featureList": [
      "Calculate TikTok earnings potential",
      "Analyze TikTok engagement rates",
      "Estimate TikTok revenue per video",
      "Free TikTok analytics tool",
      "Instant TikTok income calculator"
    ],
    "keywords": [
      "tiktok",
      "tiktok calculator", 
      "tiktok money calculator",
      "tiktok earning calculator",
      "tiktok revenue calculator"
    ]
  };

  const howToStructuredData = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Calculate TikTok Earnings",
    "description": "Learn how to use TikTok Calculator to estimate TikTok earnings and revenue",
    "image": `${siteConfig.url}/logo.png`,
    "totalTime": "PT2M",
    "estimatedCost": {
      "@type": "MonetaryAmount",
      "currency": "USD",
      "value": "0"
    },
    "step": [
      {
        "@type": "HowToStep",
        "name": "Enter TikTok Username",
        "text": "Open TikTok Calculator and enter any TikTok username",
        "image": `${siteConfig.url}/logo.png`
      },
      {
        "@type": "HowToStep", 
        "name": "Calculate Earnings",
        "text": "Click the Calculate TikTok Earnings button to start analysis",
        "image": `${siteConfig.url}/logo.png`
      },
      {
        "@type": "HowToStep",
        "name": "View Results",
        "text": "View detailed TikTok earnings, revenue estimates, and engagement metrics",
        "image": `${siteConfig.url}/logo.png`
      }
    ]
  };

  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How to estimate TikTok income with TikTok Calculator?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Enter a TikTok username in our TikTok Money Calculator and the TikTok earning calculator system automatically calculates TikTok earnings and revenue based on followers, engagement rate, and other factors."
        }
      },
      {
        "@type": "Question",
        "name": "Is TikTok Calculator free to use?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, our TikTok Money Calculator is completely free with unlimited usage. Calculate TikTok earnings for any account without any cost."
        }
      },
      {
        "@type": "Question",
        "name": "How accurate is the TikTok earning calculator?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our TikTok Calculator provides estimates based on industry standards and real-time data. TikTok earnings may vary depending on various factors including engagement rate, monetization strategies, and brand partnerships."
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteStructuredData),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationStructuredData),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(softwareApplicationStructuredData),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(howToStructuredData),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqStructuredData),
        }}
      />
    </>
  );
}
