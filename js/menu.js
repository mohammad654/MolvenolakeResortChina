// Select all the necessary elements
const prices = document.querySelectorAll('.price');
const quantityInputs = document.querySelectorAll('.quantity-input');
const decreaseBtns = document.querySelectorAll('.decrease-btn');
const increaseBtns = document.querySelectorAll('.increase-btn');
const total = document.querySelector('.total-price');
const quantityInfo = document.getElementById('quantity-information'); // Select the element to display the information

let totalPrice = 0;

// Function to update the total price and quantity information
function updateTotalPrice() {
  totalPrice = 0;
  for (let i = 0; i < prices.length; i++) {
    totalPrice += parseInt(prices[i].textContent.replace('$', '')) * parseInt(quantityInputs[i].value);
  }
  total.textContent = '$' + totalPrice;

  // Update quantity information
  let info = '';
  for (let i = 0; i < quantityInputs.length; i++) {
    if (quantityInputs[i].value != 0) {
      info += `Quantity input at index ` + (i + 1) + ` has value ${quantityInputs[i].value}.<br>`;
    }
  }
  quantityInfo.innerHTML = info;
}

// Add event listeners to the buttons and inputs
for (let i = 0; i < decreaseBtns.length; i++) {
  decreaseBtns[i].addEventListener('click', function () {
    if (quantityInputs[i].value > 0) {
      quantityInputs[i].value--;
      updateTotalPrice();
    }
  });
}

for (let i = 0; i < increaseBtns.length; i++) {
  increaseBtns[i].addEventListener('click', function () {
    quantityInputs[i].value++;
    updateTotalPrice();
  });
}

for (let i = 0; i < quantityInputs.length; i++) {
  quantityInputs[i].addEventListener('input', function () {
    if (quantityInputs[i].value < 0) {
      quantityInputs[i].value = 0;
    }
    updateTotalPrice();
  });
}
