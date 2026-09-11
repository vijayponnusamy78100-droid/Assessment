const num = document.getElementById("num");


function Result() {
    if (num.value == 25) {
        document.getElementById("Answer").innerText = "Your Answer is Correct 👌👌✅✅";
    }
    else if (num.value == "") {
        document.getElementById("Answer").innerText = "Enter Your Answer 🤷‍♂️"
    }
    else {
        document.getElementById("Answer").innerText = "Your Answer is Wrong ❌❌";
    }
}
// --------------- Choice Correct Answer -----------

// let q1 = document.querySelector('input[name="q1"]:checked');

let line = document.getElementById("line");

function checkAnswer() {
    let q1 = document.querySelector('input[name="q1"]:checked');
    let q2 = document.querySelector('input[name="q2"]:checked');
    let q3 = document.querySelector('input[name="q3"]:checked');
    let score = 0;

    if (q1 && q1.value == "a") {
        score++;
    }
    if (q2 && q2.value == "a") {
        score++;
    }
    if (q3 && q3.value == "a") {
        score++;
    }

    //---------- Animate line updation-------------
    let totalQuestions = 3;
    let percentage = (score / totalQuestions) * 100;
    line.style.width = percentage + "%";

    if (score > 0) {
        document.getElementById("SCore").innerHTML = `<h5 id="SCore">Your SCore is :${score} ✅ 👌</h5>`
    }
    else {
        document.getElementById("SCore").innerHTML = `<h5 id="SCore">Your SCore is :${score} ❌🤷‍♂️</h5>`
    }
}


let playerScore = document.getElementById("player-Score");
let points = document.getElementById('points');
let Operator = document.getElementById("Operator");

function PlayerScore() {
    Op = Operator.value;
    Ps = Number(playerScore.value);
    pits = Number(points.value);
    switch (Op) {
        case "+":
            ans = Ps + pits;
            break;
        case "-":
            ans = Ps - pits;
            break;
        case "*":
            ans = Ps * pits;
            break;
        case "/":
            ans = Ps / pits;
            break;
        case "%":
            ans =  Ps % pits;
            break;
        default:
            ans = "Enter Your Colculate Method 🤦‍♂️"
    }
    document.getElementById("playerScore").innerText = ans;
}





