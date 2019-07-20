const gameSummary = {
    wins:0,
    losses:0,
}

const game={
    playerHand: "",
    aiHand: "",
}

const hands = [...document.querySelectorAll(".select div")];
const shadows = [...document.querySelectorAll(".select div i")];



// first function

function handSelection(){
    game.playerHand = this.dataset.option;
    console.log(game.playerHand);
    hands.forEach(hand => hand.style.color = "white");
    this.style.color = "red";
    }

function aiChoice(){
    return hands[Math.floor(Math.random()*3)].dataset.option;
}
// funkcja która informuje kto co wybrał
function checkResult(player, ai){

    if(player === ai){
        return "draw";
    }else if(player ==="kamień" && ai ==="nożyczki" || player === "nożyczki" && ai === "papier" || player === "papier" && ai ==="kamień"){
        return "win";
    }else {return "loss";}

}
function publishResult(result){
    if(result === "win"){
        document.querySelector(".wins").textContent = ++gameSummary.wins;
        document.querySelector(".winner p").textContent = "Ty wygrałeś !!";
        document.querySelector(".winner p").style.color = "green";
    }else if(result === "loss") {
        document.querySelector(".losses").textContent = ++gameSummary.losses;
        document.querySelector(".winner p").textContent = "Przegrałeś !!";
        document.querySelector(".winner p").style.color = "red";

    }else{
        document.querySelector(".winner p").textContent = "Remis ;//";
        document.querySelector(".winner p").style.color = "gray";

    }
}

// funkcja resetująca 
function endGame(){
    document.querySelector(`[data-option = "${game.playerHand}"]`).style.color="white";

}
function bigResult(wins,losses){
    if(wins === 3){
        
        alert("Gratulacje. Wygrałeś całą gre !!")
       }else if(losses ===3){
           wins = 0;
        alert("Niestety. Przegrałeś !!")
       }

}


// funkcja odpalająca wszystkie inne funkcje
function startGame(){
if(!game.playerHand){
    return alert ("Wybierz dłoń !!");
}
game.aiHand = aiChoice();
const gameResult = checkResult(game.playerHand, game.aiHand);
publishResult(gameResult);
endGame();
bigResult(gameSummary.wins,gameSummary.losses);
}



hands.forEach(hand => hand.addEventListener("click", handSelection));

document.querySelector(".play").addEventListener("click",startGame);