document.addEventListener("DOMContentLoaded", function () {
  let clock = document.createElement("div");
  clock.style =
    "position:fixed;right:12px;bottom:12px;background:#201c19;color:#fff;padding:7px 10px;border-radius:7px;font-size:12px;z-index:9999";
  document.body.appendChild(clock);
  function update() {
    clock.textContent = new Date().toLocaleString();
  }
  update();
  setInterval(update, 1000);
});
function subscribeNewsletter(e) {
  e.preventDefault();
  alert("Thank you for subscribing to Savoria newsletter!");
}
function orderMessage(item) {
  alert(item + " has been added to your order.");
}
function submitReservation(e) {
  e.preventDefault();
  let n = document.getElementById("rName").value;
  alert(
    "Reservation Confirmed!\\n\\nThank you, " +
      n +
      "!\\nYour table reservation has been submitted.",
  );
}
function signupMessage(e) {
  e.preventDefault();
  alert("Account created successfully! You can now log in.");
  window.location.href = "login.html";
}
function loginMessage(e) {
  e.preventDefault();
  alert("Login successful! Welcome to Savoria.");
}
