var color_list_length = 6;

var quotes = [
    {
        quote: "Eeeeeeeeeeee!!!",
        author: "Shreiya",
        year: "20 minutes ago",
        citation: "Table",
        mood: "hyper"
    },
    {
        quote: "Zur Mitte, zur Titte, zum Sack, zack, zack! Ein Meter vor, ein Meter zurück, und fluten!",
        author: "Quynh",
        year: "May 2016",
        citation: "Games Night",
        mood: "slightly drunk"
    },
    {
        quote: "What is a thought?",
        author: "Michael",
        year: "Tuesday",
        citation: "Doorway",
        mood: "philosophical"
    },
    {
        quote: "Nice!",
        author: "Shreiya",
        year: "5 minutes ago",
        citation: "Kitchen",
        mood: "proud"
    },
    {
        quote: "Whose garbage is this?",
        author: "Kristyn",
        year: "Last week",
        citation: "Basement",
        mood: "stern"
    },
    {
        quote: "Today is a good day to have a good day.",
        author: "Julie",
        year: "Just now",
        citation: "2 feet away",
        mood: "optimistic"
    }
];

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

var usedQuoteIndexes = [];

function getRandomQuote() {
    if (usedQuoteIndexes.length === quotes.length) {
        usedQuoteIndexes = [];
    }
    var newQuoteIndex;
    for (;;) {   // infinite loop, will keep looking for a quote if it's already been used
        newQuoteIndex = getRandomInt(0, quotes.length);
        if (usedQuoteIndexes.indexOf(newQuoteIndex) === -1) {  // tests to make sure it's a fresh quote
            usedQuoteIndexes.push(newQuoteIndex);  // pushes the new quote index to the used quotes indexes array
            break;  // breaks loop
        }
    }
    return quotes[newQuoteIndex];  // return quote at that index
}

var usedColorIndexes = [];

function getRandomColor() {
    if (usedColorIndexes.length === color_list_length) {
        usedColorIndexes = [];
    }
    var newColorIndex;
    for (;;) {   // infinite loop, will keep looking for a color if it's already been used
        newColorIndex = getRandomInt(0, color_list_length);
        if (usedColorIndexes.indexOf(newColorIndex) === -1) {  // tests to make sure it's a fresh colr
            usedColorIndexes.push(newColorIndex);  // pushes the new color index to the used quotes indexes array
            break;  // breaks loop
        }
    }
    return newColorIndex;  // return color index
}

var quote = document.getElementsByClassName('quote')[0];
var author = document.getElementsByClassName('author')[0];
var citation = document.getElementsByClassName('citation')[0];
var year = document.getElementsByClassName('year')[0];
var mood = document.getElementsByClassName('mood')[0];

function changeColor() {
    var newColorIndex = getRandomColor();
    var newClass = "color-" + (newColorIndex + 1);
    document.body.className = "";
    document.body.classList.add(newClass);
    document.getElementById("loadQuote").classList = "";
    document.getElementById("loadQuote").classList.add(newClass);
}

function printQuote() {
    var newQuote = getRandomQuote();
    quote.innerHTML = newQuote.quote;
    author.innerHTML = newQuote.author;
    citation.innerHTML = newQuote.citation;
    year.innerHTML = newQuote.year;
    mood.innerHTML = newQuote.mood;
    changeColor();
}


// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
window.onload = function() {
    printQuote();
};
window.setInterval(printQuote, 30000);
