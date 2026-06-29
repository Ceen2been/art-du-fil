const slider = document.getElementById("slider-b_a");
const container = document.getElementById("container-b_a");

slider.addEventListener("input", () => {
    container.style.setProperty("--position", `${slider.value}%`);
});