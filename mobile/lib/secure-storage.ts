import * as SecureStore from 'expo-secure-store';
import type { AsyncStorageInterface } from '@23blocks/react';

/**
 * Secure storage adapter for 23blocks SDK
 *
 * Uses expo-secure-store for encrypted token storage.
 * This is the recommended approach for production apps
 * as it stores sensitive data in the device's secure enclave.
 */
export const secureStorage: AsyncStorageInterface = {
  getItem: SecureStore.getItemAsync,
  setItem: SecureStore.setItemAsync,
  removeItem: SecureStore.deleteItemAsync,
};
