//navbar scroll effect
const navBar = document.querySelector('.navbar')
window.addEventListener("scroll", e => {
    if(window.scrollY <= 20){
        navBar.classList.remove('navbar-scroll')
        navBar.classList.add('navbar-dark')
    }else{
        navBar.classList.add('navbar-scroll')
        navBar.classList.remove('navbar-dark')
    }
})

//mobile collaps issue
const links = document.querySelectorAll('.navbar .nav-link')

links.forEach(link => {
    link.addEventListener('click', e => {
        document.querySelector('.navbar-toggler').click()
    })
})