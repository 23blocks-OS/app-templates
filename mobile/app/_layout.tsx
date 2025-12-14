import { useEffect } from 'react';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import * as SplashScreen from 'expo-splash-screen';
import { Providers } from '@/components/Providers';

// Prevent the splash screen from auto-hiding before we're ready
SplashScreen.preventAutoHideAsync();

/**
 * Root Layout
 *
 * Wraps the entire app with providers and handles splash screen.
 */
export default function RootLayout() {
  useEffect(() => {
    // Hide splash screen once the app is ready
    SplashScreen.hideAsync();
  }, []);

  return (
    <Providers>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
        <Stack.Screen name="(app)" options={{ headerShown: false }} />
      </Stack>
      <StatusBar style="auto" />
    </Providers>
  );
}
