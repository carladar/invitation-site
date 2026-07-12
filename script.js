const screen1 = document.getElementById("screen1");
const screen2 = document.getElementById("screen2");
let attempts = 0;

const yesButton = document.getElementById("yes");

yesButton.onclick = function () {

    screen1.style.display = "none";

    screen2.style.display = "flex";

};

const noButton = document.getElementById("no");

function moveButton() {

    attempts++;

    if (attempts >= 6) {

        noButton.style.display = "none";

        const message = document.getElementById("message");
        message.textContent = "❤️ Отказы не принимаются 🤭❤️";
        message.style.opacity = "1";

        yesButton.style.left = "90px";

        return;
    }

    noButton.style.position = "absolute";

    const x = Math.random() * 300;
    const y = Math.random() * 200;

    noButton.style.left = x + "px";
    noButton.style.top = y + "px";
}

noButton.addEventListener("mouseenter", moveButton); // компьютер
noButton.addEventListener("touchstart", moveButton); // телефон