// Gift Section: Reveal video on gift click
const giftBox = document.getElementById("giftBox");
const videoContainer = document.getElementById("videoContainer");

// Journey Section: Animate cards on load with stagger
const journeyCards = document.querySelectorAll(".journey-card");
journeyCards.forEach((card, i) => {
  setTimeout(() => {
    card.style.opacity = "1";
    card.style.transform = "translateY(0)";
  }, i * 200);
});

const notes = [
  { title: "Your Smile 😊", text: "Lights up my darkest days." },
  { title: "Your Voice 🎶", text: "Feels like my favorite song." },
  { title: "Your Heart ❤️", text: "So kind, it melts mine." },
  { title: "Our Moments 💫", text: "Every memory with you is magic." },
  { title: "Your Eyes 👀", text: "They speak louder than words." },
  { title: "Your Laugh 😂", text: "It's my favorite sound." },
  { title: "You're My Peace ☁️", text: "In this loud, busy world." },
  { title: "You're My Home 🏡", text: "Wherever we are." }
];

const container = document.getElementById("cardContainer");

notes.forEach((note, i) => {
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `<h3>${note.title}</h3><p>${note.text}</p>`;
  container.appendChild(card);

  setTimeout(() => {
    card.classList.add("visible");
  }, i * 200); // Stagger animation
});


// Locked Gift Section: Password unlock
const lockedGiftImg = document.getElementById("lockedGiftImg");
const giftContainer = document.getElementById("giftContainer");
const passwordBox = document.getElementById("passwordPrompt");
const secretVideo = document.getElementById("secretVideo");
const wrongText = document.getElementById("wrongPassword");
const unlockBtn = document.getElementById("unlockBtn");

lockedGiftImg.addEventListener("click", () => {
  giftContainer.classList.add("hidden");
  passwordBox.classList.remove("hidden");
});

function checkPassword() {
  const input = document.getElementById("giftPassword").value.trim();
  if (input === "Morphy") {
    passwordBox.classList.add("hidden");
    wrongText.classList.add("hidden");
    secretVideo.classList.remove("hidden");
  } else {
    wrongText.classList.remove("hidden");
  }
}
unlockBtn.addEventListener("click", checkPassword);

// Optional: Press Enter key in password input triggers checkPassword
document.getElementById("giftPassword").addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    checkPassword();
  }
});
