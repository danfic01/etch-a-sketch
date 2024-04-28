createGrid(16, 16);

// declare a function to create a grid of squares on the webpage
function createGrid (columns, rows) {
    
    const container = document.createElement('div'); // create the main container div
    container.setAttribute('class', 'container'); // set  class of div to container
    document.body.appendChild(container); // append the container div to the body element of the html document

    // for the number of columns given when the function is called create column containers to hold the sqaures 
    for(let i = 0; i < columns; i++) {
        
        const column = document.createElement('div'); // create column div
        column.setAttribute('class', 'column'); // set class of div to column
        container.appendChild(column);  // append new column div as a child of the content div

        for(let j = 0; j < rows; j++) {
            const square = document.createElement('div'); // create a grid square div
            square.setAttribute('class', 'square'); // set class of div to square
            column.appendChild(square); // append new square div as a child of the current column div
        }
    }    
}