// Dictionary data
let wordPairs = {}; // Store English-Hebrew word pairs

// DOM elements
const englishWord = document.getElementById('english-word');
const hebrewWord = document.getElementById('hebrew-word');
const newWordBtn = document.getElementById('new-word-btn');

// Fetch translations from local JSON file
async function loadDictionary() {
    try {
        englishWord.textContent = 'Loading words...';
        hebrewWord.textContent = 'טוען מילים...';
        
        // Fetch our curated translation file
        const response = await fetch('translations.json');
        wordPairs = await response.json();
        
        const wordCount = Object.keys(wordPairs).length;
        console.log(`✅ Loaded ${wordCount} word pairs`);
        
        // Show first random word
        showRandomWord();
    } catch (error) {
        englishWord.textContent = 'Error loading words';
        hebrewWord.textContent = 'שגיאה בטעינת המילים';
        console.error('Error:', error);
    }
}

// Show random word
function showRandomWord() {
    const words = Object.keys(wordPairs);
    
    if (words.length === 0) {
        return;
    }
    
    // Pick random word
    const randomIndex = Math.floor(Math.random() * words.length);
    const englishTerm = words[randomIndex];
    const hebrewTerm = wordPairs[englishTerm];
    
    // Display words
    englishWord.textContent = englishTerm;
    hebrewWord.textContent = hebrewTerm;
}

// Event listener for button
newWordBtn.addEventListener('click', showRandomWord);

// Load dictionary on page load
loadDictionary();
