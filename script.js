let startMusic = document.getElementById("musicStart");
let openMusic = document.getElementById("musicOpen");
let closeMusic = document.getElementById("musicClose");

window.onload = function(){

// Start music (web open)
startMusic.play().catch(()=>{});

$("#book").turn({
width:900,
height:500,
autoCenter:true
});

// When book starts turning (open feel)
$("#book").bind("turning", function(){

if(openMusic.paused){
startMusic.pause();
openMusic.play();
}

});

// When reach last page (end feel)
$("#book").bind("turned", function(e, page){

let total = $("#book").turn("pages");

if(page == total){
openMusic.pause();
closeMusic.play();
}

});

};
