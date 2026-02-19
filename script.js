const slides=document.getElementById("slides");
const total=document.querySelectorAll(".slide").length;
const dotsBox=document.getElementById("dots");

let current=0;
let navLocked=false;

/* DOTS */

for(let i=0;i<total;i++){
  const d=document.createElement("div");
  d.classList.add("dot");
  if(i===0)d.classList.add("active");
  d.onclick=()=>goTo(i);
  dotsBox.appendChild(d);
}

const dots=document.querySelectorAll(".dot");

function goTo(i){
  current=i;
  slides.style.transform=`translateX(-${i*100}vw)`;
  dots.forEach(x=>x.classList.remove("active"));
  dots[i].classList.add("active");
}

/* SCROLL */

window.addEventListener("wheel",e=>{
  if(navLocked)return;
  if(e.deltaY>0 && current<total-1)current++;
  else if(e.deltaY<0 && current>0)current--;
  goTo(current);
});

/* THEME */

function toggleTheme(){
  document.body.classList.toggle("dark");
  document.body.classList.toggle("light");

  const btn=document.querySelector(".theme-btn");
  btn.textContent=document.body.classList.contains("dark")?"☀️":"🌙";
}

/* PROJECT INTERACTION */

const overlay = document.getElementById("overlayRoot");

tiles.forEach(t => {

  t.onclick = e => {

    e.stopPropagation();
    navLocked = true;

    // Remove focus from others
    tiles.forEach(x => x.classList.remove("focused"));

    // Move tile to overlay
    overlay.appendChild(t);

    t.classList.add("focused");
    grid.classList.add("dimmed");

    title.textContent = t.dataset.title;
    desc.textContent = t.dataset.desc;

    detail.classList.remove("hidden");
  };
});

/* CLOSE */

document.addEventListener("click", () => {

  navLocked = false;

  tiles.forEach(t => {

    t.classList.remove("focused");

    // Move tile back to grid
    grid.appendChild(t);
  });

  grid.classList.remove("dimmed");
  detail.classList.add("hidden");
});

/* CLOSE */

document.addEventListener("click",()=>{
  navLocked=false;
  tiles.forEach(x=>x.classList.remove("focused"));
  grid.classList.remove("dimmed");
  detail.classList.add("hidden");
});
