let ResualtMsg = document.getElementById("msg");
let myCard=document.getElementById("myCards");
let myCounts=document.getElementById("sum");
let counter = 0;
let cards=[];
let message ="";
let player =false;
let winner = false;


function start(){
    player =true;
    let Fcard=rand();
    let Scard=rand();
    cards=[Fcard ,Scard];
    counter=Fcard+Scard;
    renderthegame();
    
}
function renderthegame(){
    myCard.textContent="Cards: ";
    for(let i =0;i<cards.length;i++){
        myCard.textContent = myCard.textContent + cards[i]+" ";
    }
    myCounts.textContent="Sum: " + counter

    if(counter === 21){
        message = "WINNER";
        
    }else if(counter > 21){
        message ="LOSER";
    } else message ="you still in the game";
    ResualtMsg.textContent =message;


}

function newC(){
    
    
    if(player===true && winner === false){
        let myNewCard = rand();
        counter = counter + myNewCard;
        cards.push(myNewCard);
        renderthegame();
    }


}

function rand(){
    let myRand = Math.floor(Math.random()*13)+1;
    if(myRand>10){
        myRand=10;
    }else if(myRand===1){
        myRand =11;
     } 
     return myRand;
    
}