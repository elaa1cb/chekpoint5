let totalPrice = 10; // Initialize total price with the initial item price

function adjustQuantity(value, itemId) {
    const quantityElement = document.querySelector(`.item-${itemId} .quantity`);
    let quantity = parseInt(quantityElement.textContent);
    quantity += value;
    if (quantity >= 1) {
        quantityElement.textContent = quantity;
        updateTotalPrice(value * 10); // Update the total price
    }
}

function removeItem(itemId) {
    const itemElement = document.querySelector(`.item-${itemId}`);
    const priceElement = itemElement.querySelector(".price");
    const price = parseInt(priceElement.textContent.replace(/\D+/g, ''));
    totalPrice -= price;
    itemElement.remove();
    updateTotalPrice(0); // Update the total price with zero to recalculate
}

function toggleLike(itemId) {
    const likeButton = document.querySelector(`.item-${itemId} .like`);
    likeButton.classList.toggle("liked");
}

function updateTotalPrice(amount) {
    totalPrice += amount;
    document.getElementById("totalPrice").textContent = `$${totalPrice}`;
}
