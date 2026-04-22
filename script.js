function scrollToApp() {
  document.getElementById("app").scrollIntoView({ behavior: "smooth" });
}

// STEP 1: Define the playlist data object
const playlistData = {
  focus: [
    {
      title: "Tycho — Awake",
      cover:
        "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=300&q=80",
    },

    {
      title: "Lo-fi Beats",
      cover:
        "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&q=80",
    },

    {
      title: "Hans Zimmer — Time",
      cover:
        "https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=300&q=80",
    },
  ],

  chill: [
    {
      title: "Frank Ocean — Pink + White",
      cover:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&q=80",
    },

    {
      title: "SZA — Good Days",
      cover:
        "https://images.unsplash.com/photo-1494232410401-ad00d5433cfa?w=300&q=80",
    },

    {
      title: "Daniel Caesar — Best Part",
      cover:
        "https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=300&q=80",
    },
  ],

  hype: [
    {
      title: "Drake — Nonstop",
      cover:
        "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=300&q=80",
    },

    {
      title: "Travis Scott — SICKO MODE",
      cover:
        "https://images.unsplash.com/photo-1506157786151-b8491531f063?w=300&q=80",
    },

    {
      title: "Kanye West — POWER",
      cover:
        "https://images.unsplash.com/photo-1464375117522-1311dd6d0cd1?w=300&q=80",
    },
  ],
};

/* LIKED SONGS STORAGE */
let likedSongs = [];

/* DOM ELEMENTS */

const selector = document.getElementById("mood-selector");

const container = document.getElementById("playlist-container");

const feedback = document.getElementById("feedback");

const mainSection = document.getElementById("main-section");
const searchSection = document.getElementById("search-section");
const searchInput = document.getElementById("search-input");
const searchResults = document.getElementById("search-results");
const likedSection = document.getElementById("liked-section");
const likedContainer = document.getElementById("liked-container");

/* HELPER FUNCTIONS */

function createSongRow(song) {
  const row = document.createElement("div");
  row.className = "song-row";

  // Song info container
  const songInfo = document.createElement("div");
  songInfo.className = "song-info";

  const img = document.createElement("img");
  img.src = song.cover;

  // BONUS: Image Fallback Protection
  img.onerror = function () {
    this.src = "https://placehold.co/60x60?text=Music";
  };

  const title = document.createElement("div");
  title.innerText = song.title;

  // Like button
  const likeBtn = document.createElement("button");
  likeBtn.className = "like-btn";
  likeBtn.innerText = "♡";

  // Check if song is already liked
  if (likedSongs.some((s) => s.title === song.title)) {
    likeBtn.classList.add("liked");
    likeBtn.innerText = "♥";
  }

  likeBtn.addEventListener("click", function () {
    const isLiked = likedSongs.some((s) => s.title === song.title);

    if (isLiked) {
      // Remove from liked
      likedSongs = likedSongs.filter((s) => s.title !== song.title);
      likeBtn.classList.remove("liked");
      likeBtn.innerText = "♡";
    } else {
      // Add to liked
      likedSongs.push(song);
      likeBtn.classList.add("liked");
      likeBtn.innerText = "♥";
    }
  });

  songInfo.appendChild(img);
  songInfo.appendChild(title);
  row.appendChild(songInfo);
  row.appendChild(likeBtn);

  return row;
}

function displayLikedSongs() {
  mainSection.style.display = "none";
  searchSection.style.display = "none";
  likedSection.style.display = "block";

  likedContainer.innerHTML = "";

  if (likedSongs.length === 0) {
    likedContainer.innerHTML =
      '<p class="text-secondary">No liked songs yet!</p>';
  } else {
    likedSongs.forEach((song) => {
      const row = createSongRow(song);
      likedContainer.appendChild(row);
    });
  }
}

function displaySearch() {
  mainSection.style.display = "none";
  likedSection.style.display = "none";
  searchSection.style.display = "block";
  searchInput.focus();
}

function displayMain() {
  mainSection.style.display = "block";
  searchSection.style.display = "none";
  likedSection.style.display = "none";
}

/* SIDEBAR NAVIGATION */

document.getElementById("home-link").addEventListener("click", function () {
  displayMain();
  document.querySelector(".hero").scrollIntoView({ behavior: "smooth" });
});

document.getElementById("search-link").addEventListener("click", function () {
  displaySearch();
});

document
  .getElementById("liked-songs-link")
  .addEventListener("click", function () {
    displayLikedSongs();
  });

/* BACK BUTTONS */

document
  .getElementById("back-from-search")
  .addEventListener("click", function () {
    displayMain();
  });

document
  .getElementById("back-from-liked")
  .addEventListener("click", function () {
    displayMain();
  });

/* SEARCH FUNCTIONALITY */

searchInput.addEventListener("input", function () {
  const query = this.value.toLowerCase();
  searchResults.innerHTML = "";

  if (query === "") {
    return;
  }

  // Search through all playlists
  Object.values(playlistData).forEach((playlist) => {
    playlist.forEach((song) => {
      if (song.title.toLowerCase().includes(query)) {
        const row = createSongRow(song);
        searchResults.appendChild(row);
      }
    });
  });

  if (searchResults.children.length === 0) {
    searchResults.innerHTML = '<p class="text-secondary">No songs found.</p>';
  }
});

/* STEP 2: Basic Event Listener Setup
What is an event?  Why "change" instead of "click"?
Show students: the page reacts when the user does something */

selector.addEventListener("change", function () {
  /*  STEP 3: Getting the Selected Mood
 console.log(selector.value) to show the mood
 Explain: playlistData[mood] vs playlistData.focus
 This is dynamic property access! */

  const mood = selector.value;
  console.log("Selected mood:", mood);

  // MOOD COLOR CHANGE
  // Remove all mood classes and add the new one
  document.body.classList.remove("mood-focus", "mood-chill", "mood-hype");
  if (mood) {
    document.body.classList.add(`mood-${mood}`);
  }

  /*  STEP 4: Dynamic Data Access (⭐ KEY CONCEPT!)
💡 Emphasize: playlistData[mood] NOT playlistData.focus */

  const songs = playlistData[mood];
  console.log("Songs for this mood:", songs);

  // STEP 5: Clearing Previous Playlist
  container.innerHTML = "";

  // STEP 6: Conditional Feedback & STEP 7: The Loop
  if (mood && songs) {
    feedback.innerText = `Enjoy your ${mood} playlist!`;

    // STEP 7: The Loop (⭐⭐⭐ MOST IMPORTANT!)
    songs.forEach(function (song) {
      // STEP 8: Create and Display DOM Elements
      const row = createSongRow(song);
      container.appendChild(row);
    });
  } else {
    feedback.innerText = "Your personalized playlist will appear here.";
  }
});
