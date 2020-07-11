    const modalOverlay = document.querySelector('.modal-overlay')
    const cards = document.querySelectorAll('.card')
    const maximize = document.querySelector('.modal')

    for (let card of cards) {
    card.addEventListener("click", function () {
    const cursoId = card.getAttribute("id")
    window.location.href = `/courses/${cursoId}`
    })}