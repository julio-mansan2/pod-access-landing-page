const inputEmail = document.querySelector('#email')
const inputSubmit = document.querySelector('#submit')
const errorMessage = document.querySelector('.error')

inputSubmit.addEventListener('click', function () {
    event.preventDefault()
    if (inputEmail.validity.valid === false) {
        errorMessage.innerHTML = 'Oops! Check your email'
        inputEmail.style.border = '1px solid var(--error-red)'
    } else if (inputEmail.validity.valid === true) {
        errorMessage.innerHTML = ''
        inputEmail.style.border = ''
    }

    if (inputEmail.value === '') {
        errorMessage.innerHTML = 'Please, insert a email address'
        inputEmail.style.border = '1px solid var(--error-red)'
    } 
})