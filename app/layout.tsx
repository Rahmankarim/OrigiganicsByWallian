import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Inter } from "next/font/google"
import AuthProvider from "@/components/auth-provider"
import SessionManager from "@/components/session-manager"
import Analytics from "@/components/analytics"
import CookieConsent from "@/components/cookie-consent"
import { AuthInitializer } from "@/components/auth-initializer"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "sonner"
import "./globals.css"

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-playfair",
  display: "swap",
})

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Origiganics By Wallian - Premium Organic Dry Fruits & Natural Beauty Products",
  description:
    "Discover premium organic dry fruits and natural beauty products from Pakistan's finest orchards. 100% organic, ethically sourced, delivered fresh to your door.",
  keywords:
    "organic dry fruits, natural skincare, organic beauty, premium almonds, walnuts, dates, pistachios, organic products Pakistan, natural cosmetics, healthy snacks",
  authors: [{ name: "Origiganics By Wallian" }],
  creator: "Origiganics By Wallian",
  publisher: "Origiganics By Wallian",
  applicationName: "Origiganics By Wallian",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://origiganicsbywallian.com"),
  alternates: {
    canonical: "https://origiganicsbywallian.com/",
  },
  icons: {
    icon: [
      { url: "/logo.jpeg", sizes: "any", type: "image/jpeg" },
      { url: "/logo.jpeg", sizes: "16x16", type: "image/jpeg" },
      { url: "/logo.jpeg", sizes: "32x32", type: "image/jpeg" },
    ],
    apple: [
      { url: "/logo.jpeg", sizes: "180x180", type: "image/jpeg" },
    ],
  },
  openGraph: {
    title: "Origiganics By Wallian - Premium Organic Products",
    description: "Premium organic dry fruits and natural beauty products. Ethically sourced from Pakistan's finest orchards.",
    url: "https://origiganicsbywallian.com/",
    siteName: "Origiganics By Wallian",
    images: [
      {
        url: "https://origiganicsbywallian.com/logo.jpeg",
        width: 1200,
        height: 630,
        alt: "Origiganics By Wallian - Premium Organic Products",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "dng7zcSpKaPWp29xMc_m3jpNzergMq6XKN5QH9DovsM",
    yandex: ""
  },
  category: "Organic Products",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Enhanced Organization Schema for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Origiganics by Wallian",
    alternateName: "Origiganics Pakistan",
    url: "https://origiganicsbywallian.com/",
    logo: "https://origiganicsbywallian.com/logo.jpeg",
    description: "Leading provider of premium organic dry fruits, natural beauty products, organic oils, and chemical-free organic products sourced from Pakistan's finest orchards. Committed to quality, sustainability, and natural wellness.",
    slogan: "Nature's Richest, Delivered to Your Door",
    
    // Contact Information
    address: {
      "@type": "PostalAddress",
      addressCountry: "PK",
      addressRegion: "Pakistan",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Service",
      availableLanguage: ["English", "Urdu"],
    },
    
    // Social Media Profiles
    sameAs: [
      "https://facebook.com/origiganicsbywallian",
      "https://instagram.com/origiganicsbywallian",
    ],
    
    // Business Details
    founder: {
      "@type": "Person",
      name: "Rahman Karim",
    },
    
    // Products & Services
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Organic Products Pakistan",
      itemListElement: [
        {
          "@type": "OfferCatalog",
          name: "Organic Dry Fruits",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Product",
                name: "Premium Organic Almonds",
                description: "100% organic almonds from Kashmir"
              }
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Product",
                name: "Organic Walnuts",
                description: "Natural chemical-free walnuts"
              }
            }
          ]
        },
        {
          "@type": "OfferCatalog",
          name: "Organic Oils",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Product",
                name: "Cold-Pressed Olive Oil",
                description: "100% organic extra virgin olive oil"
              }
            }
          ]
        }
      ]
    },
    
    // Ratings & Reviews
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "127",
      bestRating: "5",
      worstRating: "1"
    },
    
    // Business Area Served
    areaServed: {
      "@type": "Country",
      name: "Pakistan"
    },
    
    // Keywords for search
    keywords: "organic products Pakistan, natural products Pakistan, chemical-free organic products, home made products, organic food, organic oils, organic dry fruits"
  }

  // WebSite Schema for Search Box & Site Navigation
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Origiganics by Wallian",
    alternateName: "Origiganics Pakistan",
    url: "https://origiganicsbywallian.com/",
    description: "Pakistan's premier online destination for 100% organic products, natural food, chemical-free organic oils, and home made products",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://origiganicsbywallian.com/products?search={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    },
    publisher: {
      "@type": "Organization",
      name: "Origiganics by Wallian",
      logo: {
        "@type": "ImageObject",
        url: "https://origiganicsbywallian.com/logo.jpeg"
      }
    }
  }

  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        {/* Character Encoding */}
        <meta charSet="UTF-8" />
        
        {/* Viewport for Mobile Responsiveness */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
        
        {/* Theme Color */}
        <meta name="theme-color" content="#355E3B" />
        <meta name="msapplication-TileColor" content="#355E3B" />
        
        {/* Favicons - Multiple Sizes */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/jpeg" sizes="16x16" href="/logo.jpeg" />
        <link rel="icon" type="image/jpeg" sizes="32x32" href="/logo.jpeg" />
        <link rel="icon" type="image/jpeg" sizes="192x192" href="/logo.jpeg" />
        <link rel="apple-touch-icon" sizes="180x180" href="/logo.jpeg" />
        
        {/* PWA Manifest */}
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* Apple Mobile Web App */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Origiganics By Wallian" />
        
        {/* Mobile Web App */}
        <meta name="mobile-web-app-capable" content="yes" />
        
        {/* Microsoft Tiles */}
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <meta name="msapplication-TileImage" content="/logo.jpeg" />
        
        {/* Sitemap */}
        <link rel="sitemap" type="application/xml" href="https://origiganicsbywallian.com/sitemap.xml" />
        
        {/* Robots Meta */}
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        
        {/* Language */}
        <meta httpEquiv="content-language" content="en" />
        
        {/* Security Headers */}
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta httpEquiv="X-Frame-Options" content="SAMEORIGIN" />
        <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
        
        {/* Preconnect for Performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* DNS Prefetch */}
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        
        {/* Structured Data - JSON-LD for Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        
        {/* Structured Data - JSON-LD for WebSite Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <AuthProvider>
            <SessionManager />
            <Analytics />
            {children}
            <CookieConsent />
            <Toaster />
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
