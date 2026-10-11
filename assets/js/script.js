(function() {

    // Control box
    const controlBox = document.getElementById("control-box");

    // Color scheme selection
    const colorSchemeButtons = document.querySelectorAll('input[name="color-scheme"]');

    colorSchemeButtons.forEach(colorSchemeButton => {
        colorSchemeButton.addEventListener('change', function() {
            document.body.setAttribute('color-scheme', this.value);
        });
    });


    // Symptom filters
    const filteredSections = document.querySelectorAll(".filtered");

    let filterString = "none";
    let blurString = "";
    let ghostingString = "";
    let halationString = "";

    function updateSymptoms() {
        filterString = blurString + ghostingString + halationString;

        if (!filterString) {
            filterString = "none";
        }

        filteredSections.forEach(section => {
            section.style.filter = filterString;
        });
    }


    // Symptom sliders
    const blurSlider = document.getElementById("blur");
    blurSlider.addEventListener('input', function() {
        if (this.value == 0) {
            blurString = "";
        }
        else {
            blurString = "blur(" + this.value/2 + "px) ";
        }
        updateSymptoms();
    });

    const ghostingSlider = document.getElementById("ghosting");
    ghostingSlider.addEventListener('input', function() {
        if (this.value == 0) {
            ghostingString = "";
        }
        else {
            ghostingString = "drop-shadow(" + this.value + "px " + this.value + "px) ";
        }
        updateSymptoms();
    });

})();