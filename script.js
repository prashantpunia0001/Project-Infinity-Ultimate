document.addEventListener("DOMContentLoaded", () => {

const startBtn = document.getElementById("startBtn");
const hearts = document.querySelector(".hearts");
const loading = document.getElementById("loading-screen");

// Floating Hearts
function createHeart(){

    const heart = document.createElement("div");

    heart.innerHTML = "💖";

    heart.style.position = "absolute";
    heart.style.left = Math.random()*100 + "vw";
    heart.style.bottom = "-40px";
    heart.style.fontSize = (20 + Math.random()*25) + "px";
    heart.style.opacity = Math.random();

    heart.style.transition = "transform 6s linear, opacity 6s linear";

    hearts.appendChild(heart);

    setTimeout(()=>{
        heart.style.transform = "translateY(-110vh)";
        heart.style.opacity = "0";
    },100);

    setTimeout(()=>{
        heart.remove();
    },6500);

}

setInterval(createHeart,700);

// Start Button

startBtn.addEventListener("click",()=>{

    loading.style.transition="1s";

    loading.style.transform="scale(.9)";
    loading.style.opacity="0";

setTimeout(() => {
    loading.style.display = "none";
    document.getElementById("main-app").style.display = "block";
}, 1000);    

});

});
function showMemory(number) {
    const messages = {
        1: "Some moments are simply unforgettable ❤️",
        2: "A beautiful memory that will always stay special 💕",
        3: "This is just the beginning of our forever ✨❤️"
    };

    document.getElementById("memory-text").textContent = messages[number];
    document.getElementById("memory-popup").style.display = "flex";
}

function closeMemory() {
    document.getElementById("memory-popup").style.display = "none";
}

}
function showMemory(number) {

    const memories = {
        1: {
            image: "assets/images/photo1.jpg",
            text: "Some moments are simply unforgettable ❤️"
        },

        2: {
            image: "assets/images/photo2.jpg",
            text: "A beautiful memory that will always stay special 💕"
        },

        3: {
            image: "assets/images/photo3.jpg",
            text: "This is just the beginning of our forever ✨❤️"
        }
    };

    document.getElementById("memory-image").src = memories[number].image;
    document.getElementById("memory-text").textContent = memories[number].text;

    document.getElementById("memory-popup").style.display = "flex";
}
