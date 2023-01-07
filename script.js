// HTML Form
const submitButton = document.getElementById("submit-button");
submitButton.addEventListener("click", function () {
  const nameInput = document.getElementById("full-name");
  const emailInput = document.getElementById("email-address");
  const addressInput = document.getElementById("full-address");
  const nameValue = nameInput.value;
  const emailValue = emailInput.value;
  const addressValue = addressInput.value;
  const errorText = document.getElementById("error-text");
  const formData = document.getElementById("form-data");
  if (nameValue && emailValue && addressValue) {
    formData.innerHTML = `<p>Form Submitted By: ${nameValue}, ${emailValue}, ${addressValue}</p>`;
    errorText.innerHTML = "";
    nameInput.value = "";
    emailInput.value = "";
    addressInput.value = "";
  } else {
    errorText.innerHTML =
      '<p class="text-warning";>Please fill all input box</p>';
    formData.innerHTML = "";
  }
});

// Budget Calculator
const calculateButton = document.getElementById("calculate-button");
calculateButton.addEventListener("click", function () {
  const income = document.getElementById("income").innerText;
  const rentInput = document.getElementById("rent");
  const foodInput = document.getElementById("food");
  const utilitiesInput = document.getElementById("utilities");
  const insuranceInput = document.getElementById("insurance");
  const expensesValue = document.getElementById("expenses");
  const balanceValue = document.getElementById("balance");

  const incomeValue = parseFloat(income);
  const rentValue = parseFloat(rentInput.value);
  const foodValue = parseFloat(foodInput.value);
  const utilitiesValue = parseFloat(utilitiesInput.value);
  const insuranceValue = parseFloat(insuranceInput.value);

  console.log(
    incomeValue,
    rentValue,
    foodValue,
    utilitiesValue,
    insuranceValue
  );
  const totalCost = rentValue + foodValue + utilitiesValue + insuranceValue;
  const balanceId = incomeValue - totalCost;
  expensesValue.innerText = totalCost;
  balanceValue.innerHTML = balanceId;
  console.log(totalCost);
});
