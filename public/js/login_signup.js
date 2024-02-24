const inputboxes = document.querySelectorAll('.input-box');
console.log(inputboxes);

const inputFields = Array.from(inputboxes).map(field => field.children[1]);
console.log(inputFields);

inputFields.forEach(function (input) {
    input.addEventListener('keyup', function () {
        if (this.value !== '') {
            this.classList.add('filled');
        } else {
            this.classList.remove('filled');
        }
    });
});

