# Sinhala Books

*Name:* S. P. Rajapaksha  
*Student ID:* FGS/MSC/Cs/2025/005 
*Demo video link:* [Add a publicly accessible video link]

## About

Sinhala Books is a mobile guide to 10 well known Sinhala books. Readers can browse the collection, read a short description in Sinhala, open a detail page and save books to a shared favourites list. It helps readers discover Sinhala literature and keep track of titles they want to read.

## Screens

There are three screen types:

1. **Books** (`app/(tabs)/index.js`) — displays all books in a scrollable list.
2. **Favorites** (`app/(tabs)/favorites.js`) — displays saved books and an empty-state message when none are saved.
3. **Book details** (`app/book/[id].js`) — shows a book’s details and lets the reader add or remove it from favourites.

## Components

- `View`, `Text`, `Image` and `Pressable` are used across `components/BookCard.js` and `app/book/[id].js`. Both screens display the local cover image directly.
- `FlatList` renders the book lists in `app/(tabs)/index.js` and `app/(tabs)/favorites.js`.
- `Modal` is used by `components/ConfirmModal.js` to confirm removing a favourite.
- Shared favourites state is provided by `context/FavoritesContext.js` using `useState`.

## Expo Router structure

```text
app/
├── _layout.js     # Root stack, favourites provider, notification handler
├── (tabs)/
│   ├── _layout.js     # Books and Favorites tabs
│   ├── index.js        # Books list
│   └── favorites.js      # Favourites list
└── book/
    └── [id].js     # Book detail screen

components/
├── BookCard.js
└── ConfirmModal.js
context/
└── FavoritesContext.js
data/
└── books.js
hooks/
└── useAppStateListener.js
utils/
└── notifications.js
```

The root stack contains the tab navigator and the book detail route. Selecting a card opens `/book/[id]`; the stack back button returns to the previous screen.

## Local notifications

I followed the [Expo Notifications documentation](https://docs.expo.dev/versions/v58.0.0/sdk/notifications/) and used `expo-notifications` for local notifications. When a book is added to favourites, the app checks and requests notification permission, then schedules an immediate local notification. On Android it attempts to create a notification channel; if Expo Go rejects that call, the app logs the error and falls back to the default channel. If notification permission is denied, the book is still saved. The foreground notification handler is registered in `app/_layout.js`. Expo Go may show a limitations warning; this app uses local notifications, not remote push notifications.

## Book covers and descriptions

All 10 books have its cover image bundled in `assets/`. The images are rendered directly by `components/BookCard.js` and `app/book/[id].js`. Book descriptions are short Sinhala summaries written for this app.

## AppState

`hooks/useAppStateListener.js` subscribes to React Native’s [AppState change event](https://reactnative.dev/docs/appstate). When the previous state was `background` or `inactive` and the next state is `active`, it logs and displays **“Welcome back!”**. The subscription is removed when the root layout unmounts.

## Run locally

```sh
git clone <your-public-repository-url>
cd <repository-folder>
npm install
npx expo start
```

Open the project in Expo Go on a physical phone using the same WiFi network as the computer. If the network does not allow a direct connection, start Expo with:

```sh
npx expo start --tunnel
```




