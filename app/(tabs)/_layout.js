import { Text, View, StyleSheet } from 'react-native';
import { Tabs } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

function TabIcon({ route, focused, color }) {
  if (route === 'favorites') {
    return (
      <Text style={[styles.heart, { color }]}>
        {focused ? '♥' : '♡'}
      </Text>
    );
  }

  return (
    <View style={styles.bookIcon}>
      <View style={[styles.bookPage, styles.leftPage, { borderColor: color }]} />
      <View style={[styles.bookPage, styles.rightPage, { borderColor: color }]} />
    </View>
  );
}

export default function TabLayout() {
  const insets = useSafeAreaInsets();

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#315b48',
        tabBarInactiveTintColor: '#7d827e',
        tabBarStyle: {
          backgroundColor: '#fff',
          borderTopColor: '#e8e5de',
          borderTopWidth: 1,
          elevation: 8,
          height: 68 + insets.bottom,
          paddingTop: 7,
          paddingBottom: insets.bottom + 5,
        },
        tabBarLabelStyle: {
          fontSize: 11,
          fontWeight: '600',
          marginTop: 3,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Books',
          tabBarLabel: 'Books',
          tabBarIcon: ({ focused, color }) => (
            <TabIcon route="books" focused={focused} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="favorites"
        options={{
          title: 'Favorites',
          tabBarLabel: 'Favorites',
          tabBarIcon: ({ focused, color }) => (
            <TabIcon route="favorites" focused={focused} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  heart: { fontSize: 22, lineHeight: 25 },
  bookIcon: {
    flexDirection: 'row',
    height: 20,
    width: 23,
  },
  bookPage: {
    borderWidth: 1.8,
    height: 17,
    width: 11,
  },
  leftPage: { borderBottomLeftRadius: 3, borderTopLeftRadius: 3 },
  rightPage: { borderBottomRightRadius: 3, borderTopRightRadius: 3 },
});
