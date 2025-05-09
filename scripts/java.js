function validateForm() {
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            const age = document.getElementById('age').value;
            const comments = document.getElementById('comments').value;
            const gender = document.querySelector('input[name="gender"]:checked');

            if (name.length < 10) {
                alert('A névnek legalább 10 karakter hosszúnak kell lennie!');
                return false;
            }

            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(email)) {
                alert('Kérjük, adjon meg egy érvényes e-mail címet!');
                return false;
            }

            const phonePattern = /^\+?[0-9]+$/;
            if (!phonePattern.test(phone)) {
                alert('A telefonszám csak számokat és opcionálisan "+" jelet tartalmazhat!');
                return false;
            }

            if (age < 0 || age > 99) {
                alert('Az életkornak 0 és 99 között kell lennie!');
                return false;
            }

            if (!gender) {
                alert('Kérjük, válassza ki a nemét!');
                return false;
            }

            if (comments.length < 10) {
                alert('A megjegyzésnek legalább 10 karakter hosszúnak kell lennie!');
                return false;
            }

            alert('Köszönjük a regisztrációt!');
            document.getElementById('registrationForm').reset();
            return false;
        }

        function resetForm() {
            document.getElementById('registrationForm').reset();
        }