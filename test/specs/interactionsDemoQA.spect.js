const Page = require('../pageobjects/page');

describe('Interactions Module Test Suite', () => {
    const page = new Page();

    before(async () => {
        await page.open();
        // const cookies = await browser.getCookies();
        // console.log('Cookies actuales:', cookies);
    });

    it('should go to interactions and drag and drop an element', async () => {
        const goToInteractions = await $('//*[@id="app"]/div/div/div[2]/div/div[5]/div/div[2]');
        await goToInteractions.waitForExist();
        await goToInteractions.scrollIntoView();
        await goToInteractions.click();

        const goToDroppable = await $('//li[contains(.//span/text(), "Droppable")]');
        await goToDroppable.waitForExist();
        await goToDroppable.scrollIntoView();
        await goToDroppable.click();

        const draggableElement = await $('#draggable');
        const droppableElement = await $('#droppable');
        const validationElement = await $('//div[@id="simpleDropContainer"]//div[@id="droppable"]//p[text()="Dropped!"]');

        await draggableElement.waitForExist();
        await draggableElement.dragAndDrop(droppableElement);
        await browser.pause(3000);

        const validationText = await validationElement.getText();
        expect(validationText).toBe('Dropped!');
    });

    it('should double click an element and move to another tab', async () => {
        const goToSelectable = await $('//span[contains(@class, "text") and contains(text(), "Selectable")]');
        await goToSelectable.waitForExist();
        await goToSelectable.scrollIntoView();
        await goToSelectable.click();

        const doubleClickElement = await $('//li[contains(@class, "mt-2 list-group-item list-group-item-action") and contains(text(), "Cras justo odio")]');
        await doubleClickElement.waitForExist();
        await doubleClickElement.scrollIntoView();

        await doubleClickElement.doubleClick();

        const gridTab = await $('a#demo-tab-grid');
        await gridTab.scrollIntoView();
        await gridTab.moveTo();
        await gridTab.click();

        const gridElement = await $('//li[contains(@class, "list-group-item list-group-item-action") and contains(text(), "One")]');
        expect(await gridElement.isDisplayed()).toBe(true);
    });
    it('should validate the existence of "panoramaId" cookie or create it', async () => {
        const cookies = await browser.getCookies();
        const panoramaIdCookie = cookies.find(cookie => cookie.name === 'panoramaId');

        if (!panoramaIdCookie) {
            await browser.setCookie({
                name: 'panoramaId',
                value: 'ae931c4ce6c34023e377a99f0ba44945a702c356101c062e7ee0b75476047bcf',
                domain: '.demoqa.com',
                path: '/',
                expiry: 1699620870,
                sameSite: 'Lax',
                secure: false
            });
        }
    console.log(panoramaIdCookie)
    });
});

