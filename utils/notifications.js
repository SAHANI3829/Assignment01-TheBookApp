import { Alert, Platform } from 'react-native';
import * as Notifications from 'expo-notifications';

const FAVORITES_CHANNEL_ID = 'favorites';
let channelCreationFailed = false;

export async function notifyBookFavorited(bookTitle) {
  let channelAvailable = false;

  if (Platform.OS === 'android' && !channelCreationFailed) {
    try {
      await Notifications.setNotificationChannelAsync(FAVORITES_CHANNEL_ID, {
        name: 'Favourites',
        importance: Notifications.AndroidImportance.DEFAULT,
      });
      channelAvailable = true;
    } catch (error) {
      channelCreationFailed = true;
      console.warn(
        'Could not create the Android notification channel. Using the default channel instead.',
        error,
      );
    }
  }

  const currentPermissions = await Notifications.getPermissionsAsync();
  let permissionStatus = currentPermissions.status;

  if (permissionStatus !== 'granted') {
    const requestedPermissions = await Notifications.requestPermissionsAsync();
    permissionStatus = requestedPermissions.status;
  }

  if (permissionStatus !== 'granted') {
    Alert.alert(
      'Notifications are off',
      'The book was saved, but notifications are disabled. You can enable them in your device settings.',
    );
    return;
  }

  await Notifications.scheduleNotificationAsync({
    content: {
      title: 'Added to favourites',
      body: `${bookTitle} was added to your favourites 📚`,
      sound: false,
    },
    trigger:
      channelAvailable && Platform.OS === 'android'
        ? { channelId: FAVORITES_CHANNEL_ID }
        : null,
  });
}
