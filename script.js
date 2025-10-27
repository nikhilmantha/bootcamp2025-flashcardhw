const flashcards = [
    { term: "HTML", definition: "HyperText Markup Language" },
    { term: "CSS", definition: "Cascading Style Sheets" },
    { term: "JavaScript", definition: "Programming language of the web" }
];

let currentIndex = 0;
let showingTerm = true;
let isHovered = false;
let flashcardText = document.getElementById("card-content");

function displayCard() {
    flashcardText.innerText = showingTerm? flashcards[currentIndex].term : flashcards[currentIndex].definition;
}

let next = document.getElementById("next-btn");
let prev = document.getElementById("prev-btn");
let flashcard = document.getElementById("flashcard");
let newTerm = document.getElementById("new-term");
let newDef = document.getElementById("new-definition");
let addCard = document.getElementById("add-card-btn");

next.addEventListener("click", () => {
    if(!showingTerm) {
        flashcard.click();
    }
    showingTerm = true;
    currentIndex = (currentIndex + 1) % flashcards.length
    displayCard();
    updateTransform();
});

prev.addEventListener("click", () => {
    if(!showingTerm) {
        flashcard.click();
    }
    showingTerm = true;
    currentIndex = (currentIndex - 1 + flashcards.length) % flashcards.length
    displayCard();
    updateTransform();
});

function updateTransform() {
    let rotation = showingTerm ? "rotateX(0deg)" : "rotateX(-180deg)";
    let scale = isHovered ? "scale(1.05)" : "scale(1)";
    flashcard.style.transform = `${rotation} ${scale}`;
    flashcardText.style.transform = `${rotation}`
}

flashcard.addEventListener("click", () => {
    showingTerm = !showingTerm
    displayCard();
    updateTransform();
});

flashcard.addEventListener("mouseenter", () => {
    isHovered = true;
    updateTransform();
});

flashcard.addEventListener("mouseleave", () => {
    isHovered = false;
    updateTransform();
});

addCard.addEventListener("click", () => {
    flashcards.push({ term:newTerm.value, definition:newDef.value });
    newTerm.value = "";
    newDef.value = "";
});

// This line will display the card when the page is refreshed
window.onload = displayCard;
