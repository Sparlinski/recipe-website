const featuredRecipes = [
    /* {
        url: 'images/bacon-wrapped-meatballs.jpg',
        link: 'bacon-wrapped-meatballs.html',
        adjective: 'Baconlicious',
        name: 'BACON WRAPPED MEATBALLS',
        description: "Everything is better wrapped in bacon! This delicious take on meatballs combines the elements of a traditional meatloaf recipe and adds a twist by wrapping each meatball in delicious bacon. It pairs well with the traditional mashed potatoes that meatloaf is known for.",
        alt: 'Bacon Wrapped Meatballs'
    }, */
    {
        url: 'images/lemon butter chicken.jpg',
        link: 'lemon-chicken.html',
        adjective:  'Lemony Fresh',
        name: 'LEMON BUTTER CHICKEN',
        description: "A traditional take on this classic Italian dish, bursting with flavor and citrus, paired with fresh greens and mashed potatoes. A simple yet full-flavored dish.",
        alt: 'Lemon Butter Chicken'
    },
    /* {
        url: 'images/mexican style beef with beans-v2.jpg',
        link: 'mexican-beef-beans.html',
        adjective: 'Fiery',
        name: 'MEXICAN STYLE BEEF WITH BEANS',
        description: "Stews have a warm place in everyone's hearts, they are a perfect complete dish that can be very versatile to one's own tastes and preferences. This take on a stew brings the traditional approach with a Mexican twist. A simple and confident mix of flavor and spices.",
        alt: 'Mexican Style Beef Stew'
    }, */
    /* {
        url: 'images/tika-masala.jpg',
        link: 'tika-masala.html',
        adjective: 'Savory',
        name: 'TIKA-MASALA',
        description: "This dish is packed with flavor. The time it is allowed in the slow cooker is what brings this dish together, the flavors and spices are given the time to mix and mingle to really deliver an enjoyable experience, good things come to those who wait after all.",
        alt: 'Tika-Masala'
    }, */
    /* {
        url: 'images/turkey olive smoked paprika meatballs.jpg',
        link: 'turkey-olive-paprika-meatballs.html',
        adjective: 'Smokey',
        name: 'TURKEY OLIVE SMOKED PAPRIKA MEATBALLS',
        description: "This creative combination of flavors really makes for a unique dish. The smokiness of the paprika combines with the saltiness of the olives to complement the acidity of the fire-roasted tomato sauce. Paired with pasta, you have a fine meal that is sure to win anyone over.",
        alt: 'Turkey Olive Smoked Paprika Meatballs'
    }, */
    {
        url: 'images/chicken-wings-v2.jpg',
        link: 'wings.html',
        adjective: 'Baked',
        name: 'CRISPY BAKED WINGS',
        description: "These wings are crispy, juicy, and full of flavor. Perfectly paired with potato wedges and roasted brussel sprouts in balsamic vinegar with a side of your favorite dipping sauce.",
        alt: 'Crispy Baked Chicken Wings'
    },
    /* {
        url: 'images/shredded-chicken-v2.jpg',
        link: 'shredded-chicken.html',
        adjective: 'Creamy',
        name: 'CREAMY SHREDDED CHICKEN WITH BACON AND SPINACH',
        description: "The combination of cream and bacon adds a richness that compliments the shredded chicken perfectly in this dish, rounded off by delicious fresh spinach to bring a perfect balance to this dish.",
        alt: 'Creamy Shredded Chicken With Bacon and Spinach'
    }, */
    {
        url: 'images/pot roast.jpg',
        link: 'pot-roast.html',
        adjective: 'Hearty',
        name: 'POT ROAST',
        description: "This classic American dish is influenced by a traditional Irish stew. This recipe is intended for a slow cooker dump-and-go approach, but it can also be done stew style in one hour if you don't have a chance during your day to start the dish—a fantastic, full-flavored filling meal with minimal fuss or effort.",
        alt: 'Pot Roast'
    },
    {
        url: 'images/thai-red-curry-v2.jpg',
        link: 'thai-curry.html',
        adjective: 'Fragrant',
        name: 'THAI RED CURRY',
        description: "Thai curries are some of my favorites, bringing with them extra dimensions that differ from their Indian counterparts, and this dish is no different. Full of flavor and heat that is sure to please the senses, made from simple and healthy ingredients.",
        alt: 'Thai Red Curry'
    },
    {
        url: 'images/jumbalaya.jpg',
        link: 'jumbalaya.html',
        adjective: 'Robust',
        name: 'JUMABALAYA',
        description: "This New Orleans-inspired dish is packed full of flavor. The key to this dish is being familiar with the chorizo you use. Chorizo can be salty so it is wise to be cautious in the amount of salt you add. How well your chorizo holds together will also contribute to this dish's profile. I like a chorizo that holds together and adds extra substance providing a notable contrast of flavor in a bite to the chicken and vegetables in the dish.",
        alt: 'Jumbalaya'
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