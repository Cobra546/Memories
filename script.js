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

// 🎂 CUT → VIDEO
document.addEventListener("click",()=>{
showVideo();
},{once:true});

function showVideo(){

let popup = document.getElementById("videoPopup");
let vid = document.getElementById("cakeVideo");

popup.style.display="block";

setTimeout(()=>{
popup.classList.add("show");
},50);

vid.play();

// END VIDEO
vid.onended = ()=>{
setTimeout(()=>{
popup.classList.remove("show");

setTimeout(()=>{
popup.style.display="none";
document.getElementById("cakeScreen").style.display="none";
document.getElementById("basketScreen").style.display="flex";
},400);

},800);
};

}

// 🎁 BASKET FLOW
let step=0;

document.getElementById("basketScreen").onclick = function(){

step++;

if(step===1) showCard();
if(step===2) openBook();

};

// 💌 CARD
let cardStep=0;

function showCard(){

let card=document.getElementById("card");
let wrapper=document.querySelector(".cardWrapper");

card.classList.add("show");
cardStep=0;

card.onclick=function(){

cardStep++;

if(cardStep===1) wrapper.classList.add("open");
else if(cardStep===2) wrapper.classList.remove("open");
else if(cardStep===3){
card.classList.remove("show");
cardStep=0;
}

};

}

// 📖 BOOK
function openBook(){

document.getElementById("basketScreen").style.display="none";
document.getElementById("bookScreen").style.display="flex";

}
