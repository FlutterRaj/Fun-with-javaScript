
function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)]
    }
    return color
}

function changeRandomColor(){
    colorInput = getRandomColor();
    document.querySelector("h2").style.color = colorInput;

    for (var i=0; i<9; i++){
        colorInput1 = getRandomColor()
        document.getElementsByClassName("color1")[i].style.backgroundColor = colorInput1
        colorInput2 = getRandomColor()
        document.getElementsByClassName("color2")[i].style.backgroundColor = colorInput2
        colorInput3 = getRandomColor()
        document.getElementsByClassName("color3")[i].style.backgroundColor = colorInput3
        colorInput4 = getRandomColor()
        document.getElementsByClassName("color4")[i].style.backgroundColor = colorInput4
        colorInput5 = getRandomColor()
        document.getElementsByClassName("color5")[i].style.backgroundColor = colorInput5
    }
}

setInterval("changeRandomColor()", 500)