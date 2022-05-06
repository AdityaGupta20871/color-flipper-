const colors = ["green","red","rgba(113,112,200)","#ffffff"]
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener('click',function(){
let randomNumber = Math.floor(Math.random()*colors.length);
document.body.style.backgroundColor = colors[randomNumber];
color.textContent = colors[randomNumber];

}
);

