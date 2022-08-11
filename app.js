function backgroundblue() {
    document.getElementById("back")
    document.getElementById("output")
    back.style.background = ("lightblue")
    output.style.background = ("lightblue")
}
function backgroundgreen() {
    document.getElementById("back")
    document.getElementById("output")
    back.style.background = ("lightgreen")
    output.style.background = ("lightgreen")
}
function backgroundgold() {
    document.getElementById("back")
    document.getElementById("output")
    back.style.background = ("gold")
    output.style.background = ("gold")
}
function backgroundwhite() {
    document.getElementById("back")
    document.getElementById("output")
    back.style.background = ("white")
    output.style.background = ("white")
}

var text = document.getElementById("back")

function abc() {
    output.innerHTML = back.value;
    document.getElementById('main').style.display = 'none'
    document.getElementById('second-main').style.display = ' block'
}

