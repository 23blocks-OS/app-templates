'use client';

import { Blocks23Provider } from '@23blocks/react';
import { blocksConfig } from '@/lib/blocks-config';

interface ProvidersProps {
  children: React.ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  return (
    <Blocks23Provider config={blocksConfig}>
      {children}
    </Blocks23Provider>
  );
}
