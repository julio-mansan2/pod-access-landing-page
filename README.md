# Desafio Pod Landing Page - Frontend-Mentor

Este é um desafio de uma landing page para a Pod, proposto pelo site Frontend-Mentor.

## Tabela de Conteúdos

- [Visão Geral](#visão-geral)
    - [Imagens](#imagens)
    - [Link da página](#link)
- [Processo](#processo)
    - [Linguagens utilizadas](#linguagens-utilizadas)
    - [O que aprendi](#o-que-aprendi)
    - [Possíveis evoluções](#possíveis-evoluções)
- [Autor](#autor)

## Visão-geral

### Imagens

<br>

````
Versão de Desktop
````

   <img src="./src/design/desktop-design.gif" alt="desktop-design">

<br>

````
Versão Mobile
````

 <img src="./src/design/mobile-design.gif" alt="mobile-design">

<br>

````
Versão Tablet
````

 <img src="./src/design/tablet-design.gif" alt="mobile-design">

### Link

- Página no GitHub Pages: <a href="https://julio-mansan2.github.io/pod-access-landing-page/">Clique aqui!</a>

## Processo

### Linguagens utilizadas

<br>

- Marcações semânticas de HTML5
- Propriedades de customização do CSS3
- Estruturas de JavaScript

<br>

### O que aprendi

<br>

- Validar um campo input:

````javascript

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

````

<br>

### Possíveis evoluções

<br>

- Em razão da facilidade do projeto, seu desenvolvimento se sucedeu sem muitos problemas.

<br>

## Autor

GitHub - <a href="https://github.com/julio-mansan2">julio-mansan2</a> <br>
Front-end Mentor - <a href="https://www.frontendmentor.io/profile/julio-mansan2">julio-mansan2</a> <br>
LinkedIn - <a href="https://www.linkedin.com/in/j%C3%BAlio-a-mansan-3415a7249/">Júlio A.</a> <br>