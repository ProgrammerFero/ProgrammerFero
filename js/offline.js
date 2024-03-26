let reload = document.querySelector(".reload");

window.onload = function () {
    if (window.navigator.onLine) {
        window.location = history.back() ;
    } else {
    }
}

window.addEventListener('online', () => window.location = history.back() )

reload.addEventListener("click" , function() {
    window.location.reload()
})