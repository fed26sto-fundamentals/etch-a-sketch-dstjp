const container = document.getElementById('container');
const resetButton = document.getElementById('reset');

function createGrid(gridSize) {
    container.innerHTML = '';

    container.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;

    for (let i = 0; i < gridSize * gridSize; i++) {
        const div = document.createElement('div');
        div.classList.add('grid-item');

        div.addEventListener('mouseover', function() {
            div.style.backgroundColor = getRandomColor();
        });
        container.appendChild(div);
     }
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

resetButton.addEventListener('click', () => {
    let userInput = prompt("Ennter the number of squares per side for the new grid (Max 100):", 16);

    if (userInput !== null) {
        userInput = parseInt(userInput);
        if (userInput > 0 && userInput <= 100) {
            createGrid(userInput);
        } else {
            alert("Please enter a valid number between 1 and 100.");
        }
    }
});

createGrid(16);
