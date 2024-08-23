const featuredRecipes = [
    {
        url: 'images/bacon-wrapped-meatballs.jpg',
        link: 'homepage.html',
        adjective: 'Baconlicious',
        name: 'BACON WRAPPED MEATBALLS',
        description: "Everything is better wrapped in bacon! This delicious take on meatballs combines the elements of a traditional meatloaf recipe and adds a twist by wrapping each meatball in delicious bacon. It pairs well with the traditional mashed potatoes that meatloaf is known for.",
        alt: 'Bacon Wrapped Meatballs'
    },
    {
        url: 'images/lemon butter chicken.jpg',
        link: 'homepage.html',
        adjective:  'Lemony Fresh',
        name: 'LEMON BUTTER CHICKEN',
        description: "A traditional take on this classic Italian dish, bursting with flavor and citrus, paired with fresh greens and mashed potatoes. A simple yet full-flavored dish.",
        alt: 'Lemon Butter Chicken'
    },
    {
        url: 'images/mexican style beef with beans-v2.jpg',
        link: 'homepage.html',
        adjective: 'Fiery',
        name: 'MEXICAN STYLE BEEF WITH BEANS',
        description: "Stews have a warm place in everyone's hearts, they are a perfect complete dish that can be very versatile to one's own tastes and preferences. This take on a stew brings the traditional approach with a Mexican twist. A simple and confident mix of flavor and spices.",
        alt: 'Mexican Style Beef Stew'
    },
    {
        url: 'images/tika-masala.jpg',
        link: 'homepage.html',
        adjective: 'Savory',
        name: 'TIKA-MASALA',
        description: 'This dish is packed with flavor. The time it is allowed in the slow cooker is what brings this dish together, the flavors and spices are given the time to mix and mingle to really deliver an enjoyable experience, good things come to those who wait after all.',
        alt: 'Tika-Masala'
    },
    {
        url: 'images/turkey olive smoked paprika meatballs.jpg',
        link: 'homepage.html',
        adjective: 'Smokey',
        name: 'TURKEY OLIVE SMOKED PAPRIKA MEATBALLS',
        description: 'This creative combination of flavors really makes for a unique dish. The smokiness of the paprika combines with the saltiness of the olives to complement the acidity of the fire-roasted tomato sauce. Paired with pasta, you have a fine meal that is sure to win anyone over.',
        alt: 'Turkey Olive Smoked Paprika Meatballs'
    },
    {
        url: 'images/chicken-wings-v2.jpg',
        link: 'homepage.html',
        adjective: 'Baked',
        name: 'CRISPY BAKED CHICKEN WINGS',
        description: 'These wings are crispy, juicy, and full of flavor. Perfectly paired with potato wedges and roasted brussel sprouts in balsamic vinegar and a side of your favorite dipping sauce.',
        alt: 'Crispy Baked Chicken Wings'
    },
    {
        url: 'images/shredded-chicken-v2.jpg',
        link: 'homepage.html',
        adjective: 'Creamy',
        name: 'CREAMY SHREDDED CHICKEN WITH BACON AND SPINACH',
        description: 'The combination of cream and bacon adds a richness that compliments the shredded chicken perfectly in this dish, rounded off by delicious fresh spinach to bring a perfect balance to this dish.',
        alt: 'Creamy Shredded Chicken With Bacon and Spinach'
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