quotelist = [{
        quote: "The way to get started is to quit talking and begin doing.",
        author: "Walt Disney"
    },
    {
        quote: "Life is what happens when you're busy making other plans.",
        author: "John Lennon"
    },
    {
        quote: "The world is a book and those who do not travel read only one page.",
        author: "Saint Augustine"
    },
    {
        quote: "Life is either a daring adventure or nothing at all.",
        author: "Helen Keller"
    },
    {
        quote: "To Travel is to Live",
        author: "Hans Christian Andersen"
    },
    {
        quote: "Only a life lived for others is a life worthwhile.",
        author: "Albert Einstein"
    },
    {
        quote: "The only way to do great work is to love what you do.",
        author: "Steve Jobs"
      },
      {
        quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
        author: "Winston Churchill"
      },
      {
        quote: "The future belongs to those who believe in the beauty of their dreams.",
        author: "Eleanor Roosevelt"
      },
      {
        quote: "The only limit to our realization of tomorrow will be our doubts of today.",
        author: "Franklin D. Roosevelt"
      },
      {
        quote: "In the middle of difficulty lies opportunity.",
        author: "Albert Einstein"
      },
      {
        quote: "The best way to predict the future is to invent it.",
        author: "Alan Kay"
      },
      {
        quote: "Believe you can and you're halfway there.",
        author: "Theodore Roosevelt"
      },
      {
        quote: "It always seems impossible until it is done.",
        author: "Nelson Mandela"
      },
      {
        quote: "The only true wisdom is in knowing you know nothing.",
        author: "Socrates"
      },
      {
        quote: "Don't watch the clock; do what it does. Keep going.",
        author: "Sam Levenson"
      }];


quote = document.getElementById("quote");
author = document.getElementById("author");
last = -1;

newQuote();

function newQuote(){
    var rand = Math.floor(Math.random() * quotelist.length);
    while(rand == last){
        rand = Math.floor(Math.random() * quotelist.length);
    }
    last = rand;
    quote.innerHTML = quotelist[rand].quote;
    author.innerHTML = "--" + quotelist[rand].author;
}