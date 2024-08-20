function toggleMode() {
    const html = document.documentElement
    html.classList.toggle("light")
    const img = document.querySelector("#profile img")
    if (html.classList.contains("light")) {
        img.setAttribute("src", 'assets/img/avatar-light.png')
    } else {
        img.setAttribute("src", "assets/img/avatar.png")
    }
}

document.querySelectorAll('a[href="#"], button').forEach(function(element) {
    element.addEventListener('click', function(event) {
        event.preventDefault();
        window.history.pushState({}, document.title, window.location.pathname);
    });
});