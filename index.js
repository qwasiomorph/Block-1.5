// import { Navigation, Pagination } from "swiper"

const expandButton = document.querySelector('.more-button')
const brandList = document.querySelector('.brand-list')
const moreButtonIcon = document.querySelector(".more-button__icon")
expandButton.addEventListener('click', (e)=>{
    e.preventDefault()
    e.stopPropagation()
    brandList.classList.toggle('expanded')
    moreButtonIcon.classList.toggle("active")
    if(moreButtonIcon.classList.contains("active")) {
        expandButton.children[1].textContent = 'Скрыть'
    } else {
        expandButton.children[1].textContent = 'Показать всё'
    }
})

if(window.innerWidth < 768) {
    const swiper = new Swiper('.swiper', {
        // modules: [Navigation, Pagination],
        // Default parameters
        pagination: {
            el: ".swiper-pagination",
            clickable: true
        },
        slidesPerView: 1,
        spaceBetween: 10,
        keyboard: {
            enabled: true,
            onlyInViewport: false,
        },
        // Responsive breakpoints
        breakpoints: {
          // when window width is >= 320px
          320: {
            slidesPerView: 1,
            spaceBetween: 20
          },
          600: {
            slidesPerView: 2,
            spaceBetween: 300
          }
        },
        
    })
}



