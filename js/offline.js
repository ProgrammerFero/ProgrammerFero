let reload = document.querySelector(".reload");

window.onload = function () {
    if (window.navigator.onLine) {
        window.location = history.back() ;
    } else {
        console.log("Offline");
    }
}

window.addEventListener('online', () => window.location = history.back() )

reload.addEventListener("click" , function() {
    window.location.reload()
})