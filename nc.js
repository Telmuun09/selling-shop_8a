const products = [
  {
    name: "475 Valpoint",
    price:5,
    description: "Valorant",
    type: "point",
    image:
      "https://static.wikia.nocookie.net/valorant/images/9/9d/Valorant_Points.png/revision/latest?cb=20200408014952",
  },
  {
    name: "1000 Valpoint",
    price: 10,
    description: "Valorant",
    type: "point",
    image:
      "https://static.wikia.nocookie.net/valorant/images/9/9d/Valorant_Points.png/revision/latest?cb=20200408014952ps://thumbs.dreamstime.com/b/colorful-candy-background-8939634.jpg",
  },
  {
    name: "2050 Valpoint",
    price: 20,
    description: "Valorant",
    type: "point",
    image:
      "https://static.wikia.nocookie.net/valorant/images/9/9d/Valorant_Points.png/revision/latest?cb=20200408014952",
  },
  {
    name: "3675 Valpoint",
    price: 35,
    description: "Valorant",
    type: "point",
    image:
      "https://static.wikia.nocookie.net/valorant/images/9/9d/Valorant_Points.png/revision/latest?cb=20200408014952",
  },
  {
    name: "5350 Valpoint",
    price: 50,
    description: "Valorant",
    type: "point",
    image:
      "https://static.wikia.nocookie.net/valorant/images/9/9d/Valorant_Points.png/revision/latest?cb=20200408014952",
  },
  {
      name: "11000 Valpoint",
      price: 100,
      description: "Valorant",
      type: "point",
      image:
        "https://static.wikia.nocookie.net/valorant/images/9/9d/Valorant_Points.png/revision/latest?cb=20200408014952",
    },
];

function PrintProducts() {
  const productsContainer = document.getElementById("products");
  let newDiv = "";

  for (let i = 0; i < products.length; i++) {
    const product = products[i];

    console.log(`${product.name} - ${product.price}`);

    const div = document.createElement("div");
    div.classList.add("product");
    div.innerHTML = `
      <img class='productImage' src="${product.image}"
      <h3 class="title">${product.name}</h3>
      <p>${product.description}</p>
      <p id="price">${product.price}</p>
      <button onclick="AddItem('${product.name}')">add</button>
      <button onclick="MinusItem('${product.name}')">minus</button>
    `;

    newDiv += div.outerHTML;
  }

  productsContainer.innerHTML = newDiv;
}

window.onload = PrintProducts;

const userbasket = [];

function AddItem(itemName) {
  const itemIndex = userbasket.findIndex((item) => item.name === itemName);

  if (itemIndex !== -1) {
    userbasket[itemIndex].quantity += 1;
  } else {
    userbasket.push({ name: itemName, quantity: 1 });
  }

  Basket();
}

function MinusItem(itemName) {
  const itemIndex = userbasket.findIndex((item) => item.name === itemName);

  if (itemIndex !== -1) {
    userbasket[itemIndex].quantity -= 1;

    if (userbasket[itemIndex].quantity === 0) {
      userbasket.splice(itemIndex, 1);
    }
  }

  Basket();
}

function Purchase() {
  let total = 0;
  for (let i = 0; i < userbasket.length; i++) {
    const { name, quantity } = userbasket[i];
    const product = products.find((p) => p.name === name);
    if (product) {
      total += product.price * quantity;
    }
  }

  document.getElementById("total").innerHTML = total + "€";
  Clear();
}

function Clear() {
  userbasket = [];
}

function Basket() {
  const basketDiv = document.getElementById("basket");
  const basketHtml = userbasket
    .map(
      ({ name, quantity }) => `
    <h1>${name} - ${quantity}</h1>
  `
    )
    .join("");
  basketDiv.innerHTML = basketHtml;
}