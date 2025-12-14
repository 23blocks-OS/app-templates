import { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
  Platform,
} from 'react-native';
import { useUser } from '@23blocks/react';

/**
 * Profile Screen
 *
 * Displays and allows editing of user profile information.
 * Demonstrates using the useUser hook for profile management.
 */
export default function ProfileScreen() {
  const { user, loading, updateProfile, refetch } = useUser();
  const [refreshing, setRefreshing] = useState(false);

  const handleRefresh = async () => {
    setRefreshing(true);
    try {
      await refetch();
    } catch (error) {
      Alert.alert('Error', 'Failed to refresh profile');
    } finally {
      setRefreshing(false);
    }
  };

  if (loading && !user) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#007AFF" />
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.avatarSection}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>
              {user?.email?.charAt(0).toUpperCase() || '?'}
            </Text>
          </View>
          <Text style={styles.email}>{user?.email || 'No email'}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Account Information</Text>

          <View style={styles.infoCard}>
            <InfoRow label="User ID" value={user?.id || 'N/A'} />
            <InfoRow label="Email" value={user?.email || 'N/A'} />
            <InfoRow
              label="Email Verified"
              value={user?.confirmed ? 'Yes' : 'No'}
            />
            <InfoRow
              label="Created"
              value={
                user?.createdAt
                  ? new Date(user.createdAt).toLocaleDateString()
                  : 'N/A'
              }
            />
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Actions</Text>

          <TouchableOpacity
            style={styles.actionButton}
            onPress={handleRefresh}
            disabled={refreshing}
          >
            {refreshing ? (
              <ActivityIndicator size="small" color="#007AFF" />
            ) : (
              <Text style={styles.actionButtonText}>Refresh Profile</Text>
            )}
          </TouchableOpacity>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>SDK Usage Example</Text>
          <View style={styles.codeBlock}>
            <Text style={styles.codeText}>
              {`// Using the useUser hook
const { user, loading, updateProfile } = useUser();

// Access user data
console.log(user?.email);

// Update profile
await updateProfile({
  name: 'New Name',
});`}
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
      <Text style={styles.infoValue} numberOfLines={1}>
        {value}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  content: {
    padding: 16,
  },
  avatarSection: {
    alignItems: 'center',
    paddingVertical: 24,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#007AFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  avatarText: {
    fontSize: 32,
    fontWeight: '600',
    color: '#fff',
  },
  email: {
    fontSize: 16,
    color: '#666',
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
    flex: 1,
    textAlign: 'right',
    marginLeft: 16,
  },
  actionButton: {
    backgroundColor: '#fff',
    borderRadius: 12,
    paddingVertical: 14,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#007AFF',
  },
  actionButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#007AFF',
  },
  codeBlock: {
    backgroundColor: '#1a1a1a',
    borderRadius: 12,
    padding: 16,
  },
  codeText: {
    fontFamily: Platform.OS === 'ios' ? 'Menlo' : 'monospace',
    fontSize: 12,
    color: '#e0e0e0',
    lineHeight: 18,
  },
});
