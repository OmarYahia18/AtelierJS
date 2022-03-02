const randomColor = () =>
   '#'+Math.floor(Math.random()*16777215).toString(16);
const clickColor = (element) => {
    element.addEventListener(
        "click",
        (e) => (e.target.style.color = randomColor())
    );
};

clickColor(document.querySelector("ol"))