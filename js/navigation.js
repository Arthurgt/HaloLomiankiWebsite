document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.querySelector('.navbar-collapse')

    function hideNavigationAfterClick() {
        navbar.classList.remove('show')
    }

    navbar.addEventListener('click', hideNavigationAfterClick)
}) 