# 23blocks Angular Template

A starter template for building Angular applications with the 23blocks SDK.

## Quick Start

```bash
# Clone this template
npx degit 23blocks-OS/app-templates/angular my-app
cd my-app

# Install dependencies
npm install

# Configure environment
cp src/environments/environment.example.ts src/environments/environment.ts
cp src/environments/environment.example.ts src/environments/environment.prod.ts
# Edit both files with your 23blocks configuration

# Start development server
npm start
```

## Configuration

Edit `src/environments/environment.ts`:

```typescript
export const environment = {
  production: false,
  appId: 'your-app-id',
  urls: {
    authentication: 'https://auth.your-domain.com',
    products: 'https://products.your-domain.com',
    // Add other services as needed
  },
  authMode: 'token', // or 'cookie'
  storage: 'localStorage',
};
```

## Usage

### Setup in main.ts

```typescript
import { provideBlocks23 } from '@23blocks/angular';
import { environment } from './environments/environment';

bootstrapApplication(AppComponent, {
  providers: [
    provideBlocks23({
      appId: environment.appId,
      urls: environment.urls,
      authMode: environment.authMode,
      storage: environment.storage,
    }),
  ],
});
```

### Using Services in Components

```typescript
import { Component } from '@angular/core';
import { AuthenticationService, ProductsService } from '@23blocks/angular';

@Component({...})
export class MyComponent {
  constructor(
    private authService: AuthenticationService,
    private productsService: ProductsService
  ) {}

  signIn() {
    this.authService.signIn({ email, password }).subscribe({
      next: (response) => console.log('Signed in:', response),
      error: (err) => console.error('Failed:', err),
    });
  }

  loadProducts() {
    this.productsService.list().subscribe({
      next: (products) => console.log('Products:', products),
      error: (err) => console.error('Failed:', err),
    });
  }
}
```

### Auth Modes

**Token mode (default):**
```typescript
provideBlocks23({
  appId: '...',
  urls: { ... },
  authMode: 'token',
  storage: 'localStorage', // or 'sessionStorage' | 'memory'
});
```

**Cookie mode (recommended for production):**
```typescript
provideBlocks23({
  appId: '...',
  urls: { ... },
  authMode: 'cookie', // Backend sets httpOnly cookies
});
```

## Project Structure

```
src/
├── app/
│   ├── app.component.ts    # Root component
│   ├── app.routes.ts       # Route definitions
│   └── components/
│       └── home.component.ts # Home page with sign-in
├── environments/
│   ├── environment.example.ts # Template config
│   ├── environment.ts         # Dev config (create from example)
│   └── environment.prod.ts    # Prod config (create from example)
├── main.ts                 # Bootstrap with 23blocks providers
└── styles.css              # Global styles
```

## Learn More

- [23blocks SDK Documentation](https://github.com/23blocks-OS/frontend-sdk)
- [Angular Documentation](https://angular.dev)
