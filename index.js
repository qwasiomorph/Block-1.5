// import { Navigation, Pagination } from "swiper"

const expandButton = document.querySelector('.more-button')
const brandList = document.querySelector('.brand-list')
const moreButtonIcon = document.querySelector(".more-button__icon")
expandButton.addEventListener('click', (e)=>{
    e.preventDefault()
    e.stopPropagation()
    if(!brandList.classList.contains('expanded')) {
        brandList.classList.add('expanded')
        expandButton.children[1].textContent = 'Скрыть'
        moreButtonIcon.classList.add("active")
    } else {
        brandList.classList.remove('expanded')
        moreButtonIcon.classList.remove("active")
        expandButton.children[1].textContent = 'Показать всё'
    }
})

if(window.innerWidth < 400) {
    const swiper = new Swiper('.swiper', {
        // modules: [Navigation, Pagination],
        // Default parameters
        pagination: {
            el: ".swiper-pagination",
        },
        slidesPerView: 1,
        spaceBetween: 10,
        
        // Responsive breakpoints
        breakpoints: {
          // when window width is >= 320px
          320: {
            slidesPerView: 1,
            spaceBetween: 20
          },
        },
        
    })
}



