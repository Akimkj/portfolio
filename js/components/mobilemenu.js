function clickmenu() {
    if (areamenu.style.display == 'block') {
        areamenu.style.display = 'none'
    }
    else {
        areamenu.style.display = 'block'
    }
}

function mudarTamanho() {
    if (window.innerWidth >= 768) {
        areamenu.style.display = 'block'
    }
    else {
        areamenu.style.display = 'none'
    }
}