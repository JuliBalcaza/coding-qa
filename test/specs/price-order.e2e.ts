import LandingPage from '../pageobjects/landing.page.js';
import WorldIndicesPage from '../pageobjects/world-indices.page.js';

describe('Price order', () => {
    it('Should order prices by descending order', async () => {
        await LandingPage.open();
       await LandingPage.clickHamburgerMenu();
       await LandingPage.clickMarketTag();
       await LandingPage.clickMarketSubTag();
    })
       
});

