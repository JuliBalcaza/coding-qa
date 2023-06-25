 class LandingPage {
    
    public get hamburgerMenu () {
        return $('button[class="                               offCanvas-toggler                               btn                               p-1                               bg-transparent                               btn-outline-dark                               text-body                             "]');
    }

    async clickHamburgerMenu() {
        await this.hamburgerMenu.click();
    }

    public get marketSideBarTag () {
        return $('div[class="item"] > a[href="#MercadosyCotizaciones"]');
        
    }

    async clickMarketTag () {
        await this.marketSideBarTag.click();
    }

    public get marketSideBarSubTag () {
        return $('li >  a[href="/indices-mundiales/"]:first-child');
    }

    async clickMarketSubTag () {
        (await this.marketSideBarSubTag).click();
    }

    public open () {
        return browser.url(`https://www.eleconomista.es/`)
    }

}

export default new LandingPage();
