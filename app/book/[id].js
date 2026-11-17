import React, { useState } from 'react';
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Stack, useLocalSearchParams } from 'expo-router';
import ConfirmModal from '../../components/ConfirmModal';
import { useFavorites } from '../../context/FavoritesContext';
import books from '../../data/books';

export default function BookDetailScreen() {
  const { id } = useLocalSearchParams();
  const book = books.find((item) => item.id === id);
  const { favorites, addFavorite, removeFavorite } = useFavorites();
  const [confirmVisible, setConfirmVisible] = useState(false);

  if (!book) {
    return (
      <>
        <Stack.Screen options={{ title: 'Book not found' }} />
        <View style={styles.notFound}>
          <Text style={styles.notFoundTitle}>Book not found</Text>
          <Text style={styles.notFoundText}>This title is not in the collection.</Text>
        </View>
      </>
    );
  }

  const isFavorite = favorites.includes(book.id);

  return (
    <>
      <Stack.Screen options={{ title: book.transliteration }} />
      <ScrollView contentContainerStyle={styles.content}>
        <Image
          accessibilityLabel={`${book.transliteration} front cover`}
          resizeMode="cover"
          source={book.coverImage}
          style={styles.cover}
        />

        <Text style={styles.transliteration}>{book.transliteration}</Text>
        <Text style={styles.author}>{book.author}</Text>

        <View style={styles.facts}>
          <Fact label="First published" value={String(book.year)} />
          <Fact label="Genre" value={book.genre} />
          {book.pages ? <Fact label="Pages" value={String(book.pages)} /> : null}
        </View>

        <Text style={styles.sectionTitle}>කෘතිය ගැන</Text>
        <Text style={styles.abstract}>{book.abstract}</Text>

        <Pressable
          accessibilityRole="button"
          accessibilityLabel={
            isFavorite ? 'Remove from favourites' : 'Add to favourites'
          }
          style={[styles.favoriteButton, isFavorite && styles.savedButton]}
          onPress={() => {
            if (isFavorite) {
              setConfirmVisible(true);
            } else {
              addFavorite(book);
            }
          }}
        >
          <Text style={[styles.favoriteButtonText, isFavorite && styles.savedButtonText]}>
            {isFavorite ? '♥  Saved to favorites' : '♡  Add to favorites'}
          </Text>
        </Pressable>
      </ScrollView>

      <ConfirmModal
        visible={confirmVisible}
        title="Remove favourite?"
        message={`Remove “${book.title}” from your favourites?`}
        onCancel={() => setConfirmVisible(false)}
        onConfirm={() => {
          removeFavorite(book.id);
          setConfirmVisible(false);
        }}
      />
    </>
  );
}

function Fact({ label, value }) {
  return (
    <View style={styles.fact}>
      <Text style={styles.factLabel}>{label}</Text>
      <Text style={styles.factValue}>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  content: { padding: 22, paddingBottom: 34 },
  cover: {
    borderRadius: 16,
    height: 225,
    marginBottom: 24,
    width: '100%',
  },
  transliteration: { color: '#26372e', fontSize: 25, fontWeight: '700' },
  author: { color: '#777d78', fontSize: 16, marginTop: 6 },
  facts: {
    backgroundColor: '#fff',
    borderRadius: 14,
    marginTop: 22,
    paddingHorizontal: 16,
  },
  fact: {
    borderBottomColor: '#eeece6',
    borderBottomWidth: StyleSheet.hairlineWidth,
    paddingVertical: 13,
  },
  factLabel: { color: '#858a85', fontSize: 12 },
  factValue: { color: '#34433a', fontSize: 15, fontWeight: '600', marginTop: 4 },
  sectionTitle: {
    color: '#26372e',
    fontSize: 18,
    fontWeight: '700',
    marginTop: 24,
  },
  abstract: { color: '#5f6661', fontSize: 15, lineHeight: 24, marginTop: 9 },
  favoriteButton: {
    alignItems: 'center',
    backgroundColor: '#315b48',
    borderRadius: 12,
    marginTop: 26,
    paddingVertical: 15,
  },
  savedButton: { backgroundColor: '#e6eee8' },
  favoriteButtonText: { color: '#fff', fontSize: 15, fontWeight: '700' },
  savedButtonText: { color: '#315b48' },
  notFound: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    padding: 24,
  },
  notFoundTitle: { color: '#26372e', fontSize: 20, fontWeight: '700' },
  notFoundText: { color: '#777d78', fontSize: 14, marginTop: 8 },
});
