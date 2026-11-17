import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import BookCard from '../../components/BookCard';
import ConfirmModal from '../../components/ConfirmModal';
import { useFavorites } from '../../context/FavoritesContext';
import books from '../../data/books';

export default function FavoritesScreen() {
  const { favorites, removeFavorite } = useFavorites();
  const [bookToRemove, setBookToRemove] = useState(null);
  const favoriteBooks = books.filter((book) => favorites.includes(book.id));

  return (
    <SafeAreaView style={styles.screen} edges={['top']}>
      <FlatList
        data={favoriteBooks}
        keyExtractor={(book) => book.id}
        contentContainerStyle={[
          styles.list,
          favoriteBooks.length === 0 && styles.emptyList,
        ]}
        ListHeaderComponent={
          <View style={styles.heading}>
            <Text style={styles.eyebrow}>YOUR READING LIST</Text>
            <Text style={styles.title}>Favorites</Text>
            <Text style={styles.subtitle}>Books you have saved for later.</Text>
          </View>
        }
        ListEmptyComponent={
          <View style={styles.emptyState}>
            <Text style={styles.emptyTitle}>No favourites yet</Text>
            <Text style={styles.emptyText}>
              Tap the heart on a book to save it here.
            </Text>
          </View>
        }
        renderItem={({ item }) => (
          <BookCard
            book={item}
            isFavorite
            onPress={() => router.push(`/book/${item.id}`)}
            onFavoritePress={() => setBookToRemove(item)}
          />
        )}
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
  emptyList: { flexGrow: 1 },
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
  emptyState: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 28,
    paddingTop: 56,
  },
  emptyTitle: { color: '#26372e', fontSize: 18, fontWeight: '700' },
  emptyText: {
    color: '#777d78',
    fontSize: 14,
    lineHeight: 21,
    marginTop: 8,
    textAlign: 'center',
  },
});
