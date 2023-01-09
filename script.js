const h1 = document.querySelector("h1");
const changeColor = () => {
  h1.style.color = "yellow";
};

h1.addEventListener("click", changeColor);
