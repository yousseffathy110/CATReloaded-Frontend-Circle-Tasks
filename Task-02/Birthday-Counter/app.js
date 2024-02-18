const calculateCountdown = () => {
  const birthdayInput = document.getElementById("birthday").value;
  const birthday = new Date(birthdayInput);
  const now = new Date();

  let difference = birthday.getTime() - now.getTime();

  if (difference < 0) {
    alert("Please enter a future date.");
    return;
  }

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((difference % (1000 * 60)) / 1000);

  const countdownElement = document.getElementById("countdown");
  countdownElement.innerHTML =
    "Countdown: " + days + "d " + hours + "h " + minutes + "m " + seconds + "s";

  const inputField = document.getElementById("birthdayInput");
  inputField.style.display = "none";

  const reenterButton = document.getElementById("reenter");
  reenterButton.style.display = "block";

  if (difference > 0) {
    setTimeout(calculateCountdown, 1000);
  }
};

const showBirthdayInput = () => {
  const inputField = document.getElementById("birthdayInput");
  inputField.style.display = "block";

  const reenterButton = document.getElementById("reenter");
  reenterButton.style.display = "none";

  const countdownElement = document.getElementById("countdown");
  countdownElement.innerHTML = "";
};
