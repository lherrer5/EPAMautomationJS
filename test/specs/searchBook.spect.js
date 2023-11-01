const LoginPage = require('../pageobjects/login.page');

describe('Search Module Test Suite', () => {
    beforeEach(async () => {
        await LoginPage.open();
        await LoginPage.login('lina_h64', 'Lina2023@');
    });

    it('should search an existing author', async () => {
        const goToStoreButton = await $('#gotoStore');
        await goToStoreButton.waitForExist();
        await goToStoreButton.scrollIntoView();
        await goToStoreButton.click();

        const searchBox = $('#searchBox');
        await searchBox.waitForExist();
        await searchBox.setValue('Addy Osmani');

        await browser.execute(() => {
            const searchBox = document.querySelector('#searchBox');
            searchBox.dispatchEvent(new Event('input'));
        });

        const searchResult = await browser.$('//div[@class="rt-td" and contains(text(), "Addy Osmani")]');
        await searchResult.waitForDisplayed();
        await searchResult.scrollIntoView();

        expect(await searchResult).toHaveTextContaining('Addy Osmani');
    });
});