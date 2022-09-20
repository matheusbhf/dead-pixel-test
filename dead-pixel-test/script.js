
// Selecionando o container e a função de base 
const wallpaperColor = document.querySelector(".container");

function randomColor () {

    let rgbConfig = [];
    for (let index = 0; index < 3; index++) {
        let randomNumber = Math.round(Math.random()*256);
        rgbConfig.push(randomNumber);
    }

    let wcolor = wallpaperColor.style.backgroundColor = `rgb(${rgbConfig})`;
    console.log(wcolor);
}


// Selecionando o botão e a função dele
let bodySelection = document.querySelector("body");

bodySelection.addEventListener("click", function () {
randomColor();

})




