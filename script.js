// MUSIC
let currentSong=null;
function playSong(id){
if(currentSong){currentSong.pause();currentSong.currentTime=0;}
let s=document.getElementById(id);
s.play().catch(()=>{});
currentSong=s;
}

// START
window.onload=()=>{
document.getElementById("loader").style.display="none";
document.getElementById("cakeScreen").style.display="flex";
playSong("song1");
};

// 🎂 CUT
document.addEventListener("click",()=>{
startVideo();
},{once:true});

function startVideo(){

document.getElementById("cakeScreen").style.display="none";

let videoScreen=document.getElementById("videoScreen");
let video=document.getElementById("cakeVideo");

videoScreen.style.display="block";
video.play();

// AFTER VIDEO
video.onended=()=>{
setTimeout(()=>{
videoScreen.style.display="none";
showBasket();
},2000);
};

}

// 🎁 BASKET
let step=0;

function showBasket(){
playSong("song2");
document.getElementById("giftBox").style.display="flex";
}

function basketClick(){
step++;

if(step===3) showTeddyHug();
if(step===5) triggerCard();
if(step===6) showBook();
}

// 🧸 TEDDY
function showTeddyHug(){
let t=document.getElementById("teddy");
t.classList.add("show");

setTimeout(()=>t.classList.add("teddyHug"),200);
setTimeout(()=>t.classList.remove("teddyHug"),2200);
}

// 💌 CARD
let cardStep=0;

function triggerCard(){
let card=document.getElementById("card");
card.classList.add("show");
cardStep=0;

card.onclick=()=>{
cardStep++;

if(cardStep===1) document.querySelector(".cardWrapper").classList.add("open");
else if(cardStep===2) document.querySelector(".cardWrapper").classList.remove("open");
else if(cardStep===3){
card.classList.remove("show");
cardStep=0;
}
};
}

// 📖 BOOK
let bookStep=0;

function showBook(){
playSong("song3");

let book=document.getElementById("book");
book.style.display="block";

book.onclick=()=>{
bookStep++;

if(bookStep===4){
book.style.display="none";
showFinal();
}
};
}

// 💥 FINAL
function showFinal(){
document.getElementById("finalPopup").style.display="block";
}
