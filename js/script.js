var quotes = [
    {
        quote: "Eeeeeeeeeeee!!!",
        author: "Shreiya",
        year: "20 minutes ago",
        citation: "Table"
    },
    {
        quote: "Zur Mitte, zur Titte, zum Sack, zack, zack! Ein Meter vor, ein Meter zurück, und fluten!",
        author: "Quynh",
        year: "May, 2016",
        citation: "Games Night"
    },
    {
        quote: "I don't have any quotes.",
        author: "Evan",
        year: "Kitchen",
        citation: "5 minutes ago"
    },
    {
        quote: "Nice!",
        author: "Shreiya",
        year: "Kitchen",
        citation: "5 minutes ago"
    },
    {
        quote: "Whose garbage is this?",
        author: "Kristyn",
        year: "Last week",
        citation: "Basement"
    }
];

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

var currentIndex;

function getRandomQuote() {
    var newIndex;
    for (;;) {   // infinite loop, will keep looking for a quote until it finds one different than the last one
        newIndex = getRandomInt(0, quotes.length);
        if (newIndex !== currentIndex) {  // tests to make sure we're not just picking the same quote again
            currentIndex = newIndex;  // assigns the new index to currentIndex
            break;  // breaks loop
        }
    }
    return quotes[newIndex];  // return quote at that index
}

var quote = document.getElementsByClassName('quote')[0];
var author = document.getElementsByClassName('author')[0];
var citation = document.getElementsByClassName('citation')[0];
var year = document.getElementsByClassName('year')[0];


// event listener to respond to "Show another quote" button clicks

function printQuote() {
    var newQuote = getRandomQuote();
    quote.innerHTML = newQuote.quote;
    author.innerHTML = newQuote.author;
    citation.innerHTML = newQuote.citation;
    year.innerHTML = newQuote.year;
}

// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
window.onload = function() {
    printQuote();
};

