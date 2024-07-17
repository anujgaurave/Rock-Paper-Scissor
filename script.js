const choices = document.querySelectorAll(".choice");
const msg =document.querySelector("#msg");
const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");

let userScore =0;
let compScore = 0;

const genCompChoice = () => {
    const opt = ["rock", "paper", "scissors"];
    const rand = Math.floor(Math.random() * 3);
    return opt[rand];
}

const drowGame = (compChoice,userChoice)=> {
    msg.innerText =`Game drow! .You selected "${userChoice}" Computer also selected "${compChoice}"`;
    msg.style.backgroundColor="black";
}

const showWinner = (userWin,compChoice,userChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        msg.innerText =`You Win! .You selected "${userChoice}" Computer selected "${compChoice}"`;
        msg.style.backgroundColor="green";
    }else{
        compScore++;
        compScorePara.innerText=compScore;
        msg.innerText =`You Loss! .You selected "${userChoice}" Computer selected "${compChoice}"`;
        msg.style.backgroundColor="red";
    }
}

const playGame =(userChoice)=>{
const compChoice=genCompChoice();
if(userChoice === compChoice){
    drowGame(compChoice,userChoice);
}
else{
    let userWin = true;
    if(userChoice === "rock"){
    userWin = compChoice === "paper" ? false : true;
}
else if(userChoice === "paper"){
    userWin = compChoice=== "scissors" ? false : true;
}
else{
    userWin = compChoice === "rock" ? false:true;
}

showWinner(userWin,compChoice,userChoice);
}
}
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice =choice.getAttribute("id");
      playGame(userChoice);
    });
});