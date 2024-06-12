const foods = [
    {
        name: "Flatburger",
        image: "images/burgers/flatburger.jpeg",
        description: "Our signature Flatburger which is a super delicious cheeseburger that'll leave you wanting another Flatburger! It's too good to be true!",
        healthy: false
    },
    {
        name: "Maple Bacon Burger",
        image: "images/burgers/maple-bacon-burger.jpeg",
        description: "A great option for a breakfast burger or a great option for brunch if you're hungry enough to eat 2 of these burgers!",
        healthy: false
    },
    {
        name: "Mushroom Burger",
        image: "images/burgers/mushroom-burger.webp",
        description: "A mushroom burger with our exclusive Flatburger melted cheese!",
        healthy: false
    },
    {
        name: "Avocado Bun Burger",
        image: "images/burgers/avocado-bun-burger.jpeg",
        description: "A healthier take on our signature Flatburger but with avocado buns!",
        healthy: true
    },
    {
        name: "Ramen Burger",
        image: "images/burgers/ramen-burger.jpeg",
        description: "If you love ramen and burgers, what are you waiting for? Order our exclusive ramen burger now!",
        healthy: false
    }
];

function addFoodImageToMenu(food){
    const foodImage = document.createElement('img');
    foodImage.src = food.image;
    
    const foodMenu = document.getElementById('food-menu');
    foodMenu.appendChild(foodImage);

    foodImage.addEventListener('click', () => {
        displayFoodDetails(food);
    })
}

function displayFoodDetails(food){
    const detailImageElement = document.querySelector('.detail-image');
    detailImageElement.src = food.image;
    const nameElement = document.querySelector('.name');
    nameElement.textContent = food.name;
    const descriptionDisplayElement = document.getElementById('description-display');
    descriptionDisplayElement.textContent = food.description;
}

function updateFoodMenu(event){
    const foodMenu = document.getElementById('food-menu');
    foodMenu.textContent = '';
    
    if(event.target.value === 'all'){
        foods.forEach(addFoodImageToMenu);
    }
    else if(event.target.value === 'healthy'){
        foods.forEach(addHealthyFoodToMenu);
    }
}

function addHealthyFoodToMenu(food){
    if(food.healthy){
        addFoodImageToMenu(food);
    }
}

displayFoodDetails(foods[0]);

foods.forEach(addFoodImageToMenu);

const foodSelect = document.getElementById('food-select');
foodSelect.addEventListener('change', updateFoodMenu);

function handleSubmit(event){
    // Write your solution code for Task # 2 here!
}

// Write your solution code for Task # 1 here!