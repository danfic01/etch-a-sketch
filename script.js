createResetButton();
createGrid(16, 16);

// add an event listener to check when the mouse enters the space of a square
document.addEventListener('mousemove', (event) => {

    let target = event.target; // declare target variable to store element touched by mouse

    // set target element id to 'marked' if its class is 'square'
    if(target.className === 'square') {
        target.setAttribute('id', 'marked');
    }

})

// add an event listener to check when the reset button is clicked
document.addEventListener('click', (event) => {

    let target = event.target; 

    if(target.id === 'reset') {

        let gridResolution = prompt('Please enter grid resolution'); // prompt the user to enter a number to size the new grid
        while (Number(gridResolution) < 2 || Number(gridResolution) > 100) {
            gridResolution = prompt('Please enter a positive integer no greater than 100'); // if the user enters a number less than 2 or greater than 100 prompt for re-entry
        }
        createGrid(gridResolution, gridResolution, true); // create a new grid sized to user specifications. Third argument sets reset to true so that the function will remove the old grid.
    }
})

// declare a function to create a grid of squares on the webpage
function createGrid (columns, rows, reset=false) {
    
    if (reset) {
        document.body.removeChild(document.querySelector('.container'));
    }

    const container = document.createElement('div'); // create the main container div
    container.setAttribute('class', 'container'); // set  class of div to container
    document.body.appendChild(container); // append the container div to the body element of the html document

    const squareWidth = (800 - 8 * (columns -1)) / columns; // calculate the width of each individual square while the total width of the grid is 800px

    // for the number of columns given when the function is called create column containers to hold the sqaures 
    for(let i = 0; i < columns; i++) {
        
        const column = document.createElement('div'); // create column div
        column.setAttribute('class', 'column'); // set class of div to column
        container.appendChild(column);  // append new column div as a child of the content div

        for(let j = 0; j < rows; j++) {
            const square = document.createElement('div'); // create a grid square div
            square.setAttribute('class', 'square'); // set class of div to square
            square.style.minWidth = `${squareWidth}px`; 
            square.style.minHeight = `${squareWidth}px`; 
            column.appendChild(square); // append new square div as a child of the current column div
        }
    }    
}

// declare a function to create a button to reset the grid
function createResetButton() {
    const resetButton = document.createElement('button');
    resetButton.setAttribute('id', 'reset');
    resetButton.textContent = 'RESET';
    document.body.appendChild(resetButton);
}