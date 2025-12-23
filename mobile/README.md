# 23blocks React Native Template

A React Native (Expo) template application demonstrating how to integrate the `@23blocks/react` SDK with mobile apps.

## Features

- **Secure Token Storage**: Uses `expo-secure-store` for encrypted token storage on the device
- **File-Based Routing**: Built with `expo-router` for intuitive navigation
- **Authentication Flow**: Complete login/register screens with automatic token management
- **TypeScript**: Full TypeScript support
- **Best Practices**: Demonstrates recommended patterns for using the SDK

## Prerequisites

- Node.js >= 18
- npm or yarn
- Expo CLI (`npm install -g expo-cli`)
- iOS Simulator (Mac) or Android Emulator, or Expo Go app on your device

## Getting Started

### 1. Clone and Install

```bash
# Copy this template to your project
cp -r 23blocks-mobile-template my-app
cd my-app

# Install dependencies
npm install
```

### 2. Configure Environment

Create a `.env` file in the root of your project:

```env
EXPO_PUBLIC_BLOCKS_API_KEY=your-api-key
EXPO_PUBLIC_BLOCKS_TENANT_ID=your-tenant-id
EXPO_PUBLIC_BLOCKS_AUTH_URL=https://gateway.23blocks.com
```

You can also configure additional service URLs if needed:

```env
EXPO_PUBLIC_BLOCKS_SEARCH_URL=https://search.23blocks.com
EXPO_PUBLIC_BLOCKS_CRM_URL=https://crm.23blocks.com
```

### 3. Run the App

```bash
# Start the development server
npm start

# Or run directly on a platform
npm run ios
npm run android
```

## Project Structure

```
├── app/
│   ├── _layout.tsx          # Root layout with Providers
│   ├── index.tsx            # Entry point (redirects based on auth state)
│   ├── (auth)/
│   │   ├── _layout.tsx      # Auth stack layout
│   │   ├── login.tsx        # Login screen
│   │   └── register.tsx     # Register screen
│   └── (app)/
│       ├── _layout.tsx      # Tab navigation layout
│       ├── index.tsx        # Home screen
│       ├── profile.tsx      # Profile screen
│       └── settings.tsx     # Settings screen
├── components/
│   └── Providers.tsx        # App providers wrapper
├── lib/
│   ├── blocks-config.ts     # SDK configuration
│   └── secure-storage.ts    # SecureStore adapter
└── .env                     # Environment variables (create this)
```

## SDK Integration

### Provider Setup

The SDK is configured in `components/Providers.tsx`:

```tsx
import { Provider } from '@23blocks/react';
import { blocksConfig } from '@/lib/blocks-config';
import { secureStorage } from '@/lib/secure-storage';

export function Providers({ children }) {
  return (
    <Provider
      apiKey={blocksConfig.apiKey}
      tenantId={blocksConfig.tenantId}
      urls={blocksConfig.urls}
      customStorage={secureStorage}  // Use SecureStore for React Native
    >
      {children}
    </Provider>
  );
}
```

### Secure Storage Adapter

The `customStorage` prop accepts an adapter that implements async storage:

```tsx
// lib/secure-storage.ts
import * as SecureStore from 'expo-secure-store';
import type { AsyncStorageInterface } from '@23blocks/react';

export const secureStorage: AsyncStorageInterface = {
  getItem: SecureStore.getItemAsync,
  setItem: SecureStore.setItemAsync,
  removeItem: SecureStore.deleteItemAsync,
};
```

### Using Authentication Hooks

```tsx
import { useAuth, useUser } from '@23blocks/react';

function MyComponent() {
  const { signIn, signOut, isReady, isAuthenticated } = useAuth();
  const { user, loading } = useUser();

  // Wait for tokens to load from secure storage
  if (!isReady) {
    return <ActivityIndicator />;
  }

  // Check authentication state
  if (isAuthenticated()) {
    return <Text>Welcome, {user?.email}</Text>;
  }

  // Sign in
  const handleLogin = async () => {
    await signIn({ email, password });
    // Tokens are automatically stored in SecureStore
  };

  // Sign out
  const handleLogout = async () => {
    await signOut();
    // Tokens are automatically cleared from SecureStore
  };
}
```

### The `isReady` State

When using `customStorage` with async storage (like SecureStore), the SDK needs to load existing tokens before it can determine authentication state. Use `isReady` to handle this:

```tsx
function RootIndex() {
  const { isReady, isAuthenticated } = useAuth();

  // Show loading while tokens are being loaded
  if (!isReady) {
    return <SplashScreen />;
  }

  // Now we know the actual auth state
  if (isAuthenticated()) {
    return <Redirect href="/(app)" />;
  }

  return <Redirect href="/(auth)/login" />;
}
```

## Available Hooks

| Hook | Description |
|------|-------------|
| `useAuth()` | Authentication operations (signIn, signOut, signUp) |
| `useUser()` | Current user profile and management |
| `useSearch()` | Search functionality |
| `useProducts()` | Product catalog access |
| `useCrm()` | CRM features |
| `useContent()` | Content management |

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `EXPO_PUBLIC_BLOCKS_API_KEY` | Your 23blocks API Key | Yes |
| `EXPO_PUBLIC_BLOCKS_TENANT_ID` | Your tenant ID (if multi-tenant) | No |
| `EXPO_PUBLIC_BLOCKS_AUTH_URL` | Authentication service URL | Yes |
| `EXPO_PUBLIC_BLOCKS_SEARCH_URL` | Search service URL | No |
| `EXPO_PUBLIC_BLOCKS_CRM_URL` | CRM service URL | No |

## Building for Production

### iOS

```bash
# Build for iOS
npx expo build:ios

# Or use EAS Build
npx eas build --platform ios
```

### Android

```bash
# Build for Android
npx expo build:android

# Or use EAS Build
npx eas build --platform android
```

## Troubleshooting

### Tokens not persisting between app restarts

Make sure you're passing `customStorage` to the Provider and that `expo-secure-store` is properly installed:

```bash
npx expo install expo-secure-store
```

### `isReady` stays false

Check that your storage adapter methods are working correctly:

```typescript
// Test your storage adapter
const testStorage = async () => {
  await secureStorage.setItem('test', 'value');
  const result = await secureStorage.getItem('test');
  console.log(result); // Should print 'value'
  await secureStorage.removeItem('test');
};
```

### Authentication state not updating

The SDK automatically manages authentication state. If you're seeing issues:

1. Make sure you're using the hooks within the `Provider` context
2. Check that `signIn`/`signOut` calls are awaited
3. Verify your API credentials are correct

## License

MIT
