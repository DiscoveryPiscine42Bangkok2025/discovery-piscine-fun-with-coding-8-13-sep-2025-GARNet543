const balloon = document.getElementById("balloon")

// Define param
let size = 200;
const min = 200;
const max = 420;
const color = ["red","green","blue"]
let colorIndex = 0;

// render balloon fn
function balloonUpdate() {
    balloon.style.width = size + "px";
    balloon.style.height = size + "px";
    balloon.style.backgroundColor = color[colorIndex];
}

// Update size
balloon.addEventListener('click', () =>{
    size +=10;

    if(size > max) {
        size = min;
        colorIndex = 0;
    }
    else{
        colorIndex = (colorIndex+1)%3;
    }
    balloonUpdate()
})

// for mouse when leave
balloon.addEventListener("mouseleave", () => {
  if (size > min) {
    size -= 5;
  }

  // Cycle backward through colors
  colorIndex = (colorIndex - 1 + 3) % 3;

  balloonUpdate();
});
