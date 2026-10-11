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

        filteredSections.forEach(section => {
            section.style.filter = filterString;
        });
    }

    // Symptom sliders
    const blurSlider = document.getElementById("blur");
    blurSlider.addEventListener('input', function() {
        blur = this.value;
        updateSymptoms();
    });

})();