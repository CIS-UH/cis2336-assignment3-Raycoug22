const menuItems = [
    { name: 'ButterMilk Pancakes', description: '4 Fluffy pancakes served with maple syrup and butter.', price: '$5.99', image: '../Images/Menu photo/Buttermilk pancakes.jpg', category: 'Breakfast' },
    { name: 'Eggs platter', description: '2 freshley cooked eggs served with 2 strips of bacon, veggies, two slices of toast and coffee', price: '$7.99', image: '../Images/Menu photo/Egg platter.jpg', category: 'Breakfast' },
    { name: 'French Toast', description: 'Slices of bread soaked in eggs and milk, then fried until golden brown.', price: '$6.99', image: '../Images/Menu photo/French toast.jpg', category: 'Breakfast' },
    { name: 'BlueBerry Pancakes', description: '4 fresh cooked pancakes topped with fresh blueberries.', price: '$7.99',image: '../Images/Menu photo/Blueberry Pancakes.jpg', category: 'Breakfast'},
    { name: 'Pancake combo', description: 'pancake stack of 2, srambled eggs, and 2 sausages', price: '$7', image: '../Images/Menu photo/Pancake plate.jpg', category: 'Breakfast'},
    { name: 'Breakfast Plate', description: '2 sausages, 3 strips of bacon third meat of choice, 1 scrambled egg, 2 slices of toast, and coffee.', price: '$6.99',image: '../Images/Menu photo/Breakfest plate with coffee.jpg', category: 'Breakfast'},
    { name: 'Breakfast platter delxue', description: '3 sausages, 5 strips of bacon, third meat of choice(bacon, sausege, ham), 1 egg. 3 slices of toast and coffee.', price: '$11.99', image: '../Images/Menu photo/Breakfest plate delxue with Coffee.jpg', category: 'Breakfast'},
    { name: 'Two breakfast sandwitchis', description: 'American cheese, sausage and a fried egg topped on a pancake bun', price: '$7', image: '../Images/Menu photo/Breakfest sandwitches.jpg', category: 'Breakfast'},
    { name: 'Breakfast Buritto', description: 'Scrambled egg, bacon, and veggies all wrapped in a warm toasted torilla', price: '$5', image: '../Images/Menu photo/Breakfast Burrito.jpg', category: 'Breakfast'},
    { name: 'Baked Potato', description: 'fresh baked potao filled with sour cream, chives, cheese, and bacon', price: '$5.99', image: '../Images/Menu photo/Baked-potato.jpg', category: "Lunch & Dinner"},
    { name: 'Burger and Fries', description: 'a Juicy beef patty topped with lettece, onion, cheese, and tomato on a seasme seed bun served with fries', price: '$8.99', image: '../Images/Menu photo/Burger and fries.jpg', category: "Lunch and Dinner"},
    { name: "Ray's Classic Burger", description: 'a juicy beef patty topped with lettece, onion, cheese, and tomato on a seasme seed bun', price: '$6.99', image: "../Images/Menu photo/Burger.jpg", category: "Lunch & Dinner" },
    { name: "Chicken Burrito", description: 'Fresh cooked chicked mixed with veggies wrapped in a soft torilla bread', price: '$3.99', image: '../Images/Menu photo/Burrito.jpg', category: 'Lunch and Dinner'},
    { name: "Cheese Enchilades", description: 'Fresh baked cheese filled tortillas topped with parsley and served with rice and beans', price: "$6.99", image: '../Images/Menu photo/cheese enchiladas.jpg', category: "Lunch & Dinner"},
    { name: "Cheese Pizza", description: "Fresh baked pizza with gooey cheese", price: '$11.99', image: '../Images/Menu photo/Cheese Pizza.jpg', category: 'Lunch and Dinner'},
    { name: "Chicken wings", description: 'Fresh bread crumb and flower coded 16 chicken wings served with hot sause', image: "../Images/Menu photo/Chicken wings.jpg", price: '$14.99', category: 'Lunch and Dinner'},
    { name: 'Fried Chicken', description: "6 Fresh flower coded chicken fried in hot oil served with ketchup", price: '$9.99', image: '../Images/Menu photo/Fried Chicken.jpg', category:"Lunch & Dinner"},
    { name: 'Lasagna', description: 'fresh baked lasagna pasta layered with beef, cheese, tomato sauce', price: '$13.99', image: '../Images/Menu photo/Lasagna.jpg', category: 'Lunch & Dinner'},
    { name: 'Mac and Cheese', description: 'fresh cooked pasta mixed with creamy cheese', price: '$5.99', image: "../Images/Menu photo/mac and cheese.jpg", category: "Lunch & Dinner"},
    { name: 'Pepperoni Pizza', description: 'fresh cooked pizza topped with fresh pepperoni', price: '$12.99', image: "../Images/Menu photo/Pepperoni Pizza.jpg", category: 'Lunch & Dinner'},
    { name: 'Spaghetti and meat sauce', description: 'fresh cooked spaghetti mixed with homemade meat sause', price: "$10.99",image: '../Images/Menu photo/spaghetti.jpg', category: 'Lunch & Dinner'}, 
    { name: 'Coke', price: "$3.99", image: '../Images/Menu photo/Coke.jpg', category: 'Drinks'},
    { name: 'Sprite', price: "$4.99", image: '../Images/Menu photo/Sprite.jpg', category: 'Drinks'},
    { name: 'Diet Coke', price: "$3.99", image: '../Images/Menu photo/Diet Coke.jpg', category: 'Drinks'},
    { name: 'Coke Zero', price: "$3.99", image: '../Images/Menu photo/Coke Zero.jpg', category: 'Drinks'},
    { name: 'Sprite Zero Sugar', price: "$3.99", image: '../Images/Menu photo/Sprite Zero.jpg', category: 'Drinks'},
    { name: 'Fanta', price: "$3.99", image: '../Images/Menu photo/Fanta.jpg', category: 'Drinks'},
    { name: 'Vanilla Milkshake', description: 'Whole milk, sugar, ice cream, blended together and topped with rainbow sprinkles, whipp cream, and cherry', price: "$7.99", image: '../Images/Menu photo/Vanilla.jpg', category: 'Drinks'},
    { name: 'Oreo Milkshake', description: "Whole milk, sugar, ice cream, oreos blended togther and topped with oreo crumbs", price: '$9.99', image: '../Images/Menu photo/Oreo.jpg', category: 'Drinks'},
    { name: 'Apple Juice', price: '$2.99', image: '../Images/Menu photo/apple.jpg', category: 'Drinks'},
    { name: 'Orange Juice', price: '$2.99', image: '../Images/Menu photo/orange.jpg', category: 'Drinks'},
    { name: 'Water', price: '$1.99', image: '../Images/Menu photo/water.jpg', category: 'Drinks'},
];  // Item name, price, descrption, image, and category

const cart = [];
document.addEventListener('DOMContentLoaded', function() {
    const menuContainer = document.getElementById('menu-items');
    const cartItemCountSpan = document.getElementById('cart-item-count');
    const cartItemsList = document.getElementById('cart-items-list');
    let itemCount = 0; // Counter to keep track of the number of items added
    let breakfastCount = 0; // Counter to keep track of breakfast items
    let headingAdded = false; // Flag to check if heading is added

    menuItems.forEach(item => {
        // Create a div for the menu item
        const menuItem = document.createElement('div');
        menuItem.classList.add('menu-item');

        // Create an image element
        const image = document.createElement('img');
        image.src = item.image;
        menuItem.appendChild(image);

        // Create a heading for the item name
        const name = document.createElement('h3');
        name.textContent = item.name;
        menuItem.appendChild(name);

        // Create a paragraph for the item description
        const description = document.createElement('p');
        description.textContent = item.description;
        menuItem.appendChild(description);

        // Create a paragraph for the item price
        const price = document.createElement('p');
        price.textContent = item.price;
        menuItem.appendChild(price);

        // Create a button to add the item to the cart
        const addButton = document.createElement('button');
        addButton.textContent = 'Add to Cart';
        addButton.addEventListener('click', () => addToCart(item));
        menuItem.appendChild(addButton);

        // Append the menu item to the menu container
        menuContainer.appendChild(menuItem);

       
    });

    function addToCart(item) {
        // Create a cart item object
        const cartItem = {
            name: item.name,
            description: item.description,
            price: item.price
        };

        

        // Add the cart item to the cart array
        cart.push(cartItem);

        // Optionally, you can display a message indicating the item has been added to the cart
        alert(`Added ${item.name} for ${item.price} to cart!`);

        // Optionally, you can update the UI to reflect the addition of the item to the cart
        // For example, you could display the cart contents somewhere on the webpage
        updateCartUI();
    }

    function updateCartUI() {
        cartItemCountSpan.textContent = cart.length;
        cartItemsList.innerHTML = '';

        cart.forEach(item => {
            const cartItemElement = document.createElement('li');
            cartItemElement.textContent = `${item.name} - ${item.price}`;
            cartItemsList.appendChild(cartItemElement);
        });
    }

    function updateCartCount(){
        const cartItemCount = document.getElementById('cart-item-count');
        if (cartItemCount) {
            cartItemCount.textContent = cart.length;
        }
    }
});