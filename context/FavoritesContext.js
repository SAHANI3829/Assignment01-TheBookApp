import React, { createContext, useContext, useState } from 'react';
import { Alert } from 'react-native';
import { notifyBookFavorited } from '../utils/notifications';

const FavoritesContext = createContext(null);

export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState([]);

  async function addFavorite(book) {
    setFavorites((current) =>
      current.includes(book.id) ? current : [...current, book.id],
    );

    try {
      await notifyBookFavorited(book.title);
    } catch (error) {
      console.error('Could not send the favourite notification.', error);
      Alert.alert(
        'Notification unavailable',
        'The book was saved, but its notification could not be sent.',
      );
    }
  }

  function removeFavorite(bookId) {
    setFavorites((current) => current.filter((id) => id !== bookId));
  }

  return (
    <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  const context = useContext(FavoritesContext);

  if (!context) {
    throw new Error('useFavorites must be used inside FavoritesProvider.');
  }

  return context;
}
