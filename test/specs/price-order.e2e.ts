import LandingPage from '../pageobjects/landing.page.js';
import WorldIndicesPage from '../pageobjects/world-indices.page.js';

describe('Price order', () => {
    it('Should order prices by descending order', async () => {
        await LandingPage.open();
        await LandingPage.clickHamburgerMenu();
        await LandingPage.clickMarketTag();
        await LandingPage.clickMarketSubTag();
        
        const IBEXprice = await WorldIndicesPage.IBEX35Row.getText();
        const BEprice = await WorldIndicesPage.BE20Row.getText();
        const UKprice = await WorldIndicesPage.UK100Row.getText();
        const prices = [parseFloat(IBEXprice), parseFloat(BEprice), parseFloat(UKprice)];
        const sortPrices = prices.sort((a, b) => a - b);
        
        console.log('Result', sortPrices);
        
    })
       
});

