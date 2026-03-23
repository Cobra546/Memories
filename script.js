let scene,camera,renderer,model;

// 🎂 INIT CAKE
function initCake(){

scene=new THREE.Scene();

camera=new THREE.PerspectiveCamera(
75,
window.innerWidth/(window.innerHeight*0.6),
0.1,
1000
);

// TOP VIEW
camera.position.set(0,5,0);
camera.lookAt(0,0,0);

renderer=new THREE.WebGLRenderer({alpha:true});
renderer.setSize(window.innerWidth,window.innerHeight*0.6);

document.getElementById("cakeContainer").appendChild(renderer.domElement);

// LIGHT
let light=new THREE.HemisphereLight(0xffffff,0x444444,1);
scene.add(light);

// LOAD MODEL
let loader=new THREE.GLTFLoader();

loader.load("chocolate_cake.glb",(gltf)=>{
model=gltf.scene;
model.scale.set(2,2,2);
scene.add(model);
});

// LOOP
function animate(){
requestAnimationFrame(animate);
renderer.render(scene,camera);
}
animate();

}

// 🚀 START
window.onload=function(){

document.getElementById("musicStart").play().catch(()=>{});

initCake();

$("#book").turn({
width:900,
height:500,
autoCenter:true
});

};

// 🔪 DRAG SYSTEM
let dragging=false;
let knife=document.getElementById("knife");
let line=document.getElementById("cutLine");

knife.onmousedown=()=>dragging=true;

document.onmousemove=(e)=>{
if(!dragging) return;

knife.style.left=e.clientX+"px";
line.style.left=e.clientX+"px";
line.style.opacity=1;
};

document.onmouseup=()=>{
if(!dragging) return;

dragging=false;
splitCake();
};

// 🍰 SPLIT CAKE
function splitCake(){

if(!model) return;

model.traverse((obj)=>{
if(obj.isMesh){

if(obj.position.x<0){
obj.position.x-=1;
obj.rotation.z-=0.2;
}else{
obj.position.x+=1;
obj.rotation.z+=0.2;
}

}
});

setTimeout(()=>{
document.getElementById("cakeScreen").style.display="none";
document.getElementById("giftBox").style.display="flex";
},1500);

}

// 🎁 ITEMS
function toggleItem(el){
el.classList.toggle("active");
}

// 💌 CARD SYSTEM
let cardOpen=false;

function showCard(){

let card=document.getElementById("card");
card.style.transform="translate(-50%,-50%) scale(1)";

let wrapper=document.querySelector(".cardWrapper");
let cover=document.querySelector(".cardCover");

// OPEN
cover.onclick=function(){
wrapper.classList.add("open");
cardOpen=true;
};

// CLOSE
card.onclick=function(){

if(cardOpen){

wrapper.classList.remove("open");
cardOpen=false;

setTimeout(()=>{
card.style.transform="translate(-50%,-150%) scale(0)";
},500);

}

};

}

// 📖 BOOK
function showBook(){

document.getElementById("giftBox").style.display="none";
document.getElementById("book").style.display="block";

}

// 💥 END
$("#book").bind("turning",(e,page)=>{
if(page===1){

let end=document.getElementById("endPopup");
end.style.display="flex";

setTimeout(()=>{
end.style.display="none";
},3000);

}
});
