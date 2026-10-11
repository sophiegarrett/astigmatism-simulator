(function() {

    // Color scheme selection
    const colorSchemeButtons = document.querySelectorAll('input[name="color-scheme"]');

    colorSchemeButtons.forEach(colorSchemeButton => {
        colorSchemeButton.addEventListener('change', function() {
            document.body.setAttribute('color-scheme', this.value);
        });
    });

})();