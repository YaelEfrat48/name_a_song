# 📚 English-Hebrew Flashcard App

A simple web application that displays random English words with their Hebrew translations. Perfect for language learning and finding song title inspiration!

## ✨ Features

- **Random Word Generator**: Click a button to see a new English-Hebrew word pair
- **Common Words Filter**: Uses the 20,000 most common English words to ensure familiar, song-worthy vocabulary
- **Beautiful UI**: Modern gradient design with responsive layout
- **Fast & Free**: No backend, no API keys, runs entirely in the browser

## 🚀 Live Demo

[**Try it live here!**](https://yaelefrat48.github.io/name_a_song/)

## 🛠️ Technologies Used

- **HTML5** - Structure
- **CSS3** - Styling with gradients and flexbox
- **Vanilla JavaScript** - Logic and API calls
- **External APIs**:
  - [Milon Dictionary](https://github.com/gregarkhipov/milon) - English-Hebrew translations
  - [Google 10k English](https://github.com/first20hours/google-10000-english) - Common words list

## 📂 Project Structure

```
name_a_song/
├── index.html      # Main HTML structure
├── style.css       # Styling and layout
├── script.js       # Dictionary loading and word selection logic
└── README.md       # This file
```

## 🎯 How It Works

1. On page load, the app fetches two resources in parallel:
   - English-Hebrew dictionary (100,000+ words)
   - List of 20,000 most common English words

2. Filters the dictionary to only include common words (increases likelihood of finding songs with these titles)

3. Displays a random word pair when you click "New Word"


⭐ Star this repo if you found it helpful!
