import colorCardTemplate from "./templates/color.hbs"
import colorCardData from "./data/colorpicker.json"

const palette = document.querySelector(".palette");
const colorCard = colorCardTemplate(colorCardData);
palette.innerHTML = colorCard

palette.addEventListener("click", (e) => {
    if (e.target.className == "color-swatch") {
        document.body.style.background = `${e.target.dataset.hex}`
    };
});
