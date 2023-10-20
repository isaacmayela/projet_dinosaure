const getJumpButton = document.getElementById("jump");
const getRichard = document.getElementById("richard");
const getBall = document.getElementById("ball");

let move = 0;
function incrementor() {
    move += 10;
    // console.log(move);
}

function moveBall() {
    setInterval(incrementor,1000);
    console.log(move);
    getBall.style.right = `${move}%`;
    // incrementor += 10;
}



function ball_progression() {
    let compteur = 0

    function names() {

        if (compteur  === 100){
            compteur = 0;
        }

        compteur += 10;

        getBall.style.right = `${compteur}%`;

    }

    setInterval(names, 90)

}






function down() {
    getRichard.style.top = "65%";
}

function jump() {
    getRichard.style.top = "35%";
    setTimeout(down,300);
}

ball_progression();
getJumpButton.addEventListener("click",jump);

