import type { ServiceUrls } from '@23blocks/react';

/**
 * 23blocks SDK Configuration
 *
 * Configure your service URLs here. Only include the services you need.
 * Get your App ID from the 23blocks dashboard.
 */
export const blocksConfig = {
  /**
   * Your 23blocks Application ID
   * Get this from your 23blocks dashboard
   */
  appId: process.env.EXPO_PUBLIC_BLOCKS_APP_ID || 'your-app-id',

  /**
   * Optional: Tenant ID for multi-tenant setups
   */
  tenantId: process.env.EXPO_PUBLIC_BLOCKS_TENANT_ID,

  /**
   * Service URLs - only configure the services you need
   */
  urls: {
    authentication: process.env.EXPO_PUBLIC_BLOCKS_AUTH_URL || 'https://gateway.23blocks.com',
    // Uncomment and configure the services you need:
    // search: process.env.EXPO_PUBLIC_BLOCKS_SEARCH_URL,
    // products: process.env.EXPO_PUBLIC_BLOCKS_PRODUCTS_URL,
    // crm: process.env.EXPO_PUBLIC_BLOCKS_CRM_URL,
    // content: process.env.EXPO_PUBLIC_BLOCKS_CONTENT_URL,
    // files: process.env.EXPO_PUBLIC_BLOCKS_FILES_URL,
  } as ServiceUrls,
};
