# 23blocks App Templates

[![CI](https://github.com/23blocks-OS/app-templates/actions/workflows/ci.yml/badge.svg)](https://github.com/23blocks-OS/app-templates/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Next.js](https://img.shields.io/badge/Next.js-15-black)](./nextjs)
[![Angular](https://img.shields.io/badge/Angular-19-red)](./angular)
[![React Native](https://img.shields.io/badge/React%20Native-Expo%2052-blue)](./mobile)

Production-ready starter templates for building web and mobile applications with the [23blocks SDK](https://github.com/23blocks-OS/frontend-sdk). Get authentication, user management, and backend integration working in minutes.

## Features

- **Pre-configured Authentication** - Sign in, sign up, password reset flows ready to use
- **Multiple Frameworks** - Next.js, Angular, and React Native (Expo) templates
- **TypeScript First** - Full type safety across all templates
- **Dark Mode Support** - Built-in dark mode with modern styling
- **Production Patterns** - Cookie auth, secure storage, and best practices included
- **Zero Config** - Just add your API key and start building

## Available Templates

| Template | Framework | Version | Description |
|----------|-----------|---------|-------------|
| [**nextjs**](./nextjs) | Next.js 15 + React 19 | [![npm](https://img.shields.io/npm/v/@23blocks/react)](https://www.npmjs.com/package/@23blocks/react) | App Router, Server Components, Tailwind CSS |
| [**angular**](./angular) | Angular 19 | [![npm](https://img.shields.io/npm/v/@23blocks/angular)](https://www.npmjs.com/package/@23blocks/angular) | Standalone components, RxJS, reactive forms |
| [**mobile**](./mobile) | React Native (Expo 52) | [![npm](https://img.shields.io/npm/v/@23blocks/react)](https://www.npmjs.com/package/@23blocks/react) | Expo Router, secure token storage |

## Quick Start

Use [degit](https://github.com/Rich-Harris/degit) to clone a template without git history:

```bash
# Next.js template
npx degit 23blocks-OS/app-templates/nextjs my-nextjs-app
cd my-nextjs-app && npm install

# Angular template
npx degit 23blocks-OS/app-templates/angular my-angular-app
cd my-angular-app && npm install

# React Native (Expo) template
npx degit 23blocks-OS/app-templates/mobile my-mobile-app
cd my-mobile-app && npm install
```

Then configure your environment and start developing:

```bash
# Next.js / Mobile
cp .env.example .env.local  # Edit with your API key
npm run dev

# Angular
cp src/environments/environment.example.ts src/environments/environment.ts
npm start
```

## Configuration

All templates use the same configuration pattern:

```typescript
{
  apiKey: 'your-api-key',
  urls: {
    authentication: 'https://auth.your-domain.com',
    products: 'https://products.your-domain.com',  // optional
    crm: 'https://crm.your-domain.com',            // optional
  },
  authMode: 'token',      // or 'cookie' for production
  storage: 'localStorage', // or 'sessionStorage' | 'memory'
}
```

> **Note:** Service URLs are optional. Only configure the services you need. Attempting to use an unconfigured service will throw a helpful error message.

## Auth Modes

| Mode | Best For | How It Works |
|------|----------|--------------|
| **Token** (default) | SPAs, mobile apps, development | SDK stores tokens in browser/device storage |
| **Cookie** | Production web apps, SSR | Backend sets httpOnly cookies (more secure) |

## Why 23blocks?

23blocks provides a complete backend-as-a-service for modern applications:

- **Authentication** - User management, OAuth, MFA, sessions
- **Products** - Catalog, inventory, pricing
- **CRM** - Contacts, leads, deals
- **Content** - CMS, media management
- **Search** - Full-text search, filters

These templates give you a head start with pre-built integrations for all 23blocks services.

## Requirements

- Node.js 18+
- npm or yarn
- A [23blocks](https://23blocks.com) account and API key

## Documentation

- [23blocks SDK Documentation](https://github.com/23blocks-OS/frontend-sdk)
- [Next.js Template README](./nextjs/README.md)
- [Angular Template README](./angular/README.md)
- [Mobile Template README](./mobile/README.md)

## Contributing

Contributions are welcome! Please read our [Contributing Guide](CONTRIBUTING.md) and [Code of Conduct](CODE_OF_CONDUCT.md).

## Community

- [GitHub Issues](https://github.com/23blocks-OS/app-templates/issues) - Bug reports and feature requests
- [GitHub Discussions](https://github.com/23blocks-OS/app-templates/discussions) - Questions and ideas
- [23blocks Website](https://23blocks.com) - Product information

## License

MIT License - see [LICENSE](LICENSE) for details.

---

<p align="center">
  <a href="https://23blocks.com">23blocks.com</a> ·
  <a href="https://23blocks.com/developers">Documentation</a> ·
  <a href="https://github.com/23blocks-OS/frontend-sdk">SDK</a>
</p>
