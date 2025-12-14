import { Stack } from 'expo-router';

/**
 * Auth Layout
 *
 * Layout for authentication screens (login, register, forgot password).
 */
export default function AuthLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: '#fff',
        },
        headerTintColor: '#007AFF',
        headerTitleStyle: {
          fontWeight: '600',
        },
      }}
    >
      <Stack.Screen
        name="login"
        options={{
          title: 'Sign In',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="register"
        options={{
          title: 'Create Account',
          headerBackTitle: 'Back',
        }}
      />
    </Stack>
  );
}
