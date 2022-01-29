const links = document.querySelectorAll('.products__link')
const accordion = document.querySelector('.products-accordion')

links.forEach((link) => {
    link.addEventListener('click', function openAcc() {
        accordion.classList.toggle('products-accordion_active')
    })
})