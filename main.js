const groups = document.querySelectorAll('.group');
const form = document.querySelector('#form');

function validaForm() {
    groups.forEach(inputsGroup => {
        const [inputGroup, msgError] = inputsGroup.children;
        let [input, , image] = inputGroup.children;

        if (input.value === '') {
            image.style.display = 'flex'
            inputGroup.style.border = '1px solid red';
            msgError.style.display = 'flex';

            input.placeholder = '';
        } else {
            image.style.display = 'none'
            inputGroup.style.border = '1px solid black';
            msgError.style.display = 'none';
        }
    })

}