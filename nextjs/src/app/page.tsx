'use client';

import React, { useState } from 'react';
import { useAuth } from '@23blocks/react';
import styles from './page.module.css';

export default function Home() {
  const { signIn, signOut, isAuthenticated } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [userEmail, setUserEmail] = useState<string | null>(null);

  const authenticated = isAuthenticated();

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      await signIn({ email, password });
      setUserEmail(email);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Sign in failed');
    } finally {
      setLoading(false);
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut();
      setUserEmail(null);
    } catch (err) {
      console.error('Sign out failed:', err);
    }
  };

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h1 className={styles.title}>23blocks Next.js Template</h1>

        {authenticated ? (
          <div className={styles.card}>
            <h2>Welcome{userEmail ? `, ${userEmail}` : ''}!</h2>
            <p>You are signed in.</p>
            <button onClick={handleSignOut} className={styles.button}>
              Sign Out
            </button>
          </div>
        ) : (
          <form onSubmit={handleSignIn} className={styles.card}>
            <h2>Sign In</h2>

            {error && <p className={styles.error}>{error}</p>}

            <div className={styles.field}>
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={loading}
              />
            </div>

            <div className={styles.field}>
              <label htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                disabled={loading}
              />
            </div>

            <button type="submit" className={styles.button} disabled={loading}>
              {loading ? 'Signing in...' : 'Sign In'}
            </button>
          </form>
        )}

        <div className={styles.info}>
          <h3>Getting Started</h3>
          <ol>
            <li>Copy <code>.env.example</code> to <code>.env.local</code></li>
            <li>Fill in your 23blocks App ID and service URLs</li>
            <li>Run <code>npm install</code> and <code>npm run dev</code></li>
          </ol>
        </div>
      </div>
    </main>
  );
}
