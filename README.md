# 23blocks App Templates

Starter templates for building applications with the [23blocks SDK](https://github.com/23blocks-OS/frontend-sdk).

## Available Templates

| Template | Description |
|----------|-------------|
| [nextjs](./nextjs) | Next.js 15 with App Router |
| [angular](./angular) | Angular 19 standalone components |
| [mobile](./mobile) | React Native (Expo) with secure storage |

## Quick Start

Use [degit](https://github.com/Rich-Harris/degit) to clone a specific template:

```bash
# Next.js template
npx degit 23blocks-OS/app-templates/nextjs my-nextjs-app

# Angular template
npx degit 23blocks-OS/app-templates/angular my-angular-app

# React Native (Expo) template
npx degit 23blocks-OS/app-templates/mobile my-mobile-app
```

Then follow the README in each template for configuration instructions.

## What's Included

Each template includes:

- Pre-configured 23blocks SDK integration
- Authentication flow with sign-in form
- Environment configuration examples
- TypeScript setup
- Basic styling with dark mode support

## Configuration

All templates use the same configuration pattern:

```typescript
{
  apiKey: 'your-api-key',
  urls: {
    authentication: 'https://auth.your-domain.com',
    products: 'https://products.your-domain.com',
    // ... other services
  },
  authMode: 'token', // or 'cookie'
  storage: 'localStorage', // or 'sessionStorage' | 'memory'
}
```

**Service URLs are optional** - only configure the services you need. Attempting to use an unconfigured service will throw a helpful error message.

## Auth Modes

### Token Mode (default)
- SDK stores tokens in browser storage
- Auto-attaches `Authorization: Bearer xxx` header
- Best for: SPAs, mobile apps

### Cookie Mode
- Backend sets httpOnly cookies
- More secure (tokens not accessible via JavaScript)
- Best for: Production web apps, SSR

## Requirements

- Node.js 18+
- A 23blocks-compatible backend API

## Learn More

- [23blocks SDK Documentation](https://github.com/23blocks-OS/frontend-sdk)
- [Next.js Documentation](https://nextjs.org/docs)
- [Angular Documentation](https://angular.dev)
