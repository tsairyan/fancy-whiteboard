let count = 0;
const container = document.querySelector(".container");
generateGrid(16);
//Each square would be 500 / (x * y);
let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);


const start = document.querySelector(".start");
const cells = document.querySelectorAll(".cell");
function generateGrid(dim) {
    const clear = document.querySelector(".clear");
    clear.addEventListener("mousedown", function() {generateGrid(dim);});
    

    const size = 500 / dim;
    count++;
    if (count > 0) {
        while (container.firstChild) {
            container.removeChild(container.firstChild);
        }
        console.log("removed");
    }

    for (let i = 0; i < dim; i++) {
        for (let j = 0; j < dim; j++) {
            const cell = document.createElement("div");
            cell.classList.add("cell");
            cell.style.height = size + "px";
            cell.style.width = size + "px";
        
            cell.addEventListener('mouseover', draw);
            cell.addEventListener('mousedown', draw);
            container.appendChild(cell);

        }
    }
    count++;


}

function draw(e) {
    if (e.type === 'mouseover' && !mouseDown) {
        return;
    }
    else {
        e.target.style.backgroundColor = "black";
    }
}


 
function hovering(){
    check = true;
    cells.forEach(cell => {
        cell.addEventListener('mouseover', (e) =>{
            cell.style.backgroundColor = "black";
        });
        
    });
}

var slider = document.getElementById("myRange");
var output = document.getElementById("value");
output.innerHTML = "Dimensions: " + slider.value + " x " + slider.value;
output.style.marginTop = "-20px";
output.style.maxWidth = "150px";
output.style.fontFamily = "kayak";

output.style.color = "white";
// output.style.marginLeft = "37.5px";
slider.oninput = function() {
    output.innerHTML = "Dimensions: " + this.value + " x " + this.value;
}
start.addEventListener("mousedown", function() {generateGrid(slider.value); }, false);

function clearCanvas() {
    console.log("test");
    cells.forEach(cell => {
        cell.style.backgroundColor = "white";
    });
}
