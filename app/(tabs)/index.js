import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import BookCard from '../../components/BookCard';
import ConfirmModal from '../../components/ConfirmModal';
import { useFavorites } from '../../context/FavoritesContext';
import books from '../../data/books';

export default function BooksScreen() {
  const { favorites, addFavorite, removeFavorite } = useFavorites();
  const [bookToRemove, setBookToRemove] = useState(null);

  return (
    <SafeAreaView style={styles.screen} edges={['top']}>
      <FlatList
        data={books}
        keyExtractor={(book) => book.id}
        contentContainerStyle={styles.list}
        ListHeaderComponent={
          <View style={styles.heading}>
            <Text style={styles.eyebrow}>A SMALL COLLECTION</Text>
            <Text style={styles.title}>Sinhala Books</Text>
            <Text style={styles.subtitle}>Stories worth returning to.</Text>
          </View>
        }
        renderItem={({ item }) => {
          const isFavorite = favorites.includes(item.id);

          return (
            <BookCard
              book={item}
              isFavorite={isFavorite}
              onPress={() => router.push(`/book/${item.id}`)}
              onFavoritePress={() => {
                if (isFavorite) {
                  setBookToRemove(item);
                } else {
                  addFavorite(item);
                }
              }}
            />
          );
        }}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
      <ConfirmModal
        visible={Boolean(bookToRemove)}
        title="Remove favourite?"
        message={
          bookToRemove
            ? `Remove “${bookToRemove.title}” from your favourites?`
            : ''
        }
        onCancel={() => setBookToRemove(null)}
        onConfirm={() => {
          if (bookToRemove) {
            removeFavorite(bookToRemove.id);
          }
          setBookToRemove(null);
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: '#f7f5f0' },
  list: { paddingHorizontal: 20, paddingBottom: 28 },
  heading: { paddingTop: 24, paddingBottom: 22 },
  eyebrow: {
    color: '#567362',
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 1.5,
  },
  title: { color: '#26372e', fontSize: 30, fontWeight: '700', marginTop: 8 },
  subtitle: { color: '#777d78', fontSize: 15, marginTop: 5 },
  separator: { height: 12 },
});
