const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

nameInput.addEventListener('input', (event) => {

    const trimmedValue = event.currentTarget.value.trim()
    const res = !trimmedValue ? `Anonymous` : trimmedValue
    nameOutput.textContent = res
    console.log(nameOutput);

});