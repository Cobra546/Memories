window.onload=function(){

document.getElementById("musicStart").play().catch(()=>{});

$("#book").turn({
width:900,
height:500,
autoCenter:true
});

};

// 🔥 CANDLE
function blowCandle(){
document.getElementById("flame").style.display="none";
}

// 🔪 CUT CAKE
function cutCake(){

document.getElementById("cakeScreen").style.display="none";
document.getElementById("giftBox").style.display="block";

}

// 🎁 ITEMS
function toggleItem(el){
el.classList.toggle("active");
}

// 💌 CARD
function showCard(){

let card=document.getElementById("card");
card.style.display="block";

card.onclick=function(){
card.style.display="none";
showBook();
};

}

// 📖 BOOK
function showBook(){
document.getElementById("book").style.display="block";
}

// 💥 END
$("#book").bind("turning",function(e,page){

if(page===1){
let end=document.getElementById("endPopup");
end.style.display="flex";

setTimeout(()=>{
end.style.display="none";
},3000);
}

});
