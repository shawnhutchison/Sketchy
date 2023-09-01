
document.addEventListener('DOMContentLoaded', function() {
    const gridControl = document.getElementById('gridSize');
    const sliderLabel = document.querySelector('label[for="gridSize"]');
    let gridDimension = gridControl.value;
    const gridArea = document.getElementById('grid-area');
    sliderLabel.textContent = gridDimension;



    gridControl.addEventListener('input', () => {
        gridDimension = gridControl.value;
        sliderLabel.textContent = gridDimension;
        
        while (gridArea.firstChild) {
            gridArea.removeChild(gridArea.firstChild);
        }
        
        for (let i = 0; i < gridDimension; i++) {
            const newDiv = document.createElement('div');
            newDiv.classList.add('grid-element');
            gridArea.appendChild(newDiv);
        }
    });
});
