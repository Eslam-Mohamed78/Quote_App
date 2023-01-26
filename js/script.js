function getNewQuote() {
  var quotes = {
    "― Oscar Wilde": "Be yourself; everyone else is already taken.",
    "― Albert Einstein":
      "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
    "― Frank Zappa": "So many books, so little time.",
    "― Marcus Tullius Cicero":
      "A room without books is like a body without a soul.",
    "― Bernard M. Baruch":
      "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.",
    "― Dr. Seuss":
      "You know you're in love when you can't fall asleep because reality is finally better than your dreams.",
    "― Mae West": "You only live once, but if you do it right, once is enough.",
    "― Mahatma Gandhi": "Be the change that you wish to see in the world.",
    "― Robert Frost":
      "In three words I can sum up everything I've learned about life: it goes on.",
    "― Albert Camus":
      "Don’t walk in front of me… I may not follow Don’t walk behind me… I may not lead Walk beside me… just be my friend",
  };

  var authors = Object.keys(quotes);
  console.log(authors);

  var randomAuthor = authors[Math.floor(Math.random() * authors.length)];
  console.log(randomAuthor);

  var currRandomAuthor = randomAuthor;
  console.log(currRandomAuthor);

  var quoteElement = quotes[currRandomAuthor];
  console.log(quoteElement);

  document.getElementById("quote").innerHTML = quoteElement;
  document.getElementById("author").innerHTML = currRandomAuthor;
}

getNewQuote();
