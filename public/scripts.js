    const modalOverlay = document.querySelector('.modal-overlay')
    const cards = document.querySelectorAll('.card')
    const maximize = document.querySelector('.modal')

    for (let card of cards) {
    card.addEventListener("click", function () {
    const cursoId = card.getAttribute("id")

    modalOverlay.classList.add('active')

    modalOverlay.querySelector("iframe").src = `https://rocketseat.com.br/${cursoId}`



    })



    }
    document.querySelector(".close-modal").addEventListener("click", function () {
    modalOverlay.classList.remove("active")
    maximize.classList.remove("maximize")
    })
    document.querySelector(".maximize-modal").addEventListener("click", function () {
    maximize.classList.contains("maximize")
    maximize.classList.add("maximize")
    })

