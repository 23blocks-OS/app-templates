// Copy this file to environment.ts and environment.prod.ts
// Fill in your 23blocks configuration

export const environment = {
  production: false,

  // Required: Your 23blocks API Key
  apiKey: 'your-api-key',

  // Service URLs (only configure the services you need)
  urls: {
    authentication: 'https://auth.your-domain.com',
    products: 'https://products.your-domain.com',
    crm: 'https://crm.your-domain.com',
    content: 'https://content.your-domain.com',
    search: 'https://search.your-domain.com',
  },

  // Auth configuration
  authMode: 'token' as const, // or 'cookie'
  storage: 'localStorage' as const, // or 'sessionStorage' | 'memory'
};
