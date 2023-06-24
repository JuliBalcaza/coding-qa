import { ChainablePromiseElement } from 'webdriverio';
class WorldIndicesPage {
    
    public get priceTable () {
        return $('table[class="table tableFlex table-striped footable footable-1 breakpoint-md"]');
    }

    public get IBEX35Row () {
        return $('td[contains(.,"IBEX 35")]/following-sibling::td[1]/descendant::span')
    }

    public get BE20Row () {
        return $('td[contains(.,"BE 20")]/following-sibling::td[1]/descendant::span')
    }

    public get UK100Row() {
        return $('td[contains(.,"UK 100")]/following-sibling::td[1]/descendant::span')
    }

}

export default new WorldIndicesPage();
