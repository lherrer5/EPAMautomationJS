// const LoginPage = require('../pageobjects/login.page');

// describe('Search Module Test Suite', () => {
//     before(async () => {
//         await LoginPage.open();
//         await LoginPage.login('lina_h64', 'Lina2023@');
//     });

//     it('should search an existing author', async () => {
//         const goToStoreButton = await $('#gotoStore');
//         await goToStoreButton.waitForExist();
//         await goToStoreButton.scrollIntoView();
//         await goToStoreButton.click();

//         const searchBox = $('#searchBox');
//         await searchBox.waitForExist();
//         await searchBox.setValue('Addy Osmani');

//         await browser.execute(() => {
//             const searchBox = document.querySelector('#searchBox');
//             searchBox.dispatchEvent(new Event('input'));
//         });

//         const searchResult = await browser.$('//div[@class="rt-td" and contains(text(), "Addy Osmani")]');
//         await searchResult.waitForDisplayed();
//         await searchResult.scrollIntoView();

//         expect(await searchResult).toHaveTextContaining('Addy Osmani');
//     });

//     it('should open the book details page and verify the book title', async () => {
//         const bookLink = await browser.$('a[href="/books?book=9781449331818"]');
    
//         await browser.waitUntil(async () => {
//             return bookLink.isExisting();
//         }, {
//             timeout: 5000,
//             timeoutMsg: 'Book link not available after waiting'
//         });
    
//         await bookLink.click();

//         const bookTitle = await $('#userName-value');
        
//         await browser.waitUntil(async () => {
//             return bookTitle.isExisting();
//         }, {
//             timeout: 5000,
//             timeoutMsg: 'Book title is not present'
//         });

//         expect(await bookTitle).toHaveTextContaining('Learning JavaScript Design Patterns');
//     });
    
// });

