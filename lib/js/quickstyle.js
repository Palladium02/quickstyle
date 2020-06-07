class QuickstyleSidemenu {
    constructor(menu) {
        this.menu = menu;
        this.floatingInput = document.querySelector('.qs.floating-input');
    }

    toggle() {
        this.menu.classList.toggle('active');
        if(this.floatingInput) {
            console.log(this.floatingInput);
            this.floatingInput.classList.toggle('menu');
        }
    }
}

window['QuickstyleSidemenu'] = new QuickstyleSidemenu(document.querySelector('.qs.sidemenu'));