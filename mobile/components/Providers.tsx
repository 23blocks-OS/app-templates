import React from 'react';
import { Provider } from '@23blocks/react';
import { blocksConfig } from '@/lib/blocks-config';
import { secureStorage } from '@/lib/secure-storage';

interface ProvidersProps {
  children: React.ReactNode;
}

/**
 * App Providers wrapper
 *
 * Wraps the app with all necessary providers including the 23blocks Provider.
 * Uses SecureStore for encrypted token storage on the device.
 */
export function Providers({ children }: ProvidersProps) {
  return (
    <Provider
      appId={blocksConfig.appId}
      tenantId={blocksConfig.tenantId}
      urls={blocksConfig.urls}
      customStorage={secureStorage}
    >
      {children}
    </Provider>
  );
}
