
document.addEventListener('DOMContentLoaded', function() {
    const gridControl = document.getElementById('gridSize');
    const sliderLabel = document.querySelector('label[for="gridSize"]');
    let gridDimension = gridControl.value;
    const gridArea = document.getElementById('grid-area');
    sliderLabel.textContent = gridDimension;

    generateGrid();

    function generateGrid() {
        gridDimension = gridControl.value;
        sliderLabel.textContent = gridDimension;

        for (let i = 0; i < gridDimension * gridDimension ; i++) {
            const newDiv = document.createElement('div');
            newDiv.classList.add('grid-element');
            let newDivHeight = gridArea.offsetWidth / gridDimension;
            let newDivWidth = newDivHeight;
            newDiv.style.height = `${newDivHeight}px`;
            newDiv.style.width = `${newDivWidth}px`;
            gridArea.style.borderRadius = `${newDivHeight}px`;
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
    
});
