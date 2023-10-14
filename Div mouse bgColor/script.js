const box = document.querySelector("#box");
let x,
  y = 0;
box.addEventListener("mousemove", (event) => {
  x = event.clientX - box.getBoundingClientRect().left;
  y = x < (box.getBoundingClientRect().width / 2)
  if (y) {
    box.style.backgroundColor = "red";
  } else {
    box.style.backgroundColor = "blue";
  }


// gsap.utlis.mapRange(0,x,255,0,);
});
box.addEventListener("mouseleave", () => {
  box.style.backgroundColor = "";
});
