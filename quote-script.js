const quotes = [
    "Laughter is brightest in the place where the food is. - Irish Proverb",
    "One cannot think well, love well, sleep well, if one has not dined well. - Virginia Woolf",
    "Let food be thy medicine and medicine be thy food. - Hippocrates",
    "The only way to get rid of a temptation is to yield to it. - Oscar Wilde",
    "Food is our common ground, a universal experience. - James Beard",
    "Life is uncertain. Eat dessert first. - Ernestine Ulmer",
    "Tell me what you eat, and I will tell you what you are. - Jean Anthelme Brillat-Savarin",
    "First we eat, then we do everything else. - M.F.K. Fisher",
    "Cooking is like love. It should be entered into with abandon or not at all. - Harriet Van Horne",
    "Food, in the end, in our own tradition, is something holy. It's not about nutrients and calories. It's about sharing. It's about honesty. It's about identity. - Louise Fresco",
    "If you really want to make a friend, go to someone's house and eat with him... the people who give you their food give you their heart. - Cesar Chavez",
    "Cooking is at once child's play and adult joy. And cooking done with care is an act of love. - Craig Claiborne",
    "One cannot think well, love well, sleep well if one has not dined well. - M.F.K. Fisher",
    "Food is art, and food is love. And we should show love and appreciation for those who cook it by eating it with relish. - Mark Bittman",
    "Food should be fun. - Thomas Keller",
    "We all eat, and it would be a sad waste of opportunity to eat badly. - Anna Thomas",
    "Laughter is brightest in the place where the food is. - Irish Proverb",
    "Food is symbolic of love when words are inadequate. - Alan D. Wolfelt",
    "There is no love sincerer than the love of food. - George Bernard Shaw",
    "The secret of success in life is to eat what you like and let the food fight it out inside. - Mark Twain",
    "Food is not rational. Food is culture, habit, craving, and identity. - Jonathan Safran Foer",
    "Food is memories. - José Andrés",
    "Came from a plant, eat it; was made in a plant, don't. - Michael Pollan",
    "It is health that is real wealth and not pieces of gold and silver. Mahatma Gandhi",
    "If you keep good food in your fridge, you will eat good food. - Errick McAdams",
    "Sorry, there’s no magic bullet. You gotta eat healthy and live healthy to be healthy and look healthy. End of story. - Morgan Spurlock",
    "To keep the body in good health is a duty, otherwise we shall not be able to keep our mind strong and clear. - Buddha",
    "Your diet is a bank account. Good food choices are good investments. - Bethenny Frankel",
    "Proper nutrition is the difference between feeling exhausted and getting the most out of a workout. - Summer Sanders",
    "Eating healthy food fills your body with energy and nutrients. Imagine your cells smiling back at you and saying, Thank you! - Karen Salmansohn",
];

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
};

shuffleArray(quotes);

const quoteElements = document.querySelectorAll('.quote');

quoteElements.forEach((element, index) => {
    if (index < quotes.length) {
        element.textContent = quotes[index];
    }
});

console.log('This is firing');
console.log(getRandomQuote());