import { Image, Pressable, StyleSheet, Text, View } from 'react-native';

export default function BookCard({
  book,
  isFavorite,
  onPress,
  onFavoritePress,
}) {
  return (
    <View style={styles.card}>
      <Pressable
        accessibilityRole="button"
        accessibilityLabel={`View ${book.transliteration}`}
        style={styles.details}
        onPress={onPress}
      >
        <Image
          accessibilityLabel={`${book.transliteration} front cover`}
          resizeMode="cover"
          source={book.coverImage}
          style={styles.cover}
        />
        <View style={styles.info}>
          <Text numberOfLines={1} style={styles.title}>
            {book.transliteration}
          </Text>
          <Text numberOfLines={1} style={styles.author}>
            {book.author}
          </Text>
          <Text style={styles.meta}>
            {book.year}  ·  {book.genre}
          </Text>
        </View>
      </Pressable>
      <Pressable
        accessibilityRole="button"
        accessibilityLabel={
          isFavorite ? `Remove ${book.transliteration} from favourites` : `Add ${book.transliteration} to favourites`
        }
        hitSlop={8}
        onPress={onFavoritePress}
        style={styles.heartButton}
      >
        <Text style={[styles.heart, isFavorite && styles.heartActive]}>
          {isFavorite ? '♥' : '♡'}
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 14,
    flexDirection: 'row',
    minHeight: 140,
    padding: 12,
  },
  details: { alignItems: 'center', flex: 1, flexDirection: 'row' },
  cover: { borderRadius: 9, height: 114, width: 82 },
  info: { flex: 1, paddingHorizontal: 14 },
  title: { color: '#26372e', fontSize: 16, fontWeight: '700' },
  author: { color: '#747b75', fontSize: 13, marginTop: 6 },
  meta: { color: '#929790', fontSize: 12, marginTop: 11 },
  heartButton: { alignItems: 'center', height: 38, justifyContent: 'center', width: 32 },
  heart: { color: '#929790', fontSize: 24 },
  heartActive: { color: '#bc5c52' },
});
