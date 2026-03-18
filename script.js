// Music elements (optional)
let startMusic=document.getElementById("musicStart");
let openMusic=document.getElementById("musicOpen");
let closeMusic=document.getElementById("musicClose");

// Start with cake visible
let cake=document.getElementById("cake");
let knife=document.getElementById("knife");
let giftBox=document.getElementById("giftBox");
let card=document.getElementById("card");
let cardInner=document.querySelector(".cardInner");
let book=document.getElementById("book");

// Knife drag / slice (simple click demo)
knife.addEventListener("click",()=>{
  cake.classList.add("cut");
  setTimeout(showBasket,1500);
});

// Basket click to toggle items
document.querySelectorAll(".item").forEach(el=>{
  let visible=false;
  el.addEventListener("click",()=>{
    visible=!visible;
    if(visible){el.style.transform="scale(1.5)";}
    else{el.style.transform="scale(1)";}
  });
});

// Card open
document.getElementById("cardBtn").addEventListener("click",()=>{
  card.style.transform="translate(-50%,-50%) scale(1)";
  cardInner.classList.add("flip");
});

// Close card
card.addEventListener("click",()=>{
  cardInner.classList.remove("flip");
  card.style.transform="translate(-150%,-50%) scale(0)";
  setTimeout(()=>{
    card.style.display="none";
    showBook();
  },800);
});

function showBasket(){
  giftBox.style.display="block";
}

function showBook(){
  document.getElementById("cakeScreen").style.display="none";
  book.style.display="block";
}

$("#book").turn({width:900,height:500,autoCenter:true});
$("#book").bind("turning",function(e,page){
  if(page===1){showEnd();}
});

function showEnd(){
  let popup=document.getElementById("endPopup");
  popup.style.display="flex";
  setTimeout(()=>{popup.style.display="none";},3000);
}
