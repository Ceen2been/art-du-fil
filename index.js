const slider = document.getElementById("slider-b_a");
const container = document.getElementById("container-b_a");

slider.addEventListener("input", () => {
    container.style.setProperty("--position", `${slider.value}%`);
});


const LENS_SIZE = 120;
document.querySelectorAll("[data-zoom]").forEach((container) => {
    const lens = container.querySelector(".zoom-lens");
    if (!lens) return;

    const zoom = parseFloat(container.dataset.zoom) || 2;

    container.style.cursor = "none";

    container.addEventListener("mousemove", (e) => {
        const rect = container.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        // Find which image is under the cursor
        // Works for before/after sliders AND single-image containers
        let activeImg = null;

        const sliderPosition = container.style.getPropertyValue("--position");

        if (sliderPosition) {
            // Before/after mode: pick the image based on slider position
            const positionPx = (parseFloat(sliderPosition) / 100) * rect.width;
            const imgs = container.querySelectorAll("img");
            activeImg = x < positionPx ? imgs[0] : imgs[imgs.length - 1];
        } else {
            // Single image mode: just grab the first img found
            activeImg = container.querySelector("img");
        }

        if (!activeImg) return;

        const bgW = rect.width * zoom;
        const bgH = rect.height * zoom;
        const bgX = -(x * zoom - LENS_SIZE / 2);
        const bgY = -(y * zoom - LENS_SIZE / 2);

        lens.style.backgroundImage = `url('${activeImg.src}')`;
        lens.style.backgroundSize = `${bgW}px ${bgH}px`;
        lens.style.backgroundPosition = `${bgX}px ${bgY}px`;

        const lensX = Math.min(Math.max(x - LENS_SIZE / 2, 0), rect.width - LENS_SIZE);
        const lensY = Math.min(Math.max(y - LENS_SIZE / 2, 0), rect.height - LENS_SIZE);

        lens.style.left = `${lensX}px`;
        lens.style.top = `${lensY}px`;
        lens.style.display = "block";
    });

    container.addEventListener("mouseleave", () => {
        lens.style.display = "none";
        container.style.cursor = "";
    });
});