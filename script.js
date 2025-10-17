let min_slider = document.querySelector("#min");
let max_slider = document.querySelector("#max");
let minval_disp = document.querySelector("#minval");
let maxval_disp = document.querySelector("#maxval");

// Update min slider
min_slider.addEventListener("input", () => {
  let minVal = parseInt(min_slider.value);
  let maxVal = parseInt(max_slider.value);

  if (minVal >= maxVal) {
    minVal = maxVal - 100; // prevent crossing
    min_slider.value = minVal;
  }

  minval_disp.textContent = "Rs. " + minVal;
});

// Update max slider
max_slider.addEventListener("input", () => {
  let minVal = parseInt(min_slider.value);
  let maxVal = parseInt(max_slider.value);

  if (maxVal <= minVal) {
    maxVal = minVal + 100; // prevent crossing
    max_slider.value = maxVal;
  }

  maxval_disp.textContent = "Rs. " + maxVal;
});
