const featuredRecipes = [
    {
        url: 'images/bacon-wrapped-meatballs-v2.jpg',
        link: 'homepage.html',
        adjective: 'Baconlicious',
        name: 'Bacon Wrapped Meatballs',
        description: 'Everything is better wrapped in bacon! This delicious take on meatballs combines the elements of a traditional meatloaf recipe and adding a twist by wrapping each meatball in delicious bacon. Pairs well with the tradional mashed potatoes that meatloaf is known for.',
        alt: 'Bacon Wrapped Meatballs'
    },
    {
        url: 'images/lemon butter chicken.jpg',
        link: 'homepage.html',
        adjective:  'Lemony Fresh',
        name: 'Lemon Butter Chicken',
        description: 'A traditional take on this classic italian dish, bursting with flavor and citrus, paired with fresh greens and mashed potatoes. A simple yet full flavoured dish',
        alt: 'Lemon Butter Chicken'
    },
    {
        url: 'images/mexican style beef with beans.jpg',
        link: 'homepage.html',
        adjective: 'Hearty',
        name: 'Mexican style beef stew',
        description: 'Stews have a warm place in everyones hearts, they are a perfect complete dish that can be very versatile to ones own tastes and preferences. This take on a stew brings the traditional approach with a mexican twist. A simple and elegant mix of flavor and spices.',
        alt: 'Mexican Style Beef Stew'
    },
    {
        url: 'images/tika-masala.jpg',
        link: 'homepage.html',
        adjective: 'Savory',
        name: 'Tika-Masala',
        description: 'This dish is packed with flavor. The time it is allowed in the slow cooker are what brings this dish together, the flavors and spices are given the time to mix and mingle to really deliver an enjoyable experience, good things come to those who wait afterall.',
        alt: 'Tika-Masala'
    },
    {
        url: 'images/turkey olive smoked paprika meatballs.jpg',
        link: 'homepage.html',
        adjective: 'Smokey',
        name: 'Turkey Olive Smoked Paprika Meatballs',
        description: 'This creative combination of flavors really makes for a unique dish. The smokiness of the paprika combines with the saltiness of the olives to compliment the acididity of the fire roasted tomato sauce. Paired with pasta and you have a fine meal that is sure to win anyone over.',
        alt: 'Turkey Olive Smoked Paprika Meatballs'
    }

];

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    } 
    return array;
};

function displayFeaturedRecipe() {
    const shuffleRecipes = shuffle([...featuredRecipes]);
    const randomRecipes = shuffleRecipes.slice(0, 3);

const featuredLinks = document.querySelectorAll('#featured_recipes .featured_recipes_nav');
const featuredImages = document.querySelectorAll('.featured_image');
const featuredAdj = document.querySelectorAll('.featured_adj');
const featuredName = document.querySelectorAll('.featured_recipe_h');
const featuredDecription = document.querySelectorAll('.featured_description_p');

randomRecipes.forEach((recipe, index) => {
    if (index < featuredImages.length) {
        featuredLinks[index].href = recipe.link;
        featuredImages[index].src = recipe.url;
        featuredImages[index].alt = recipe.alt;
        featuredAdj[index].textContent = recipe.adjective;
        featuredName[index].textContent = recipe.name;
        featuredDecription[index].textContent = recipe.description;
        }
    });
};

window.onload = displayFeaturedRecipe;