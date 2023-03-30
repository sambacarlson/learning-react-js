/* Quotes */

/*
Needed information:

- quoteId		// unique for all quotes
- authorName		// name of author
- authorImg		// picture of author. same for all quotes of a particular author
- quoteCategory		// What kind of quote
- quoteTitle		// Title of Quote optional
- quoteText		// Actual quote
- quoteImg		// an image to help remember the quote
- authorLink		// link to get more information about the author
- quoteSource		// link to or name of material from where the quote is gotten optional
- quoteLikes		// how many people like the quote. not available for offline view
- quoteRating		// how many stars based on whatever information 
- moreInfo		// more information about the quote. optional. will show on hover for example.

*/

/* Quotes are presented as array of object (JavaScript) It can also be used as list of dictionaries in Python)*/


/* Template */

/*

{
"quoteId": 1,
"authorName": "author",
"authorImg": "assets/authur.png",
"authorLink": "author.com optional",
"quoteCategory": "Category",
"quoteTitle": "Optional",
"quoteText": "quote text",
"quoteImg": "assets/quote.png",
"quoteSource": "optional ref",
"quoteLikes": 100,
"quoteRating": 4.5,
"moreinfo": "optional"
}

*/





/* =========== */

const memesData = [
  'assets/BensonIdahosa.jpeg',
  'assets/DavidOyedepo.jpeg',
  'assets/JoyceMeyer.jpeg',
  'assets/BennyHinn.jpeg',
  'assets/KathrynKuhlman.jpg'
]
export default memesData

const quotesData = [

  {
  "quoteId": 1,
  "authorName": "Joel Osteen",
  "authorImg": "assets/KathrynKuhlman.jpg",
  "authorLink": "",
  "quoteCategory": "Faith",
  "quoteTitle": "",
  "quoteText": "If it's impossible for us to please God without faith, we ought to understand what faith is.",
  "quoteImg": "assets/cross.png",
  "quoteSource": "",
  "quoteLikes": 0,
  "quoteRating": 4.5,
  "moreinfo": "Pastor Joel Osteen is one of the most popular, and most influential preachers today"
  },
  
  {
  "quoteId": 2,
  "authorName": "Watchman Nee",
  "authorImg": "assets/BennyHInn.jpeg",
  "authorLink": "",
  "quoteCategory": "Inspirational",
  "quoteTitle": "",
  "quoteText": "A Christian life is an unending engagement on the battlefield",
  "quoteImg": "assets/battlefield.png",
  "quoteSource": "",
  "quoteLikes": 50,
  "quoteRating": 4.6,
  "moreinfo": "Watchman nee has no doubt been a great tool for the advancement of the new era of Christian life and teachings"
  },
  
  {
  "quoteId": 3,
  "authorName": "Rick Warren",
  "authorImg": "assets/BensonIdahosa.jpeg",
  "authorLink": "https://pastorrick.com/",
  "quoteCategory": "Ministry",
  "quoteTitle": "",
  "quoteText": "A non-serving Christian is a contradiction in terms",
  "quoteImg": "assets/servant.png",
  "quoteSource": "",
  "quoteLikes": 400,
  "quoteRating": 4.4,
  "moreinfo": "Author of 'The Purpose Driven Life' and 'The Purpose Driven Church'."
  },
  
  {
  "quoteId": 4,
  "authorName": "Charles Finney",
  "authorImg": "assets/ChrisOyakilhome.jpeg",
  "authorLink": "",
  "quoteCategory": "Wisdom",
  "quoteTitle": "",
  "quoteText": "pureness",
  "quoteImg": "assets/garden.png",
  "quoteSource": "",
  "quoteLikes": 140,
  "quoteRating": 4.8,
  "moreinfo": ""
  },
  
  {
  "quoteId": 5,
  "authorName": "John Wesley",
  "authorImg": "assets/DavidOyedepo.jpeg",
  "authorLink": "",
  "quoteCategory": "Relationship",
  "quoteTitle": "Love and Knowledge",
  "quoteText": "An ounce of love is worth a pound of knowledge",
  "quoteImg": "assets/beam_balance.png",
  "quoteSource": "",
  "quoteLikes": 470,
  "quoteRating": 5.0,
  "moreinfo": "John Wesley was so profound and so instrumental, his writings have ensured accurate theology for many decades."
  },
  
  {
  "quoteId": 6,
  "authorName": "Joyce Meyer",
  "authorImg": "assets/JoyceMeyer.jpeg",
  "authorLink": "https://joycemeyer.org",
  "quoteCategory": "God",
  "quoteTitle": "",
  "quoteText": "God is not surprised by your inabilities, your imperfections, or your faults. He has always known everything about you that yoy are just now finding out, and he chose you on purpose for himself.",
  "quoteImg": "assets/sunset.png",
  "quoteSource": "",
  "quoteLikes": 1000,
  "quoteRating": 4.8,
  "moreinfo": "Peacher for many decades. she has been and continues to be a great blessing to all peoples. in every beautiful way."
  }
  
  ]
