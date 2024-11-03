const wrapper = document.querySelector('.wrapper');
const question = document.querySelector('.question');
const yesBtn = document.querySelector('.yes-btn');
const noBtn = document.querySelector('.no-btn');

let questionIndex = 0;
const questions = [
    "Do you like me?",
    "Which means you love me, right?"
];

yesBtn.addEventListener('click', () => {
    questionIndex++;
    if (questionIndex < questions.length) {
        question.innerHTML = questions[questionIndex];
        resetNoButton(); // Reset position of the No button after first question
    } else {
        question.innerHTML = "But sorry, I'm with someone!";
        yesBtn.style.display = 'none'; // Hide Yes button
        noBtn.style.display = 'none';  // Hide No button
    }
});

noBtn.addEventListener('mouseover', moveNoButton);

function moveNoButton() {
    const wrapperRect = wrapper.getBoundingClientRect();
    const noBtnRect = noBtn.getBoundingClientRect();

    // Calculate a new position for the No button, keeping it within the wrapper
    const maxX = wrapperRect.width - noBtnRect.width;
    const maxY = wrapperRect.height - noBtnRect.height - 50; // Adjust for button height

    const newX = Math.floor(Math.random() * maxX);
    const newY = Math.floor(Math.random() * maxY);

    noBtn.style.position = 'absolute'; // Allow absolute positioning for movement
    noBtn.style.left = `${newX}px`;
    noBtn.style.top = `${newY}px`;
}

function resetNoButton() {
    noBtn.style.position = 'relative'; // Reset to relative for initial positioning
    noBtn.style.left = '0';
    noBtn.style.top = '0';
}
