import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from 'react-native';
import { router } from 'expo-router';
import { useState } from 'react';
import { useAuth } from '@23blocks/react';

/**
 * Settings Screen
 *
 * App settings and account management.
 * Demonstrates sign out functionality.
 */
export default function SettingsScreen() {
  const { signOut } = useAuth();
  const [signingOut, setSigningOut] = useState(false);

  const handleSignOut = async () => {
    Alert.alert('Sign Out', 'Are you sure you want to sign out?', [
      { text: 'Cancel', style: 'cancel' },
      {
        text: 'Sign Out',
        style: 'destructive',
        onPress: async () => {
          setSigningOut(true);
          try {
            await signOut();
            router.replace('/(auth)/login');
          } catch (error) {
            Alert.alert(
              'Error',
              'Failed to sign out. Please try again.'
            );
          } finally {
            setSigningOut(false);
          }
        },
      },
    ]);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Account</Text>

          <TouchableOpacity
            style={[styles.menuItem, signingOut && styles.menuItemDisabled]}
            onPress={handleSignOut}
            disabled={signingOut}
          >
            {signingOut ? (
              <ActivityIndicator size="small" color="#FF3B30" />
            ) : (
              <Text style={styles.menuItemTextDanger}>Sign Out</Text>
            )}
          </TouchableOpacity>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>About</Text>

          <View style={styles.infoCard}>
            <InfoRow label="App Version" value="1.0.0" />
            <InfoRow label="SDK Version" value="@23blocks/react ^2.0.0" />
            <InfoRow label="Expo SDK" value="52" />
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>SDK Configuration</Text>
          <View style={styles.codeBlock}>
            <Text style={styles.codeText}>
              {`// lib/blocks-config.ts
export const blocksConfig = {
  appId: process.env.EXPO_PUBLIC_BLOCKS_APP_ID,
  tenantId: process.env.EXPO_PUBLIC_BLOCKS_TENANT_ID,
  urls: {
    authentication: process.env.EXPO_PUBLIC_BLOCKS_AUTH_URL,
  },
};

// lib/secure-storage.ts
import * as SecureStore from 'expo-secure-store';

export const secureStorage = {
  getItem: SecureStore.getItemAsync,
  setItem: SecureStore.setItemAsync,
  removeItem: SecureStore.deleteItemAsync,
};

// components/Providers.tsx
<Provider
  appId={blocksConfig.appId}
  urls={blocksConfig.urls}
  customStorage={secureStorage}
>
  {children}
</Provider>`}
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <View style={styles.infoRow}>
      <Text style={styles.infoLabel}>{label}</Text>
      <Text style={styles.infoValue}>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  content: {
    padding: 16,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1a1a1a',
    marginBottom: 12,
  },
  menuItem: {
    backgroundColor: '#fff',
    borderRadius: 12,
    paddingVertical: 14,
    paddingHorizontal: 16,
    alignItems: 'center',
  },
  menuItemDisabled: {
    opacity: 0.6,
  },
  menuItemTextDanger: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FF3B30',
  },
  infoCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    overflow: 'hidden',
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  infoLabel: {
    fontSize: 14,
    color: '#666',
  },
  infoValue: {
    fontSize: 14,
    fontWeight: '500',
    color: '#1a1a1a',
  },
  codeBlock: {
    backgroundColor: '#1a1a1a',
    borderRadius: 12,
    padding: 16,
  },
  codeText: {
    fontFamily: 'monospace',
    fontSize: 11,
    color: '#e0e0e0',
    lineHeight: 16,
  },
});
