const slider = document.getElementById("priceSlider");
    const priceValue = document.getElementById("priceValue");

    function updateSliderBackground(value) {
      const percent = (value - slider.min) / (slider.max - slider.min) * 100;
      slider.style.background = `linear-gradient(90deg, #4CAF50 ${percent}%, #ddd ${percent}%)`;
    }

    slider.addEventListener("input", function() {
      priceValue.textContent = this.value;
      updateSliderBackground(this.value);
    });

    // Initialize background
    updateSliderBackground(slider.value);