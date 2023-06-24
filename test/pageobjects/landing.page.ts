import { ChainablePromiseElement } from 'webdriverio';

import Page from './page.js';

class LandingPage extends Page {
    
    public get hamburgerMenu () {
        return $('button[class="                               offCanvas-toggler                               btn                               p-1                               bg-transparent                               btn-outline-dark                               text-body                             "]');
    }

    public get marketSideBarTag () {
        return $('a[href="#MercadosyCotizaciones"]');
    }

    public get marketSideBarSubTag () {
        return $('a[href="/mercados-cotizaciones"]');
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    public async login (username: string, password: string) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    public open () {
        return super.open('login');
    }
}

export default new LandingPage();



