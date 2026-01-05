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

Choose your framework and click **"Use this template"** to create your own repository:

| Template | Framework | Description | |
|----------|-----------|-------------|---|
| [**Next.js**](https://github.com/23blocks-OS/nextjs-template) | Next.js 15 + React 19 | App Router, Server Components, Tailwind CSS | [![Use Template](https://img.shields.io/badge/Use_Template-green?style=for-the-badge)](https://github.com/23blocks-OS/nextjs-template/generate) |
| [**Angular**](https://github.com/23blocks-OS/angular-template) | Angular 19 | Standalone components, RxJS, reactive forms | [![Use Template](https://img.shields.io/badge/Use_Template-green?style=for-the-badge)](https://github.com/23blocks-OS/angular-template/generate) |
| [**Mobile**](https://github.com/23blocks-OS/mobile-template) | React Native (Expo 52) | Expo Router, secure token storage | [![Use Template](https://img.shields.io/badge/Use_Template-green?style=for-the-badge)](https://github.com/23blocks-OS/mobile-template/generate) |

## Quick Start

### Option 1: Use GitHub Template (Recommended)

1. Click one of the **"Use Template"** buttons above
2. Name your repository and click **"Create repository"**
3. Clone your new repo and install dependencies:

```bash
git clone https://github.com/YOUR_USERNAME/YOUR_REPO.git
cd YOUR_REPO && npm install
```

### Option 2: Use degit

Alternatively, use [degit](https://github.com/Rich-Harris/degit) to clone without git history:

```bash
# Next.js
npx degit 23blocks-OS/nextjs-template my-app

# Angular
npx degit 23blocks-OS/angular-template my-app

# Mobile
npx degit 23blocks-OS/mobile-template my-app
```

### Configure and Run

After cloning, configure your environment and start developing:

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

[23blocks](https://23blocks.com/blocks) provides 15+ production-ready API blocks that save 1000+ development hours:

| Block | Description |
|-------|-------------|
| **Authentication** | Login, registration, identity verification |
| **User Management** | User accounts, profiles, permissions |
| **OAuth & SSO** | Google, GitHub, social login, enterprise SSO |
| **JWT Authentication** | Secure token-based auth |
| **Magic Link Auth** | Passwordless email authentication |
| **Multi-factor Auth** | SMS, TOTP, additional security layers |
| **Session Management** | User sessions, token refresh |
| **API Key Management** | Developer API credentials |
| **Onboarding Flow** | Guided user setup experiences |
| **Multi-tenant** | Single app serving multiple organizations |
| **CRM** | Contacts, leads, customer data |
| **File Storage** | Cloud storage for uploads |

These templates give you a head start with pre-built integrations for all 23blocks services.

## Requirements

- Node.js 18+
- npm or yarn
- A [23blocks](https://23blocks.com) account and API key

## Documentation

- [23blocks SDK Documentation](https://github.com/23blocks-OS/frontend-sdk)
- [Next.js Template](https://github.com/23blocks-OS/nextjs-template)
- [Angular Template](https://github.com/23blocks-OS/angular-template)
- [Mobile Template](https://github.com/23blocks-OS/mobile-template)

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
