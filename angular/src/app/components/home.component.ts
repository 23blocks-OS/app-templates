import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthenticationService } from '@23blocks/angular';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <main class="main">
      <div class="container">
        <h1 class="title">23blocks Angular Template</h1>

        @if (isAuthenticated()) {
          <div class="card">
            <h2>Welcome, {{ userEmail() }}</h2>
            <p>You are signed in.</p>
            <button (click)="signOut()" class="button">Sign Out</button>
          </div>
        } @else {
          <form (ngSubmit)="signIn()" class="card">
            <h2>Sign In</h2>

            @if (error()) {
              <p class="error">{{ error() }}</p>
            }

            <div class="field">
              <label for="email">Email</label>
              <input
                id="email"
                type="email"
                [(ngModel)]="email"
                name="email"
                required
                [disabled]="loading()"
              />
            </div>

            <div class="field">
              <label for="password">Password</label>
              <input
                id="password"
                type="password"
                [(ngModel)]="password"
                name="password"
                required
                [disabled]="loading()"
              />
            </div>

            <button type="submit" class="button" [disabled]="loading()">
              {{ loading() ? 'Signing in...' : 'Sign In' }}
            </button>
          </form>
        }

        <div class="info">
          <h3>Getting Started</h3>
          <ol>
            <li>Copy <code>environment.example.ts</code> to <code>environment.ts</code></li>
            <li>Fill in your 23blocks App ID and service URLs</li>
            <li>Run <code>npm install</code> and <code>npm start</code></li>
          </ol>
        </div>
      </div>
    </main>
  `,
  styles: [`
    .main {
      min-height: 100vh;
      padding: 2rem;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .container {
      max-width: 400px;
      width: 100%;
    }

    .title {
      text-align: center;
      margin-bottom: 2rem;
      font-size: 1.5rem;
    }

    .card {
      background: var(--card-bg);
      border-radius: 8px;
      padding: 2rem;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
      margin-bottom: 1.5rem;
    }

    .card h2 {
      margin-bottom: 1rem;
      font-size: 1.25rem;
    }

    .field {
      margin-bottom: 1rem;
    }

    .field label {
      display: block;
      margin-bottom: 0.25rem;
      font-size: 0.875rem;
      font-weight: 500;
    }

    .field input {
      width: 100%;
      padding: 0.5rem 0.75rem;
      border: 1px solid var(--border);
      border-radius: 4px;
      font-size: 1rem;
      background: var(--card-bg);
      color: var(--foreground);
    }

    .button {
      width: 100%;
      padding: 0.75rem;
      background: var(--primary);
      color: white;
      border: none;
      border-radius: 4px;
      font-size: 1rem;
      cursor: pointer;
      transition: background 0.2s;
    }

    .button:hover {
      background: var(--primary-hover);
    }

    .button:disabled {
      background: #999;
      cursor: not-allowed;
    }

    .error {
      color: var(--error);
      margin-bottom: 1rem;
      font-size: 0.875rem;
    }

    .info {
      background: var(--info-bg);
      border-radius: 8px;
      padding: 1.5rem;
    }

    .info h3 {
      margin-bottom: 0.75rem;
      font-size: 1rem;
    }

    .info ol {
      padding-left: 1.25rem;
      font-size: 0.875rem;
      line-height: 1.6;
    }

    .info code {
      background: var(--code-bg);
      padding: 0.125rem 0.25rem;
      border-radius: 3px;
      font-family: monospace;
    }
  `],
})
export class HomeComponent {
  email = '';
  password = '';

  isAuthenticated = signal(false);
  userEmail = signal<string | null>(null);
  loading = signal(false);
  error = signal<string | null>(null);

  constructor(private authService: AuthenticationService) {}

  async signIn() {
    this.error.set(null);
    this.loading.set(true);

    try {
      this.authService.signIn({ email: this.email, password: this.password }).subscribe({
        next: (response) => {
          this.isAuthenticated.set(true);
          this.userEmail.set(response.data?.attributes?.email ?? this.email);
          this.loading.set(false);
        },
        error: (err) => {
          this.error.set(err.message || 'Sign in failed');
          this.loading.set(false);
        },
      });
    } catch (err) {
      this.error.set(err instanceof Error ? err.message : 'Sign in failed');
      this.loading.set(false);
    }
  }

  signOut() {
    this.authService.signOut().subscribe({
      next: () => {
        this.isAuthenticated.set(false);
        this.userEmail.set(null);
      },
      error: (err) => {
        console.error('Sign out failed:', err);
      },
    });
  }
}
