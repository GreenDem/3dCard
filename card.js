const cards = document.querySelectorAll('.card')

cards.forEach(card => {
    card.addEventListener('mousemove', e => {
        let cardRect = card.getBoundingClientRect()

        let x = e.clientX - cardRect.x
        let y = e.clientY - cardRect.y


        let midCardWidth = cardRect.width / 2
        let midCardHeight = cardRect.height / 2

        let angleY = -(x - midCardWidth) / 8  //a teste selon la taille
        let angleX = (y - midCardHeight) / 8

        card.children[0].style.transform = `rotateX(${angleX}deg) rotateY(${angleY}deg) scale(1.1)`

    })
    card.addEventListener('mouseleave', () => {
        card.children[0].style.transform = "rotateX(0) rotateY(0)"
    })
});

