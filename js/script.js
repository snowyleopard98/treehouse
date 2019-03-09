/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/


var quotes = [
    {
    quote: 'I simply can\’t resist a cat, particularly a purring one.',
    author: 'Mark Twain',
    source:  'Abroad with Mark Twain',
    year: 1876,
    category:  'cats',
    location:  'St Louis MO., '
    },
    {
    quote: 'When a man loves cats, I am his friend and comrade, without further introduction.',
    author: 'Mark Twain',
    source:  'An Incident',
    year: 1897,
    category:  'cats',
    location:  'Biloxi MS, '
    },
    {
    quote: 'The fireside tabby is just a shrunken lion without a mane.',
    author: 'Ernest Hemingway',
    source:  'Dan Lassos',
    year:  1947,
    category:  'cats',
    location:  'Hemingway House, Key West FL, '
    },
    {
    quote: 'Do you think pandas know they\'re Chinese and they\'re taking the one child policy a bit too seriously?',
    author: 'Jim Jefferies',
    source:  'Fully Functional',
    year:  2005,
    category:  'humor',
    location:  'Seattle Theater, '
    },
    {
    quote: 'Whenever I meet a pretty girl, the first thing I look for is intelligence; because if she doesn\'t have that, then she\'s mine.',
    author: 'Anthony Jeselnik',
    source: 'Thoughts and Prayers',
    year: 2011,
    category:  'humor',
    location:  'Wilshire Ebell Theater, '
    }
    
    ];


//creating function 'getRandomQuote' to create random number to pick a random quote
    function getRandomQuote(){
    
        //generating whole random number from 0 to length of quotes array(total of 5 here), not including 5 and setting to variable randomNum
        var randomNum = Math.floor(Math.random()*(quotes.length));
        //getting random quote with all key/value pairs that go with the quote 
        var quote = quotes[randomNum];
        //logging quote to console to debug
        console.log(quote);
        //return random quote object
        return quote;
    }


   //generating function to print quote out to screen; takes one parameter, an array
    function printQuote(){
        
        //calling getRandomQuote function
        var randomQuote = getRandomQuote();
        
        //setting htmlString to empty string
        var htmlString = '';
        
        //building htmlString to include 'quote' and 'author'
        htmlString = "<p class = 'quote'>";
        htmlString += randomQuote.quote + "</p>";
        htmlString += "<p class = 'author'>";
        htmlString += randomQuote.author;
        
        //creating 'if statement' to check if source is listed. if so, add to htmlString
        
        if (randomQuote.source !== 'undefined'){
            htmlString += "<span class= 'source'>";
            htmlString += randomQuote.source;
            htmlString += "</span>";
            }
        
        
        //creating 'if statement' to check if location is listed. if so, add to htmlString

         if (randomQuote.location !== 'undefined'){
            htmlString += "<span class= 'location'>";
            htmlString += randomQuote.location;
            htmlString += "</span>";
            }
        
        //creating 'if statement' to check if category is listed. if so, add to htmlString

         if (randomQuote.category !== 'undefined'){
            htmlString += "<span class= 'category'>";
            htmlString += randomQuote.category;
            htmlString += "</span>";
            }
        
        //creating 'if statement' to check if year is listed. if so, add to htmlString

         if (randomQuote.year !== 'undefined'){
            htmlString += "<span class= 'year'>";
            htmlString += randomQuote.year;
            htmlString += "</span>";
            }
        
        //closing htmlString with p tag
        htmlString += "</p>";
        
        //setting innerHTML of 'quote-box' to htmlString
        document.querySelector('#quote-box').innerHTML = htmlString;
        
        
        //toggle class 'color' on and off repeatedly 
        document.querySelector('body').classList.toggle('color');

        
    }

//calling printQuote function to print quote to screen
printQuote();

/*
  When the "Show another quote" button is clicked, the event listener 
  below will be triggered, and it will call the `printQuote` function.
*/
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

//when the 'show another quote' button is clicked, this event listener will toggle the background color
document.getElementById('loadQuote').addEventListener("click", function(){
    document.querySelector('body').classList.toggle('color');
});

//setting a time interval to call printQuote function every 6 seconds
window.setInterval(printQuote, 6000);


