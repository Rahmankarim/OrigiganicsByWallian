/**
 * SEO Metadata Configuration for Homepage
 * 
 * This file exports metadata specifically for the homepage.
 * Next.js 14 App Router uses this for SEO optimization.
 */

import { Metadata } from "next"

export const homeMetadata: Metadata = {
  title: "Origiganics by Wallian - Premium Organic Products Pakistan | Natural Chemical-Free Organic Food & Oils",
  description: "Shop 100% organic products Pakistan at Origiganics by Wallian. Premium organic food, natural products, chemical-free organic oils, home made products & dry fruits. Free delivery across Pakistan. ✓ Certified Organic ✓ Chemical-Free ✓ Natural",
  keywords: [
    "organic products Pakistan",
    "natural products Pakistan",
    "chemical-free organic products",
    "home made products",
    "organic food",
    "organic oils",
    "organic dry fruits Pakistan",
    "natural food Pakistan",
    "chemical free products",
    "organic products online Pakistan",
    "buy organic products Pakistan",
    "organic almonds Pakistan",
    "organic walnuts Pakistan",
    "cold pressed oils Pakistan",
    "natural skincare Pakistan",
    "organic honey Pakistan"
  ],
  openGraph: {
    title: "Origiganics by Wallian - Premium Organic Products Pakistan",
    description: "100% organic products Pakistan - organic food, natural products, chemical-free organic oils & home made products. Free delivery across Pakistan.",
    url: "https://origiganicsbywallian.com",
    siteName: "Origiganics by Wallian",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://origiganicsbywallian.com/logo.jpeg",
        width: 1200,
        height: 630,
        alt: "Origiganics by Wallian - Organic Products Pakistan - Natural Chemical-Free Organic Food",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Origiganics by Wallian - Premium Organic Products Pakistan",
    description: "Shop 100% organic products Pakistan - organic food, natural products, chemical-free organic oils. Free delivery.",
    images: ["https://origiganicsbywallian.com/logo.jpeg"],
  },
  alternates: {
    canonical: "https://origiganicsbywallian.com",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}
