(function() {
    function settingCSSVariables(event) {
        const input = document.querySelectorAll('input');
        input.forEach(element => {
            if (event.target === element) {
                const value = event.target.value;
                const id = event.target.getAttribute('id');
                const unit = event.target.getAttribute('data-sizing') || '';

                document.querySelector('body').style.setProperty(`--${id}`, `${value + unit}`);
            }
        });
    }
    document.querySelector('.controls').addEventListener('change', settingCSSVariables);
    document.querySelector('.controls').addEventListener('mousemove', settingCSSVariables);
})();