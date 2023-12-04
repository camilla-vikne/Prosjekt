const menu = [
  {
    id: 1,
    title: "Sakura Maki",
    price: 89,
    desc: "A classic maki, perfect for the sushi novice. ",
    category: "maki",
  },
  {
    id: 2,
    title: "Tempura Maki",
    price: 109,
    desc: "A staple on any sushi menu, but with our own signature Oishii orange sauce.",
    category: "maki",
  },
  {
    id: 3,
    title: "Rainbow Maki",
    price: 129,
    desc: "The classic salmon and cucumber roll mixed with caramelized shiitake and tasty tuna.",
    category: "maki",
  },
  {
    id: 4,
    title: "California Maki",
    price: 99,
    desc: "A true classic signature maki topped with tobiko roe.",
    category: "maki",
  },
  {
    id: 5,
    title: "Haru Maki",
    price: 169,
    desc: "A tasty roll with salmon and avocado, topped with sweet honey and mango sauce.",
    category: "maki",
  },
  {
    id: 6,
    title: "Hotate Maki",
    price: 189,
    desc: "Classic roll with a twist. We've added fresh tobiko roes and coriander to bring this roll to a new level. ",
    category: "maki",
  },
  {
    id: 7,
    title: "Ebi Ringo",
    price: 179,
    desc: "A tasty surprise of fried scampi with sweet apple and crunchy peanuts. Topped with teriyaki sauce. ",
    category: "maki",
  },
  {
    id: 8,
    title: "Crispy Kojo",
    price: 189,
    desc: "Tasty vegetarian roll with crispy wonton. Served warm, topped with sakura sauce.",
    category: "maki",
  },
  {
    id: 9,
    title: "Spicy Tuna",
    price: 129,
    desc: "A tasty roll with a chili mayo center, crispy scallions and fresh cucumber.",
    category: "maki",
  },

  {
    id: 10,
    title: "Sweet Roll",
    price: 149,
    desc: "Fried scampi and avocado topped with Philadelphia and fresh strawberries.",
    category: "maki",
  },
  {
    id: 11,
    title: "Classic Nigiri",
    price: 49,
    desc: "Four pieces of hand rolled rice topped with fresh salmon",
    category: "nigiri",
  },
  {
    id: 12,
    title: "Scallop Nigiri",
    price: 59,
    desc: "Four pieces of hand rolled rice topped with scallops",
    category: "nigiri",
  },
  {
    id: 13,
    title: "Shrimp Nigiri",
    price: 49,
    desc: "Four pieces of hand rolled rice topped with boiled shrimp",
    category: "nigiri",
  },

  {
    id: 14,
    title: "Small Combo",
    price: 599,
    desc: "Perfect for two people; this combo contains 2 x Sakura Maki, 1 x California Maki, 1 x Rainbow Maki and 1 x Shrimp Nigiri",
    category: "combos",
  },
  {
    id: 15,
    title: "Family Combo",
    price: 1499,
    desc: "For a family of four, contains 2 x Sweet Roll, 1 x Spicy Tuna, 1 x Crispy Kojo, 3 x Sakura Maki, 1 x Classic Nigiri and 1 x Scallop Nigiri",
    category: "combos",
  },
  {
    id: 16,
    title: "Party Combo",
    price: 2499,
    desc: "Perfect for a party of 8 people, this combo contains 2 x Sakura Maki, 3 x Tempura Maki, 2 x Rainbow Maki, 2 x Haru Maki, 3 x California Maki and 3 x Classic Nigiri",
    category: "combos",
  },
];

const sectionCenter = document.querySelector(".section-center");

const filterBtns = document.querySelectorAll(".filter-btn");
window.addEventListener("DOMContentLoaded", function () {
  displayMenuItems(menu);
});

filterBtns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const category = e.currentTarget.dataset.id;
    const menuCategory = menu.filter(function (menuItem) {
      if (menuItem.category === category) {
        return menuItem;
      }
    });
    if (category === "all") {
      displayMenuItems(menu);
    } else {
      displayMenuItems(menuCategory);
    }
  });
});

function displayMenuItems(menuItems) {
  let displayMenu = menuItems.map(function (item) {
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
}
