const menu = [
  {
    id: 1,
    title: "Sakura Maki",
    price: 89,
    desc: "A classic maki, perfect for the sushi novice. ",
    category: "Maki",
  },
  {
    id: 2,
    title: "Tempura Maki",
    price: 109,
    desc: "A staple on any sushi menu, but with our own signature Oishii orange sauce.",
    category: "Maki",
  },
  {
    id: 3,
    title: "Rainbow Maki",
    price: 129,
    desc: "The classic salmon and cucumber roll mixed with caramelized shiitake and tasty tuna.",
    category: "Maki",
  },
  {
    id: 4,
    title: "California Maki",
    price: 99,
    desc: "A true classic signature maki topped with tobiko roe.",
    category: "Maki",
  },
  {
    id: 5,
    title: "Haru Maki",
    price: 169,
    desc: "A tasty roll with salmon and avocado, topped with sweet honey and mango sauce.",
    category: "Maki",
  },
  {
    id: 6,
    title: "Hotate Maki",
    price: 189,
    desc: "Classic roll with a twist. We've added fresh tobiko roes and coriander to bring this roll to a new level. ",
    category: "Maki",
  },
  {
    id: 7,
    title: "Ebi Ringo",
    price: 179,
    desc: "A tasty surprise of fried scampi with sweet apple and crunchy peanuts. Topped with teriyaki sauce. ",
    category: "Maki",
  },
  {
    id: 8,
    title: "Crispy Kojo",
    price: 189,
    desc: "Tasty vegetarian roll with crispy wonton. Served warm, topped with sakura sauce.",
    category: "Maki",
  },
  {
    id: 9,
    title: "Spicy Tuna",
    price: 129,
    desc: "A tasty roll with a chili mayo center, crispy scallions and fresh cucumber.",
    category: "Maki",
  },

  {
    id: 10,
    title: "Sweet Roll",
    price: 149,
    desc: "Fried scampi and avocado topped with Philadelphia and fresh strawberries.",
    category: "Maki",
  },
];

const sectionCenter = document.querySelector(".section-center");
window.addEventListener("DOMContentLoaded", function () {
  let displayMenu = menu.map(function (item) {
    return `<article class="menu-item">
            <div class="heading">
                <h4 class="titles">${item.title} </h4>
            </div>
           <div class="item-info">
            <p class="item-text">${item.desc}</p>
            <h4 class="price">${item.price}kr</h4>
        </div>
    </article>`;
  });
  displayMenu = displayMenu.join("");
  sectionCenter.innerHTML = displayMenu;
});
