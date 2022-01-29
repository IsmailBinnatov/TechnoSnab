function burgerMenu() {
    const menuBtn = document.querySelector('.burger-menu')
    const menu = document.querySelector('.mobile-menu')

    menuBtn.addEventListener('click', () => {
        menu.classList.toggle('visible')
    })
}

burgerMenu()