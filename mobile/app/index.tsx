import { Redirect } from 'expo-router';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import { useAuth } from '@23blocks/react';

/**
 * Root Index
 *
 * Handles the initial routing based on authentication state.
 * Shows loading while tokens are being loaded from secure storage.
 */
export default function Index() {
  const { isReady, isAuthenticated } = useAuth();

  // Show loading while tokens are being loaded from secure storage
  if (!isReady) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#007AFF" />
      </View>
    );
  }

  // Redirect based on authentication state
  if (isAuthenticated()) {
    return <Redirect href="/(app)" />;
  }

  return <Redirect href="/(auth)/login" />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});
