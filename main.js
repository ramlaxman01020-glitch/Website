// Countdown Timer for Ganesh Chaturthi 2025 (Aug 27, 2025)
const festivalDate = new Date("August 27, 2025 00:00:00").getTime();

const timer = document.getElementById("timer");
setInterval(() => {
  let now = new Date().getTime();
  let distance = festivalDate - now;

  if (distance < 0) {
    timer.innerHTML = "🎉 Happy Ganesh Chaturthi 🎉";
    return;
  }

  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  timer.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}, 1000);

// Play Aarti
function playMusic() {
  document.getElementById("aarti").play();
}
