import type { ProviderConfig } from '@23blocks/react';

export const blocksConfig: ProviderConfig = {
  appId: process.env.NEXT_PUBLIC_23BLOCKS_APP_ID || '',

  // Configure only the services you need
  urls: {
    // Authentication service
    ...(process.env.NEXT_PUBLIC_23BLOCKS_AUTH_URL && {
      authentication: process.env.NEXT_PUBLIC_23BLOCKS_AUTH_URL,
    }),

    // Products service
    ...(process.env.NEXT_PUBLIC_23BLOCKS_PRODUCTS_URL && {
      products: process.env.NEXT_PUBLIC_23BLOCKS_PRODUCTS_URL,
    }),

    // CRM service
    ...(process.env.NEXT_PUBLIC_23BLOCKS_CRM_URL && {
      crm: process.env.NEXT_PUBLIC_23BLOCKS_CRM_URL,
    }),

    // Content service
    ...(process.env.NEXT_PUBLIC_23BLOCKS_CONTENT_URL && {
      content: process.env.NEXT_PUBLIC_23BLOCKS_CONTENT_URL,
    }),

    // Search service
    ...(process.env.NEXT_PUBLIC_23BLOCKS_SEARCH_URL && {
      search: process.env.NEXT_PUBLIC_23BLOCKS_SEARCH_URL,
    }),
  },

  // Auth configuration
  authMode: 'token', // or 'cookie' for httpOnly cookie auth
  storage: 'localStorage', // or 'sessionStorage' | 'memory'
};
