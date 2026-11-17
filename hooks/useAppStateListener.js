import { useEffect, useRef } from 'react';
import { Alert, AppState } from 'react-native';

export default function useAppStateListener() {
  const appState = useRef(AppState.currentState);

  useEffect(() => {
    const subscription = AppState.addEventListener('change', (nextState) => {
      const wasInBackground =
        appState.current === 'background' || appState.current === 'inactive';

      if (wasInBackground && nextState === 'active') {
        console.log('Welcome back!');
        Alert.alert('Welcome back!');
      }

      appState.current = nextState;
    });

    return () => subscription.remove();
  }, []);
}
