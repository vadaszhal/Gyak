document.getElementById("regForm").addEventListener("submit", function(e) {

            // Remove previously inserted error messages
            var errorElems = document.querySelectorAll(".error");
            errorElems.forEach(function(elem) {
                elem.remove();
            });
            
            // Restore default input backgrounds
            var inputs = this.querySelectorAll("input");
            inputs.forEach(function(input) {
                input.style.backgroundColor = "";
            });

            var isValid = true;

            // E-mail regex check
            var checkPattern = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
            
            // Helper function to insert error message before the input’s container
            function addError(input, message) {
                var error = document.createElement("div");
                error.className = "error";
                error.textContent = "Hibás adat: " + message;
                input.parentNode.insertBefore(error, input.parentNode.firstChild);
                input.style.backgroundColor = "#f99";
            }

            // Validate Név (name): required, 5-30 karakter
            var nameInput = document.getElementById("name");
            var nameVal = nameInput.value.trim();
            if (nameVal === "" || nameVal.length < 5 || nameVal.length > 30) {
                addError(nameInput, "A név 5-30 karakter hosszú kell legyen.");
                isValid = false;
            }
            
            // Validate E-mail: required and match regex
            var emailInput = document.getElementById("email");
            var emailVal = emailInput.value.trim();
            if (emailVal === "" || !checkPattern.test(emailVal)) {
                addError(emailInput, "Érvénytelen e-mail cím.");
                isValid = false;
            }
            
            // Validate Jelszó: required, 6-12 karakter
            var jelszoInput = document.getElementById("jelszo");
            var jelszoVal = jelszoInput.value;
            if (jelszoVal === "" || jelszoVal.length < 6 || jelszoVal.length > 12) {
                addError(jelszoInput, "A jelszó 6-12 karakter hosszú kell legyen.");
                isValid = false;
            }
            
            // Validate Kor: required, numeric, 18-100
            var numberInput = document.getElementById("number");
            var numberVal = parseInt(numberInput.value, 10);
            if (isNaN(numberVal) || numberVal < 18 || numberVal > 100) {
                addError(numberInput, "A kor 18 és 100 közötti szám kell legyen.");
                isValid = false;
            }
            
            // Validate Nem (radio): required
            var radioInputs = document.getElementsByName("radio");
            var radioChecked = false;
            for (var i = 0; i < radioInputs.length; i++) {
                if (radioInputs[i].checked) {
                    radioChecked = true;
                    break;
                }
            }
            if (!radioChecked) {
                // Place error by targeting first radio button container
                addError(radioInputs[0], "Válasszon nemet.");
                isValid = false;
            }
            
            // If any validation fails, prevent form submission.
            if (!isValid) {
                e.preventDefault();
            }
        });