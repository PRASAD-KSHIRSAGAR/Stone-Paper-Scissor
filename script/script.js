let userScore=0;
let compScore=0;
const uScore=document.querySelector("#user-score");
const CScore=document.querySelector("#comp-score");
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const getCompChoice=()=>
{
    const option=["rock","paper","scissor"];
    const randIdx=Math.floor(Math.random()*3);
    return option[randIdx];
}

const DrawGame=()=>
{
    console.log("Game was draw,Play again");
    msg.innerHTML="Game was draw,Play again";
    msg.style.backgroundColor="orange";
}   

const ShowWinner=(UserWin ,UserChoice,compChoice)=>
{
    if(UserWin)
    {
        userScore++;
        uScore.innerText=userScore;
        msg.innerText=`You Won! Your ${UserChoice} beats ${compChoice}` ;
        msg.style.backgroundColor="green";
    } else
    {   compScore++;
        CScore.innerText=compScore;
        msg.innerText=`You Lost. ${compChoice} beats ${UserChoice}`;
        msg.style.backgroundColor="red";
    }
}
const PlayGame=(UserChoice)=>
{
    console.log("User choice", UserChoice);
    //computer choice
    const compChoice=getCompChoice();
    console.log("computer choice", compChoice);

    if(UserChoice === compChoice)
    {
        DrawGame();
    }
    else
    {
        let UserWin = true;
        if (UserChoice === "rock")
        {
            // scissors, paper
             UserWin = compChoice === "scissor" ? true : false;
        } 
        else if (UserChoice === "paper") 
        {
            // rock, scissors
            UserWin = compChoice === "rock" ? true : false;
        } 
        else 
        {
            // rock, paper
            UserWin = compChoice === "paper" ? true : false;
        }
        console.log(UserWin ? "You won!" : "You lost!");
        ShowWinner(UserWin,UserChoice,compChoice);
    }
}
choices.forEach((choice) =>
{
    console.log(choice);
    choice.addEventListener("click",()=>
    {
        const UserChoice=choice.getAttribute("id");
        console.log("choice was clicked",UserChoice);
        PlayGame(UserChoice);
    });
});