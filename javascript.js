const container = document.querySelector(".container");

function createGrid(rows) {
  for (i = 0; i < rows; i++) {
    for (j = 0; j < 16; j++) {
      const newDiv = document.createElement("div");
      newDiv.classList.add("child");
      container.appendChild(newDiv);
    }
  }
}

createGrid(16);
const childs = document.querySelectorAll(".child");
for (i=0 ; i<childs.length ; i++){
    childs[i].addEventListener("mouseover",function(e) {
        e.target.classList.add("black");
    })
}