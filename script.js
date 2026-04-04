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
// 🔐 PIN
function checkPin(){
let pin = document.getElementById("pinInput").value;
if(pin === "1102"){
document.getElementById("lockScreen").style.display="none";
startLoader();
}else{
document.getElementById("errorMsg").innerText="Wrong PIN ❌ Try Again";
}
}

// ⏳ LOADER
let totalAssets = 3;
let loadedAssets = 0;
function assetLoaded(){
loadedAssets++;
if(loadedAssets >= totalAssets){
document.getElementById("loader").style.display="none";
document.getElementById("cakeScreen").style.display="flex";
}
}
function startLoader(){
document.getElementById("loader").style.display="flex";

// Load 3D Assets Here
loadCake();
loadBasket();
loadTeddy();
}

// 🎂 3D PLACEHOLDER FUNCTIONS
function loadCake(){ assetLoaded(); }
function loadBasket(){ assetLoaded(); }
function loadTeddy(){ assetLoaded(); }

// 🎬 VIDEO
function showVideo(){
let popup=document.getElementById("videoPopup");
let vid=document.getElementById("cakeVideo");
popup.style.display="block";
setTimeout(()=>{popup.classList.add("show");},50);
vid.play();
vid.onended=()=>{
setTimeout(()=>{
popup.classList.remove("show");
setTimeout(()=>{popup.style.display="none";document.getElementById("basketScreen").style.display="flex";},400);
},800);
};
}

// 💌 CARD
function openCard(){
document.getElementById("cardCover").style.display="none";
document.getElementById("cardBook").style.display="block";
$("#cardFlip").turn({width:300,height:200,autoCenter:true});
let step=0;
document.getElementById("cardFlip").onclick=function(){
step++;
if(step===1){$("#cardFlip").turn("next");}
else if(step===2){
$("#cardFlip").turn("page",1);
setTimeout(()=>{document.getElementById("cardBook").style.display="none";document.getElementById("bookCover").style.display="flex";},600);
}
};
}

// 📖 BOOK
function openBook(){
document.getElementById("bookCover").style.display="none";
document.getElementById("bookContainer").style.display="block";
$("#book").turn({width:window.innerWidth*0.9,height:window.innerHeight*0.7,autoCenter:true,display:"double"});
let step=0;
document.getElementById("book").onclick=function(){
step++;
if(step===1){$("#book").turn("next");}
else if(step===2){$("#book").turn("next");}
else if(step===3){
$("#book").turn("page",1);
setTimeout(()=>{
document.getElementById("bookContainer").style.display="none";
document.getElementById("finalPopup").style.display="flex";
},600);
}
};
}
