        // // Phone 
         var input = document.querySelector("#phone");
        var iti = window.intlTelInput(input, {
            initialCountry: "auto",
            separateDialCode: true,
            nationalMode: false,
            preferredCountries: ["us", "ca"],
            utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.min.js"
        });
        input.addEventListener("input", function () {
            input.value = input.value.replace(/[^0-9]/g, "").slice(0, 12);
        });