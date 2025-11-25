// Dictionary data
let dictionary = [];
let commonWords = new Set(); // Store common words for fast lookup

// DOM elements
const englishWord = document.getElementById('english-word');
const hebrewWord = document.getElementById('hebrew-word');
const newWordBtn = document.getElementById('new-word-btn');

// Fetch dictionary from GitHub
async function loadDictionary() {
    try {
        englishWord.textContent = 'Loading dictionary...';
        hebrewWord.textContent = 'טוען מילון...';
        
        // Fetch both the dictionary and common words list in parallel
        const [dictResponse, commonWordsResponse] = await Promise.all([
            fetch('https://raw.githubusercontent.com/gregarkhipov/milon/gh-pages/dict-en-he.json'),
            fetch('https://raw.githubusercontent.com/first20hours/google-10000-english/master/20k.txt')
        ]);
        
        const fullDictionary = await dictResponse.json();
        const commonWordsText = await commonWordsResponse.text();
        
        // Parse common words into a Set for fast lookup
        commonWords = new Set(
            commonWordsText
                .split('\n')
                .map(word => word.trim().toLowerCase())
                .filter(word => word.length > 0)
        );
        
        console.log(`Common words loaded: ${commonWords.size} words`);
        
        // Filter dictionary to only include common English words
        dictionary = fullDictionary.filter(entry => {
            const englishWord = (entry.translated || '').toLowerCase().trim();
            return commonWords.has(englishWord);
        });
        
        console.log(`Filtered dictionary: ${dictionary.length} words (from ${fullDictionary.length} total)`);
        
        // Show first random word
        showRandomWord();
    } catch (error) {
        englishWord.textContent = 'Error loading dictionary';
        hebrewWord.textContent = 'שגיאה בטעינת המילון';
        console.error('Error:', error);
    }
}

// Show random word
function showRandomWord() {
    if (dictionary.length === 0) {
        return;
    }
    
    // Pick random entry
    const randomIndex = Math.floor(Math.random() * dictionary.length);
    const entry = dictionary[randomIndex];
    
    // Display English word
    englishWord.textContent = entry.translated || 'N/A';
    
    // Display Hebrew translation (first one if multiple)
    const hebrewTranslation = entry.translation && entry.translation.length > 0 
        ? entry.translation[0] 
        : 'אין תרגום';
    hebrewWord.textContent = hebrewTranslation;
}

// Event listener for button
newWordBtn.addEventListener('click', showRandomWord);

// Load dictionary on page load
loadDictionary();
