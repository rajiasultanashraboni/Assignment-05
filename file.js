// modal and alert function is here

const donationInput = document.getElementById("donation-input");
const donationAmountDisplay = document.getElementById("donation-amount");
const navbarAmountDisplay = document.getElementById("navbar-amount");
const successModal = document.getElementById("success-modal");
const donateButton = document.getElementById("donate-btn");

let initialNavbarAmount = 5500; // Initial amount displayed in navbar

function closeModal() {
  successModal.close();
}

function updateDonationAmount(amount) {
  donationAmountDisplay.textContent = `${amount} BDT`;
}

function updateNavbarAmount(amount) {
  navbarAmountDisplay.textContent = `${amount} BDT`;
}

document.addEventListener("DOMContentLoaded", () => {
  const storedDonationAmount =
    parseFloat(localStorage.getItem("donationAmount")) || 0;
  updateDonationAmount(storedDonationAmount);

  const storedNavbarAmount =
    parseFloat(localStorage.getItem("navbarAmount")) || initialNavbarAmount;
  updateNavbarAmount(storedNavbarAmount);
});

donateButton.addEventListener("click", () => {
  const donationValue = parseFloat(donationInput.value);

  if (!isNaN(donationValue) && donationValue > 0) {
    let currentDonationAmount =
      parseFloat(localStorage.getItem("donationAmount")) || 0;
    let currentNavbarAmount =
      parseFloat(localStorage.getItem("navbarAmount")) || initialNavbarAmount;

    let newTotalDonationAmount = currentDonationAmount + donationValue;

    let newNavbarAmount = currentNavbarAmount - donationValue;

    updateDonationAmount(newTotalDonationAmount);
    updateNavbarAmount(newNavbarAmount);

    localStorage.setItem("donationAmount", newTotalDonationAmount);
    localStorage.setItem("navbarAmount", newNavbarAmount);

    donationInput.value = "";

    successModal.showModal();
  } else {
    alert("Please enter a valid positive donation amount.");
  }
});
