const $participants_container = document.querySelector('.tournament-participants-container')
const $participants_slider = document.querySelector('.participants-slider')
const $participants_slider_cards = document.querySelectorAll('.participants-card')
const $participants_slider_item = document.querySelector('.participants-card')

const $participants_slider_prev = document.querySelector('.switch-slider-button.participants.prev')
const $participants_slider_next = document.querySelector('.switch-slider-button.participants.next')

const $participants_current_slider = document.querySelector('.participants-switch-slider__count.current-slider')
const $participants_current_all_sliders = document.querySelector('.participants-switch-slider__count.all-slider')

let count = 1;

$participants_current_all_sliders.innerText = $participants_slider_cards.length

const carouselChildrens = [...$participants_slider.children]

let cardPerView = Math.round($participants_slider.offsetWidth / $participants_slider_item.offsetWidth)

carouselChildrens.slice(-cardPerView).reverse().forEach(card => {
    $participants_slider.insertAdjacentHTML('afterbegin', card.outerHTML)
})

carouselChildrens.slice(0, cardPerView).reverse().forEach(card => {
    $participants_slider.insertAdjacentHTML('beforeend', card.outerHTML)
})

function sliderNext() {
    $participants_slider.scrollLeft += $participants_slider_item.offsetWidth
    count++
    $participants_current_slider.textContent = count
    if (count > $participants_slider_cards.length) {
        $participants_current_slider.textContent = count = 1
    }
}

$participants_slider_next.addEventListener('click', () => sliderNext())

$participants_slider_prev.addEventListener('click', () => {
    $participants_slider.scrollLeft += -$participants_slider_item.offsetWidth
    count--
    $participants_current_slider.textContent = count
    if (count === 0) {
        $participants_current_slider.textContent = count = $participants_slider_cards.length
    }
})

let timeoutId;

const autoPlay = () => timeoutId = setTimeout(() => sliderNext(), 4000)
autoPlay()

const infiniteScroll = () => {
    if ($participants_slider.scrollLeft === 0) {
        $participants_slider.classList.add('no-transition')
        $participants_slider.scrollLeft = $participants_slider.scrollWidth - (2 * $participants_slider.offsetWidth)
        $participants_slider.classList.remove('no-transition')

    } else if (Math.ceil($participants_slider.scrollLeft) === $participants_slider.scrollWidth - $participants_slider.offsetWidth) {
        $participants_slider.classList.add('no-transition')
        $participants_slider.scrollLeft = $participants_slider.offsetWidth
        $participants_slider.classList.remove('no-transition')
    }

    clearTimeout(timeoutId)
    if (!$participants_container.matches(':hover')) autoPlay()
}

$participants_slider.addEventListener('scroll', infiniteScroll)
$participants_container.addEventListener('mouseenter', () => clearTimeout(timeoutId))
$participants_container.addEventListener('mouseleave', autoPlay)