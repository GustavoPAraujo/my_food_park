const restaurantMenus = {
  "1": [
    {
      id: "111",
      name: "Classic Cheeseburger",
      description: "A timeless burger with a juicy beef patty, melted cheddar cheese, fresh lettuce, tomato, and our special sauce.",
      price: 10.99,
      image: "@/assets/images/menu/burguermania/classic.png",
      ingredients: ["beef patty", "cheddar cheese", "lettuce", "tomato", "special sauce", "brioche bun"],
      quantity: { weight: "200g" }
    },
    {
      id: "112",
      name: "Bacon BBQ Burger",
      description: "Loaded with crispy bacon, smoky BBQ sauce, and a charbroiled beef patty topped with cheddar cheese.",
      price: 12.99,
      image: "@/assets/images/menu/burguermania/bacon.png",
      ingredients: ["beef patty", "cheddar cheese", "bacon", "BBQ sauce", "lettuce", "tomato", "brioche bun"],
      quantity: { weight: "250g" }
    },
    {
      id: "113",
      name: "Veggie Delight",
      description: "Grilled veggie patty, avocado, sprouts, lettuce, tomato, and a hint of garlic aioli.",
      price: 9.99,
      image: "@/assets/images/menu/burguermania/veggie.png",
      ingredients: ["veggie patty", "avocado", "sprouts", "lettuce", "tomato", "garlic aioli", "whole-grain bun"],
      quantity: { weight: "180g" }
    }
  ],
  "2": [
    {
      id: "121",
      name: "Spaghetti Carbonara",
      description: "Traditional Italian pasta with creamy egg sauce, pancetta, and freshly grated Parmesan.",
      price: 13.99,
      image: "@/assets/images/menu/cantinabella/carbonara.png",
      ingredients: ["spaghetti", "egg yolk", "pancetta", "Parmesan cheese", "black pepper"],
      quantity: { weight: "300g" }
    },
    {
      id: "122",
      name: "Margherita Pizza",
      description: "Classic wood-fired pizza topped with fresh mozzarella, ripe tomatoes, and basil.",
      price: 14.99,
      image: "@/assets/images/menu/cantinabella/margherita.png",
      ingredients: ["pizza dough", "mozzarella", "tomato", "basil", "olive oil"],
      quantity: { diameter: "12 inch" }
    },
    {
      id: "123",
      name: "Lasagna al Forno",
      description: "Layered pasta with rich meat sauce, creamy béchamel, and a golden crust of melted cheese.",
      price: 15.99,
      image: "@/assets/images/menu/cantinabella/lasagna.png",
      ingredients: ["lasagna sheets", "meat sauce", "béchamel sauce", "Parmesan cheese"],
      quantity: { weight: "400g" }
    }
  ],
  "3": [
    {
      id: "131",
      name: "Sushi Platter",
      description: "A variety of fresh nigiri, sashimi, and maki rolls to delight every sushi lover.",
      price: 24.99,
      image: "@/assets/images/menu/sushihouse/platter.png",
      ingredients: ["nigiri", "sashimi", "maki rolls", "wasabi", "pickled ginger"],
      quantity: { units: 12 }
    },
    {
      id: "132",
      name: "Spicy Tuna Roll",
      description: "Fresh tuna with a kick of spicy mayo and sesame seeds, rolled in seasoned rice.",
      price: 8.99,
      image: "@/assets/images/menu/sushihouse/tuna.png",
      ingredients: ["tuna", "spicy mayo", "sesame seeds", "nori", "sushi rice"],
      quantity: { units: 8 }
    },
    {
      id: "133",
      name: "Dragon Roll",
      description: "Eel, avocado, and cucumber, drizzled with sweet eel sauce and garnished with tobiko.",
      price: 12.99,
      image: "@/assets/images/menu/sushihouse/roll.png",
      ingredients: ["eel", "avocado", "cucumber", "eel sauce", "tobiko"],
      quantity: { units: 8 }
    }
  ],
  "4": [
    {
      id: "141",
      name: "Chocolate Lava Cake",
      description: "Rich molten chocolate cake with a warm, gooey center, served with vanilla ice cream.",
      price: 6.99,
      image: "@/assets/images/menu/docesecia/lavacake.png",
      ingredients: ["dark chocolate", "butter", "sugar", "flour", "eggs", "vanilla ice cream"],
      quantity: { weight: "150g" }
    },
    {
      id: "142",
      name: "Red Velvet Cupcake",
      description: "Moist red velvet cupcake topped with a tangy cream cheese frosting.",
      price: 3.99,
      image: "@/assets/images/menu/docesecia/redvelvet.png",
      ingredients: ["red velvet batter", "cream cheese frosting", "sugar", "eggs"],
      quantity: { units: 1 }
    },
    {
      id: "143",
      name: "Tiramisu",
      description: "Traditional Italian dessert with layers of coffee-soaked ladyfingers and creamy mascarpone.",
      price: 7.99,
      image: "@/assets/images/menu/docesecia/tiramisu.png",
      ingredients: ["ladyfingers", "mascarpone cheese", "espresso", "cocoa powder"],
      quantity: { weight: "200g" }
    }
  ],
  "5": [
    {
      id: "151",
      name: "Pepperoni Pizza",
      description: "Classic pepperoni pizza with mozzarella and our signature tomato sauce, baked to perfection.",
      price: 12.99,
      image: "@/assets/images/menu/pizzamania/pepperoni.png",
      ingredients: ["pizza dough", "pepperoni", "mozzarella cheese", "tomato sauce"],
      quantity: { diameter: "12 inch" }
    },
    {
      id: "152",
      name: "Four Cheese Pizza",
      description: "A creamy blend of mozzarella, provolone, Parmesan, and gorgonzola, creating a cheesy masterpiece.",
      price: 13.99,
      image: "@/assets/images/menu/pizzamania/cheese.png",
      ingredients: ["pizza dough", "mozzarella cheese", "provolone cheese", "Parmesan cheese", "gorgonzola"],
      quantity: { diameter: "12 inch" }
    },
    {
      id: "153",
      name: "Vegetarian Pizza",
      description: "Loaded with fresh bell peppers, onions, mushrooms, olives, and tomatoes on a whole-grain crust.",
      price: 11.99,
      image: "@/assets/images/menu/pizzamania/vegetarian.png",
      ingredients: ["whole-grain crust", "bell peppers", "onions", "mushrooms", "olives", "tomatoes"],
      quantity: { diameter: "12 inch" }
    }
  ]
};

export default restaurantMenus;