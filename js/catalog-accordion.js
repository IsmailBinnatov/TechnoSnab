function accordionOpen() {
    const links = document.querySelectorAll('.products__link')
    const accordion = document.querySelectorAll('.products-accordion')

    for (let i = 0; i < links.length; i++) {
        links[i].addEventListener('click', function openAcc(event) {
            event.preventDefault()
            accordion[i].classList.toggle('products-accordion_active')
        })
    }
}

accordionOpen()