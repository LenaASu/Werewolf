// Maze Data (0:Wall, 1:Path, 2:Pellet, 3:Power Pellet, 4:Ghost Cage, 5:Pac-Man Start)
const PACMAN_MAZE = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0],
    [0, 2, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 2, 0, 0, 2, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 2, 0],
    [0, 3, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 2, 0, 0, 2, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 3, 0],
    [0, 2, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 2, 0, 0, 2, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 2, 0],
    [0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0],
    [0, 2, 0, 0, 0, 0, 2, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 2, 0, 0, 0, 0, 2, 0],
    [0, 2, 0, 0, 0, 0, 2, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 2, 0, 0, 0, 0, 2, 0],
    [0, 2, 2, 2, 2, 2, 2, 0, 0, 2, 2, 2, 2, 0, 0, 2, 2, 2, 2, 0, 0, 2, 2, 2, 2, 2, 2, 0],
    [0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 2, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 2, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 2, 0, 0, 1, 0, 0, 0, 4, 4, 0, 0, 0, 1, 0, 0, 2, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 2, 0, 0, 1, 0, 4, 4, 4, 4, 4, 4, 0, 1, 0, 0, 2, 0, 0, 0, 0, 0, 0],
    [1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 0, 4, 4, 4, 4, 4, 4, 0, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1],
    [0, 0, 0, 0, 0, 0, 2, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 2, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 2, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 2, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 2, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 2, 0, 0, 0, 0, 0, 0],
    [0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0],
    [0, 2, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 2, 0, 0, 2, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 2, 0],
    [0, 2, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 2, 0, 0, 2, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 2, 0],
    [0, 3, 2, 2, 0, 0, 2, 2, 2, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 2, 2, 2, 0, 0, 2, 2, 3, 0],
    [0, 0, 0, 2, 0, 0, 2, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 2, 0, 0, 2, 0, 0, 0],
    [0, 0, 0, 2, 0, 0, 2, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 2, 0, 0, 2, 0, 0, 0],
    [0, 2, 2, 2, 2, 2, 2, 0, 0, 2, 2, 2, 2, 0, 0, 2, 2, 2, 2, 0, 0, 2, 2, 2, 2, 2, 2, 0],
    [0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0],
    [0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0],
    [0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 5, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
];

// Function to dynamically resize the maze based on viewport and container
function resizeMaze() {
    const viewportWidth = window.innerWidth;
    // const viewportHeight = window.innerHeight; // Not needed for the simplified logic
    const mazeCard = document.querySelector('.maze-card');
    // const header = document.querySelector('.header-container'); // Not needed for the simplified logic
    // const scoreboard = document.querySelector('.scoreboard'); // Not needed for the simplified logic

    // 🔑 PC/Medium Screen Logic (Width > 768px - Aligns with CSS media query breakpoint)
    // For these sizes, we let CSS rules control the size and layout.
    if (viewportWidth > 768) { 
        // 移除内联样式，让 CSS 的 max-width (PC/Tablet) 接管尺寸
        mazeCard.style.maxWidth = ''; 
        mazeCard.style.width = '';
        return;
    }

    // --- 🔑 Small/Mobile Screen Scaling Logic (Width <= 768px) ---
    // On mobile, we prioritize full width display and rely on CSS to stack elements.
    
    // 1. Calculate available maximum width (leaving 5% margin/padding space)
    const max_width_constraint = viewportWidth * 0.95; 

    // 2. Final size is simply the width constraint. 
    // This is the most reliable way to ensure the maze fills the available horizontal space 
    // on a mobile device without complex and error-prone vertical space calculations.
    const finalMazeSize = max_width_constraint;

    // 3. Apply final size to the container
    mazeCard.style.maxWidth = `${finalMazeSize}px`;
    mazeCard.style.width = `${finalMazeSize}px`; 
}


document.addEventListener('DOMContentLoaded', () => {
    // --- MAZE DRAWING LOGIC ---
    const mazeGrid = document.getElementById('maze-grid');

    // Cell value to CSS class mapping
    const cellClasses = {
        0: 'wall',         
        1: 'path',         
        2: 'pellet',       
        3: 'power-pellet', 
        4: 'ghost-cage',   
        5: 'pacman-start'  
    };

    // Iterate over the rows and columns to build the grid
    PACMAN_MAZE.forEach((row, rowIndex) => {
        row.forEach((cellValue, colIndex) => {
            const cell = document.createElement('div');
            cell.classList.add('cell', cellClasses[cellValue]);

            // Special case for the ghost gate/entry point
            if (rowIndex === 11 && (colIndex === 13 || colIndex === 14)) {
                cell.classList.remove('ghost-cage', 'path', 'pellet', 'power-pellet'); 
                cell.classList.add('path', 'ghost-gate');
            }

            mazeGrid.appendChild(cell);
        });
    });
    // --- END MAZE DRAWING LOGIC ---

    // Call resize function on initial load
    resizeMaze(); 
});

// Run on window resize events (e.g., rotating the phone or address bar hiding/showing)
window.addEventListener('resize', resizeMaze);

// Run on a timer for a quick initial sizing when browser elements might be loading
setTimeout(resizeMaze, 300);