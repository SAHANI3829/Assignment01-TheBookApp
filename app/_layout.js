import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import * as Notifications from 'expo-notifications';
import { FavoritesProvider } from '../context/FavoritesContext';
import useAppStateListener from '../hooks/useAppStateListener';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldPlaySound: false,
    shouldSetBadge: false,
    shouldShowBanner: true,
    shouldShowList: true,
  }),
});

function AppLayout() {
  useAppStateListener();

  return (
    <>
      <StatusBar style="dark" />
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: '#f7f5f0' },
          headerTintColor: '#25352d',
          headerTitleStyle: { fontWeight: '600' },
          contentStyle: { backgroundColor: '#f7f5f0' },
        }}
      >
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen
          name="book/[id]"
          options={{ title: 'Book details', headerBackTitle: 'Back' }}
        />
      </Stack>
    </>
  );
}

export default function RootLayout() {
  return (
    <FavoritesProvider>
      <AppLayout />
    </FavoritesProvider>
  );
}
