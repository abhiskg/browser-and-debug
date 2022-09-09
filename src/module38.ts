const getInputValue = (id: string) => {
  const inputField = document.querySelector(id) as HTMLInputElement;
  const inputValue = inputField.value;
  inputField.value = "";
  return inputValue;
};

const getDataFromLocalStorage = () => {
  const cartData = localStorage.getItem("cart");

  if (!cartData) {
    return {};
  }
  const cart = JSON.parse(cartData);
  return cart;
};

const handleButton = () => {
  const name = getInputValue("#name-field");
  const quantity = getInputValue("#quantity-field");
  if (name && quantity) {
    saveDataToLocalStorage(name, quantity);
  }
};

const saveDataToLocalStorage = (name: string, quantity: string) => {
  console.log(name, quantity);
  const cart = getDataFromLocalStorage();
  //   Add product to the object as property
  cart[name] = quantity;
  localStorage.setItem("cart", JSON.stringify(cart));
  displayCartProduct();
};

const displayCartProduct = () => {
  const productContainer = document.querySelector(
    "#product-container"
  ) as HTMLUListElement;
  productContainer.textContent = "";
  const cart = getDataFromLocalStorage();
  console.log(cart);
  for (const product in cart) {
    const quantity = cart[product];
    const li = document.createElement("li");
    li.innerText = `${product}: ${quantity}`;
    productContainer.append(li);
  }
};

displayCartProduct();
