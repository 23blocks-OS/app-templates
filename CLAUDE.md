# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Overview

This repository contains starter templates for building applications with the 23blocks SDK. Each template demonstrates how to integrate the SDK with different frameworks.

## Templates

| Template | Framework | SDK Package |
|----------|-----------|-------------|
| `nextjs/` | Next.js 15 + React 19 | `@23blocks/react` |
| `angular/` | Angular 19 | `@23blocks/angular` |
| `mobile/` | React Native (Expo 52) | `@23blocks/react` |

## Development Commands

### Next.js Template
```bash
cd nextjs
npm install
npm run dev     # Start dev server
npm run build   # Production build
npm run lint    # Run ESLint
```

### Angular Template
```bash
cd angular
npm install
npm start       # Start dev server (ng serve)
npm run build   # Production build
npm test        # Run Karma tests
```

### Mobile Template (Expo)
```bash
cd mobile
npm install
npm start       # Start Expo dev server
npm run ios     # Run on iOS simulator
npm run android # Run on Android emulator
npm run lint    # Run ESLint
npm run typescript  # Type check without emit
```

## Architecture

### SDK Integration Pattern

All templates follow the same configuration pattern:

1. **Configuration file** (`lib/blocks-config.ts` or `environments/environment.ts`) - defines `apiKey`, `urls`, `authMode`, and `storage`
2. **Provider wrapper** - wraps the app with the SDK's Provider component/function
3. **Service URLs** - only configure the services you need (authentication, crm, files, etc.). See [23blocks.com/blocks](https://23blocks.com/blocks) for full list.

### Auth Modes
- `token` (default): SDK stores tokens in browser/device storage, attaches `Authorization: Bearer` header
- `cookie`: Backend sets httpOnly cookies, more secure for production web apps

### Mobile-Specific: Secure Storage

The mobile template uses `expo-secure-store` for encrypted token storage via a custom storage adapter (`lib/secure-storage.ts`). The SDK's `customStorage` prop accepts an async storage interface.

The `isReady` state from `useAuth()` indicates when tokens have been loaded from secure storage - show a loading screen until `isReady` is true before checking authentication state.

## Environment Variables

### Next.js
Uses `NEXT_PUBLIC_23BLOCKS_*` prefix. See `.env.example`.

### Angular
Uses `src/environments/environment.ts`. Copy from `environment.example.ts`.

### Mobile
Uses `EXPO_PUBLIC_BLOCKS_*` prefix. See `.env.example`.
