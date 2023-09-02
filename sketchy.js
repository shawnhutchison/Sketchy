
document.addEventListener('DOMContentLoaded', function() {
    const gridControl = document.getElementById('gridSize');
    const sliderLabel = document.querySelector('label[for="gridSize"]');
    let gridDimension = gridControl.value;
    const gridArea = document.getElementById('grid-area');
    sliderLabel.textContent = gridDimension;
    const clearButton = document.getElementById('clear');

    let mouseDown = false;
    document.body.onmousedown = () => (mouseDown = true);
    document.body.onmouseup = () => (mouseDown = false);

    generateGrid();

    function updateColor(e) {
        if (e.type === 'mouseover' && !mouseDown) {
            return;
        }
        e.target.classList.add('black_white');
    }
    
    function generateGrid() {
        gridDimension = gridControl.value;
        sliderLabel.textContent = `Grid: ${gridDimension} x ${gridDimension}`;

        for (let i = 0; i < gridDimension * gridDimension ; i++) {
            const newDiv = document.createElement('div');
            newDiv.classList.add('grid-element');
            let newDivHeight = gridArea.offsetWidth / gridDimension;
            let newDivWidth = newDivHeight;
            newDiv.style.height = `${newDivHeight}px`;
            newDiv.style.width = `${newDivWidth}px`;
            newDiv.addEventListener('mousedown', updateColor);
            newDiv.addEventListener('mouseover', updateColor);
            gridArea.appendChild(newDiv);

        }
    }

    function resetGrid() {
        while (gridArea.firstChild) {
            gridArea.removeChild(gridArea.firstChild);
        }
    }

    gridControl.addEventListener('input', () => {
        resetGrid();
        generateGrid();
    });
    
    clearButton.addEventListener('click', () => {
        resetGrid();
        generateGrid();
    });

    
   

});
