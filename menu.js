const menuItems = [
  {
    name: "Sakura Maki",
    price: "89kr",
    description: "A classic maki, perfect for the sushi novice. ",
    //ingredients: ["Salmon", "avocado"],
  },
  {
    name: "Tempura Maki",
    price: "109kr",
    description:
      "A staple on any sushi menu, but with our own signature Oishii orange sauce.",
    //ingredients: ["Fried scampi", "avocado", "cucumber"],
  },
  {
    name: "Rainbow Maki",
    price: "129kr",
    description:
      "The classic salmon and cucumber roll mixed with caramelized shiitake and tasty tuna.",
    //ingredients: ["Salmon", "cucumber", "shiitake mushroom", "tuna"],
  },
  {
    name: "California Maki",
    price: "99kr",
    description: "A true classic signature maki topped with tobiko roe.",
    //ingredients: ["Imitation crab", "cucumber", "cream cheese"],
  },
  {
    name: "Haru Maki",
    price: "169kr",
    description:
      "A tasty roll with salmon and avocado, topped with sweet honey and mango sauce.",
    //ingredients: ["Salmon", "cream cheese", "cucumber", "ikura"],
  },
  {
    name: "Hotate Maki",
    price: "189kr",
    description:
      "Classic roll with a twist. We've added fresh tobiko roes and coriander to bring this roll to a new level. ",
    //ingredients: ["Scallops", "cucumber", "avocado", "yuzu kosho sauce"],
  },
  {
    name: "Ebi Ringo",
    price: "179kr",
    description:
      "A tasty surprise of fried scampi with sweet apple and crunchy peanuts. Topped with teriyaki sauce. ",
    //ingredients: ["Tempura scampi", "cream cheese", "apple", "chili mayo"],
  },
  {
    name: "Crispy Kojo",
    price: "189kr",
    description:
      "Tasty vegetarian roll with crispy wonton. Served warm, topped with sakura sauce.",
    //ingredients: ["Avocado", "shiitake", "bell pepper", "cream cheese"],
  },
  {
    name: "Spicy Tuna",
    price: "129kr",
    description:
      "A tasty roll with a chili mayo center, crispy scallions and fresh cucumber.",
    //ingredients: ["Tuna", "scallion", "cucumber"],
  },
  {
    name: "Sweet Roll",
    price: "149kr",
    description:
      "Fried scampi and avocado topped with Philadelphia and fresh strawberries.",
    //ingredients: ["Tempura scampi", "avocado", "cream cheese", "strawberry"],
  },
];

const menuList = document.getElementById("menu-items");

// populate menu items using loop
menuItems.forEach((item) => {
  const menuItem = document.createElement("li");
  menuItem.textContent = `${item.name}- ${item.price}
  ${item.description}  `;
  menuList.appendChild(menuItem);
});

menu.addEventListener("load", () => {
  menuList.style.display = menuList.style.display === "none" ? "block" : "none";
});
