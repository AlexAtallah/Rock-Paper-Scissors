function computerPlay(){
    let rndInt = Math.floor(Math.random() * 3) + 1
    if(rndInt==1){
        rndInt="rock";
    }else if(rndInt==2){
        rndInt="paper";
    }else{
        rndInt="scissors";
    }
    return rndInt;

}

  function game(){
      let i=0;
      while(i<5){
        let playerSelect=prompt("Enter your choice","")
        playerSelect.toLowerCase;
        let playerSelection=playerSelect;
        let computerSelection = computerPlay();
        if(playerSelection=="rock"){
            if(computerSelection=="rock"){
                console.log("It's a tie!")
            }else if(computerSelection=="paper"){
                console.log("You lose!")
            }else{
                console.log("You win!")
            }
        }else if(playerSelection=="paper"){
            if(computerSelection=="paper"){
                console.log("It's a tie!")
            }else if(computerSelection=="scissors"){
                console.log("You lose!")
            }else{
                console.log("You win!")
            }
        }else{
            if(computerSelection=="scissors"){
                console.log("It's a tie!")
            }else if(computerSelection=="rock"){
                console.log("You lose!")
            }else{
                console.log("You win!")
            }
        }
        i++;
      
  }
}

console.log(game())
  
