const container = document.querySelector(".container");

function createGrid(rows) {
  for (i = 0; i < rows; i++) {
    for (j = 0; j < rows; j++) {
      const newDiv = document.createElement("div");
      newDiv.classList.add("child");
      container.appendChild(newDiv);
    }
  }
}
createGrid(16);

const childs = document.querySelectorAll(".child");
for (i = 0; i < childs.length; i++) {
  childs[i].addEventListener("mouseover", function (e) {
    e.target.classList.add("black");
  });
}

const button = document.querySelector(".squares");
button.addEventListener("click", function () {
  const childs = document.querySelectorAll(".child");
  for (i = 0; i < childs.length; i++) {
    childs[i].remove();
  }
  let numberOfSquares = prompt("Enter number of desired squares");
  if (parseInt(numberOfSquares) > 100) {
    alert("Maximum number of squares is 100");
  } else {
    createGrid(numberOfSquares);
    const newChilds = document.querySelectorAll(".child");
    for (i = 0; i < newChilds.length; i++) {
      newChilds[i].style.width = 960 / numberOfSquares + "px";
      newChilds[i].style.height = 960 / numberOfSquares + "px";
    }
    for (i = 0; i < newChilds.length; i++) {
      newChilds[i].addEventListener("mouseover", function (e) {
        e.target.classList.add("black");
      });
    }
  }
});
