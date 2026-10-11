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
    let filterString = "none";
    let blur = 0;
    let ghosting = 0;
    let halation = 0;

    function updateSymptoms() {
        filterString = "";

        if (blur != 0) {
            filterString += "blur(" + blur/2 + "px) ";
        }
        else {
            filterString = "none";
        }

        document.body.style.filter = filterString;
        controlBox.style.filter = "none";
    }

    // Symptom sliders
    const blurSlider = document.getElementById("blur");
    blurSlider.addEventListener('input', function() {
        blur = this.value;
        updateSymptoms();
    });

})();