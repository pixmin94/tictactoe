var currentPlayer = 'X'

const box = document.querySelectorAll(".field")

box.forEach(function(elem) {
    elem.addEventListener("click", markBox)
})

document.getElementById("restart-button").addEventListener("click", restartGame)

function markBox(event) {
    dataIndex = event.target.getAttribute('data-index')
    // console.log("clicked" + dataIndex)
    attributeValue = '[data-index="'+dataIndex+'"]'
    document.querySelector(attributeValue).textContent = currentPlayer
    changePlayer()
}

function changePlayer(){
    if (currentPlayer == 'X') {
        currentPlayer = 'O'
        document.getElementById("message").innerHTML = "Player O's turn"
        
    } else {
        currentPlayer = 'X'
        document.getElementById("message").innerHTML = "Player X's turn"
    }
}

function checkForWin() {

}

function restartGame() {
    console.log("restart game")
}