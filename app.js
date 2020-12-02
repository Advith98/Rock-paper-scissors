let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById("userScore");
const compScore_span = document.getElementById("compScore");
const scoreBoard_div = document.getElementById(".scoreBoard");
const result_p = document.querySelector(".result >p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getCompChoice(){
    const choices = ['r', 'p', 's'];
    const randNumber= Math.floor(Math.random() * 3);
    return choices[randNumber];
}

function convtoword(letter){
    if(letter === 'r') return "Rock";
    if(letter === 'p') return "Paper";
    return "Scissors";
}

function wins(userChoice, compChoice){
    userScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    const userChoice_div = document.getElementById(userChoice);
    const YouText = "You".fontsize(3).sub();
    const CompText = "Comp".fontsize(3).sub();
    result_p.innerHTML = `${convtoword(userChoice)} ${YouText} beats ${convtoword(compChoice)}${CompText}. You Win!`;
    userChoice_div.classList.add('greenGlow');
    setTimeout(function() { userChoice_div.classList.remove('greenGlow')}, 500);
}

function loose(userChoice, compChoice){
    compScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    const userChoice_div = document.getElementById(userChoice);
    const YouText = "You".fontsize(3).sub();
    const CompText = "Comp".fontsize(3).sub();
    result_p.innerHTML = `${convtoword(compChoice)}${CompText} beats ${convtoword(userChoice)} ${YouText}. You Loose!`;
    userChoice_div.classList.add('redglow');
    setTimeout(function() { userChoice_div.classList.remove('redglow')}, 500);
}

function draw(userChoice, compChoice){
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    const userChoice_div = document.getElementById(userChoice);
    const YouText = "You".fontsize(3).sub();
    const CompText = "Comp".fontsize(3).sub();
    result_p.innerHTML = `${convtoword(userChoice)} ${YouText} is same as ${convtoword(compChoice)}${CompText}. It's a Draw!`;
    userChoice_div.classList.add('grayglow');
    setTimeout(function() { userChoice_div.classList.remove('grayglow')}, 500);
}

function Game(userChoice){
    const compChoice = getCompChoice();
    switch(userChoice+compChoice){
        case "rs":
        case "pr":
        case "sp":
            wins(userChoice, compChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            loose(userChoice, compChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, compChoice);
            break;
    }
}

function main(){
    rock_div.addEventListener('click', function(){
        Game("r");
    })
    paper_div.addEventListener('click', function(){
        Game("p");
    })
    scissors_div.addEventListener('click', function(){
        Game("s");
    })
}
main();