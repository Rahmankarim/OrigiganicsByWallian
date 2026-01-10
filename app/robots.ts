export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/admin/',
          '/api/admin/',
          '/profile/',
          '/orders/',
          '/cart/',
          '/checkout/',
          '/settings/',
          '/api/auth/',
        ],
      },
    ],
    sitemap: 'https://origiganicsbywallian.com/sitemap.xml',
  }
}
