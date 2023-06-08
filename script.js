let cartCheckOut = document.getElementById(`cart-checkout`);
let cartPage = document.getElementById(`cart-page`);
let addItem = document.getElementById(`add-item`);
let cartNumber = document.getElementById(`cart-number`);
let count = 0;

cartCheckOut.addEventListener(`click`, function () {
  cartPage.classList.toggle(`active-cart`);
});

// addItem.addEventListener(`click`, function () {
//   let cartNumber = document.getElementById(`cart-number`);
//   let currentNumber = parseInt(cartNumber.textContent);
//   //   let newNumber = currentNumber + 1;
//   //   currentNumber = newNumber;
//   //   console.log(newNumber);
//   //   console.log(currentNumber);

//   for (let currentNumber = 0; currentNumber >= 0; currentNumber++) {
//     if (currentNumber !== 0) {
//       //   console.log(currentNumber);
//       let currentNumber = parseInt(cartNumber.textContent);
//       currentNumber++;
//     }
//     if (currentNumber === 0) {
//       break;
//     }
//     console.log(currentNumber);
//   }
// });

addItem.addEventListener(`click`, function () {
  count++;
  cartNumber.textContent = count;
  console.log(count);
});
