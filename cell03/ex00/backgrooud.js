function Change_bgColor() {
    //16777215 = largest number for 3bytes data
    const randomColor = '#'+ Math.floor(Math.random() * 16777215).toString(16); 
    document.body.style.backgroundColor = randomColor;
}

document.getElementById("button").addEventListener("click", Change_bgColor);