class WorldIndicesPage {
    
    public get priceTable () {
        return $('table[class="table tableFlex table-striped footable footable-1 breakpoint-md"]');
    }

    public get IBEX35Row () {
        return $('//*[@id="main-wrap"]/section[5]/div/div/div[2]/div/div[1]/div/section/table/tbody/tr[1]/td[2]/span');
    }

    public get BE20Row () {
        return $('//*[@id="main-wrap"]/section[5]/div/div/div[2]/div/div[1]/div/section/table/tbody/tr[4]/td[2]/span')
    }

    public get UK100Row() {
        return $('//*[@id="main-wrap"]/section[5]/div/div/div[2]/div/div[1]/div/section/table/tbody/tr[7]/td[2]/span')
    }

}

export default new WorldIndicesPage();
