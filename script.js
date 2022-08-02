var currentPlayer = 'X'

const box = document.querySelectorAll(".field")

box.forEach(function(elem) {
    elem.addEventListener("click", markBox)
})

function markBox() {
    console.log("clicked")
}

function checkForWin() {

}

document.getElementById("restart-button").addEventListener("click", markBox)