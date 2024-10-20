let userSeq = [];
let gameSeq = [];
let level = 0;
let btns =["yellow","red","purple","green"];
let started = false;
let h2 = document.querySelector("h2");

document.addEventListener("keypress",function(){
    if(started == false){
        console.log("Game was started");
        started = true;
    }

    levelUp();
})

function gameFlash (btn){
    btn.classList.add("flash");
    setTimeout(function (){
        btn.classList.remove("flash");
    },250)
}


function userFlash (btn){
    btn.classList.add("userFlash");
    setTimeout(function (){
        btn.classList.remove("userFlash");
    },250)
}


function levelUp(){
    userSeq=[];
    level++;
    h2.innerText=`level ${level}`;

    let randIdx = Math.floor(Math.random() * 3);
    let randColor = btns[randIdx]; 
    
    let randBtn = document.querySelector(`.${randColor}`);

    // console.log(randIdx);
    // console.log(randColor);
    // console.log(randBtn);


    gameSeq.push(randColor);
    console.log(gameSeq)
    gameFlash(randBtn);
}


function checkAns (idx){
    // console.log("currect level :- ",level)
    if(userSeq[idx] === gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp,1000);
        }
    } else{
        h2.innerHTML = `Game Over ! your score was <b>${level}</b>  <br>Press any key to start.`;
        document.querySelector("body").style.backgroundcolor="red";
        setTimeout(function (){
            document.querySelector("body").style.backgroundColor="white";
            reset();
        },150);
    }
}
function btnPress (){
    // console.log(this)
    let btn = this;
    userFlash(btn);

    userColor = btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length-1);
}

// Second Logic chalu zala hitun
let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}
function reset (){
    started =false;
    gameSeq=[];
    userSeq=[];
    level=0;
}