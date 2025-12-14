import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useUser } from '@23blocks/react';

/**
 * Home Screen
 *
 * Main dashboard screen for authenticated users.
 * Demonstrates using the useUser hook to display user information.
 */
export default function HomeScreen() {
  const { user, loading } = useUser();

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.welcomeCard}>
          <Text style={styles.welcomeTitle}>
            Welcome{user?.email ? `, ${user.email.split('@')[0]}` : ''}!
          </Text>
          <Text style={styles.welcomeSubtitle}>
            You're successfully authenticated with 23blocks.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Quick Start</Text>
          <View style={styles.card}>
            <Text style={styles.cardTitle}>SDK Integration</Text>
            <Text style={styles.cardDescription}>
              This template demonstrates how to integrate the @23blocks/react
              SDK with React Native and Expo.
            </Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.cardTitle}>Secure Storage</Text>
            <Text style={styles.cardDescription}>
              Authentication tokens are securely stored using expo-secure-store,
              providing encrypted storage on the device.
            </Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.cardTitle}>Auto Token Refresh</Text>
            <Text style={styles.cardDescription}>
              The SDK automatically handles token refresh, so you don't need to
              worry about session management.
            </Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Available Services</Text>
          <View style={styles.servicesList}>
            <ServiceItem name="Authentication" icon="🔐" />
            <ServiceItem name="User Profile" icon="👤" />
            <ServiceItem name="Search" icon="🔍" />
            <ServiceItem name="Products" icon="📦" />
            <ServiceItem name="CRM" icon="📊" />
            <ServiceItem name="Content" icon="📝" />
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

function ServiceItem({ name, icon }: { name: string; icon: string }) {
  return (
    <View style={styles.serviceItem}>
      <Text style={styles.serviceIcon}>{icon}</Text>
      <Text style={styles.serviceName}>{name}</Text>
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
  welcomeCard: {
    backgroundColor: '#007AFF',
    borderRadius: 16,
    padding: 24,
    marginBottom: 24,
  },
  welcomeTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: '#fff',
    marginBottom: 8,
  },
  welcomeSubtitle: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.8)',
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
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1a1a1a',
    marginBottom: 4,
  },
  cardDescription: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
  servicesList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  serviceItem: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    width: '48%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  serviceIcon: {
    fontSize: 24,
    marginBottom: 8,
  },
  serviceName: {
    fontSize: 14,
    fontWeight: '500',
    color: '#1a1a1a',
  },
});
