const getJumpButton = document.getElementById("jump");

function jump() {
    getJumpButton.style.top = "30%"
}

getJumpButton.addEventListener("click",jump)