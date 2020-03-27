const clickButtons = document.querySelectorAll('.clickButton');
const score = document.getElementById('score');
const round = document.getElementById('round');
// const final = document.getElementById('final');
const restart = document.getElementById('restart');
const resultText = document.querySelector('.resultText');
const papanScore = {
    you: 0,
    computer: 0
}

//main system
function mainSystem(input){
    const youPick = input.target.id;
    const computerPick = randomComputerPick();
    const winner = whoWin(youPick, computerPick);
    scorePage(winner, computerPick);
}

//Random komputer, jika 0-batu, 1-paper, 2-scissors
function randomComputerPick(){
    let input = Math.floor(Math.random()*3); //random
    let pick;
    switch(input){
        case 0 : 
            pick = 'rock';
        break;
        case 1 :
            pick = 'paper';
        break;
        case 2 :
            pick = 'scissors';
        break;
    };
    return pick;
}

//pemenang
function whoWin(you, computer){
    let result = '';
    if (you == computer){
        result = "draw"
    }
    else if(you == 'rock' && computer == 'scissors' || you == 'paper' && computer == 'rock' || you == 'scissors' && computer == 'paper' ){
        result = "you";
    }
    else if(computer == 'rock' && you == 'scissors' || computer == 'paper' && you == 'rock' || computer == 'scissors' && you == 'paper' ){
        result = 'computer';
    }
    return result;
}

function scorePage(win, computer){
    if(win == 'you'){
        round.innerHTML = `  <h4>WIN</h4>
        <p>Computer choose :</p>
        <img src='img/${computer}.jpg'>`
        papanScore.you++;
    }
    else if(win == 'computer'){
        round.innerHTML = `  <h4>LOSE</h4>
        <p>Computer choose :</p>
        <img src='img/${computer}.jpg'>`
        papanScore.computer++;
    }
    else {
        round.innerHTML = `  <h4>DRAW</h4>
        <p>Computer choose :</p>
        <img src='img/${computer}.jpg'>`
    }
    score.innerHTML = `<h3>You : ${papanScore.you}</h3>
    <h3>Computer : ${papanScore.computer}</h3>`;
    
    resultText.style.display = 'block';
    return;
}

function clear(input){
    if (input.target == resultText){
        resultText.style.display = 'none';
    }
}

function gameRestart(){
    papanScore.you = 0;
    papanScore.computer = 0;
    score.innerHTML = `<h3>You : 0</h3>
    <h3>Computer : 0</h3>`;
}


//Event listeners
clickButtons.forEach(clickButtons => {
    clickButtons.addEventListener('click',mainSystem)
});
window.addEventListener('click',clear);
restart.addEventListener('click', gameRestart);