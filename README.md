# 🎵 Spotify Mood Playlist Personalizer

A dynamic, mood-based music playlist generator built with vanilla JavaScript. Select your mood and explore curated playlists with real-time background transitions, search functionality, and a liked songs collection.

---

## ✨ Features

- **🎨 Mood-Based Playlists** — Choose from Focus, Chill, or Hype moods to generate instantly curated playlists
- **🌈 Dynamic Background Colors** — Smooth gradient transitions based on selected mood
- **❤️ Like Songs** — Click to like/unlike songs across all sections; liked status persists throughout the app
- **🔍 Search Functionality** — Real-time search across all songs in the database
- **💚 Liked Songs Collection** — View all your liked songs in one dedicated section
- **🎭 Spotify-Style UI** — Professional dark theme with sidebar navigation inspired by Spotify
- **📱 Responsive Design** — Works seamlessly on different screen sizes

---

## 🛠️ Tech Stack

**Frontend:**
- **HTML5** — Semantic markup structure
- **CSS3** — Modern styling with gradients and transitions
- **JavaScript (ES6+)** — Event-driven interactivity and DOM manipulation
- **Bootstrap 5** — Responsive grid system and utility classes
- **Google Fonts** — Inter font family

**No Backend Required** — All data is stored client-side in memory

---

## 📁 Project Structure

```
├── index.html          # Main HTML structure with sections
├── styles.css          # All CSS styling (colors, layout, animations)
├── script.js           # Core JavaScript logic
└── README.md           # This file
```

---

## 🚀 How to Use

1. **Open the App**
   - Open `index.html` in your browser
   - See the hero landing page with "Try the Prototype" button

2. **Select a Mood**
   - Click "Try the Prototype" or scroll to app section
   - Choose a mood from the dropdown: **Focus**, **Chill**, or **Hype**
   - Watch the background change to match the mood

3. **Interact with Songs**
   - Click the heart (♡) on any song to like it
   - Heart turns filled (♥) when liked
   - Like songs persist as you navigate

4. **Navigate Using Sidebar**
   - **Home** — Back to hero section
   - **Search** — Search all songs with real-time filtering
   - **Liked Songs** — View your collection of liked songs
   - **Back to Playlists** — Return from Search or Liked Songs

---

## 💻 Code Architecture

### Data Structure
```javascript
const playlistData = {
  focus: [...songs],
  chill: [...songs],
  hype: [...songs]
}
```
- Songs are organized by mood
- Each song has `title` and `cover` image URL
- Dynamic property access: `playlistData[mood]`

### Core Functions

**`createSongRow(song)`** — Reusable function that creates a song element with:
- Album art image
- Song title
- Like button with toggle state

**`displayMain()` / `displaySearch()` / `displayLikedSongs()`** — Navigation handlers that show/hide sections

**Event Listeners:**
- Mood selector → updates playlist and background
- Like button → adds/removes from `likedSongs` array
- Sidebar links → switches between sections
- Search input → filters songs in real-time

### State Management
- `likedSongs` array stores liked tracks
- Persists while browsing different sections
- Unlike in production apps, data resets on page refresh

---

## 🎨 Mood Color Scheme

| Mood | Gradient | Vibe |
|------|----------|------|
| **Focus** | #0f3460 → #16213e | Deep blue — Concentration |
| **Chill** | #6a1b9a → #4a148c | Purple — Relaxation |
| **Hype** | #d32f2f → #ff6f00 | Red/Orange — Energy |

---

## 🔑 Key JavaScript Concepts Demonstrated

1. **Event Listeners** — Responding to user interactions
2. **DOM Manipulation** — Creating, updating, and removing elements
3. **Array Methods** — `.forEach()` for iterating songs
4. **Dynamic Property Access** — `playlistData[mood]` pattern
5. **Conditional Logic** — Showing/hiding UI sections
6. **Array Filtering** — Search with `.filter()` and `.includes()`

---

## 📝 How It Works: Step-by-Step

1. User selects a mood from dropdown
2. JavaScript retrieves songs for that mood: `playlistData[mood]`
3. Background class is applied: `mood-${mood}`
4. CSS gradient transition animates the background
5. Loop: For each song, create a row element with image, title, and like button
6. Append all rows to the playlist container
7. User can like/unlike songs, which updates the `likedSongs` array
8. Sidebar navigation switches which section is displayed

---

## 🤝 Like Button Logic

```javascript
// Check if song is already liked
if (likedSongs.some(s => s.title === song.title)) {
  // Already liked → show filled heart
  likeBtn.classList.add("liked");
}

// Click to toggle
if (isLiked) {
  likedSongs.remove(song);  // Unlike
} else {
  likedSongs.push(song);    // Like
}
```

---

## 🎯 Future Enhancements

- 📊 Store liked songs in browser's `localStorage` (persists after refresh)
- 🎵 Add more moods (Party, Sad, Workout, Sleep, etc.)
- 🎧 Play/pause audio clips for each song
- ⭐ Add ratings alongside likes
- 📱 Add to queue functionality
- 🎨 Let users customize mood colors
- 🔄 Add playlist shuffle/recommendations
- 💾 Export liked songs as a shareable list

---

## 📖 Learning Objectives

This project teaches:
- How to build interactive web applications with vanilla JavaScript
- Event-driven programming patterns
- DOM manipulation and dynamic UI updates
- Real to dynamic data access using bracket notation
- How modern web products like Spotify work at a fundamental level

---

## 🤖 Made With

- Pure JavaScript (no frameworks)
- HTML5 semantic markup
- Modern CSS with gradients and animations
- Bootstrap for responsive layout

---

**Enjoy your personalized playlists!** 🎵✨
