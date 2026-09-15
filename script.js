const petals = document.getElementById("petals");
const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const question = document.querySelector(".question-card");
const official = document.getElementById("official");
const toast = document.getElementById("toast");

const symbols = ["💗","♡","♥","✦","🌸"];
for(let i=0;i<34;i++){
  const p=document.createElement("span");
  p.className="petal";
  p.textContent=symbols[i%symbols.length];
  p.style.left=Math.random()*100+"%";
  p.style.animationDuration=(7+Math.random()*9)+"s";
  p.style.animationDelay=(-Math.random()*12)+"s";
  p.style.fontSize=(12+Math.random()*17)+"px";
  petals.appendChild(p);
}

function moveNo(){
  const area=document.getElementById("choiceArea");
  const maxX=area.clientWidth-90, maxY=area.clientHeight-45;
  noBtn.style.left=Math.max(8,Math.random()*maxX)+"px";
  noBtn.style.top=Math.max(8,Math.random()*maxY)+"px";
  noBtn.style.transform="none";
  toast.textContent=["Nice try 😌","That button is shy 🙈","Nope, catch me first 😭","The universe said YES 💗"][Math.floor(Math.random()*4)];
  toast.classList.add("show");
  setTimeout(()=>toast.classList.remove("show"),900);
}
noBtn.addEventListener("mouseenter",moveNo);
noBtn.addEventListener("touchstart",(e)=>{e.preventDefault();moveNo()});
noBtn.addEventListener("click",moveNo);

yesBtn.addEventListener("click",()=>{
  question.classList.add("hidden");
  official.classList.remove("hidden");
  localStorage.setItem("proposalResponse",JSON.stringify({answer:"yes",time:new Date().toISOString()}));
  window.history.replaceState({}, "", "#yes");
});
document.getElementById("again").addEventListener("click",()=>{
  official.classList.add("hidden");
  question.classList.remove("hidden");
  noBtn.style.left="calc(50% + 115px)";
  noBtn.style.top="51%";
  noBtn.style.transform="translateY(-50%)";
  window.history.replaceState({}, "", location.pathname);
});
