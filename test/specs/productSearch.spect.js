const { expect, browser, $ } = require ('@wdio/globals');

//TASK 1
// //Product Details 
// describe('Product Details scenario', ()=> {
//     it('should click on a product and display its description', async () => {
//         await browser.url(`https://www.saucedemo.com/v1/`)
//         await $('#user-name').setValue('standard_user')
//         await $('#password').setValue('secret_sauce')
//         await $('.btn_action[type="submit"]').click()

//         await $('//*[@id="item_0_title_link"]').click()
//         const descriptionText = await $('//*[@id="inventory_item_container"]').isDisplayed()
//         await expect(descriptionText).toBe(true);
//         //other way
//         // await $('//*[@id="item_0_title_link"]/div').click()
//         // const descriptionText = await $('//*[@id="inventory_item_container"]/div/div/div/div[2]').getText()
//         // await expect(descriptionText).not.toEqual('');
//     })
// })

// //Shopping Cart Existence 
// describe('Shopping Cart Existence Scenario', () => {
//     it('should verify the existence of the shopping cart', async () => {
//         await browser.url('https://www.saucedemo.com/v1/');
//         await $('#user-name').setValue('standard_user');
//         await $('#password').setValue('secret_sauce');
//         await $('.btn_action[type="submit"]').click();

//         const carAvailable =await $('#shopping_cart_container').isExisting()
//         await expect(carAvailable).toBe(true);
//     });
// });


//TASK 2
//Product Details 
describe('Product Details scenario', ()=> {
    it('should click on a product and display its description', async () => {
        await browser.url(`https://www.saucedemo.com/v1/`)
        await $('#user-name').setValue('standard_user')
        await $('#password').setValue('secret_sauce')
        const waitClick = (elem) => {
            elem.waitForClickable({ timeout: 5000 })
            elem.click();
        }
        waitClick($('.btn_action[type="submit"]'))
        //waitClick($('//*[@id="item_0_title_link"]'))
        await $('//*[@id="item_0_title_link"]').click()
        const descriptionText = await $('//*[@id="inventory_item_container"]').isDisplayed()
        await expect(descriptionText).toBe(true)
    })
})

//Shopping Cart Existence 
describe('Shopping Cart Existence Scenario', () => {
    it('should verify the existence of the shopping cart', async () => {
        await browser.url('https://www.saucedemo.com/v1/')
        await $('#user-name').setValue('standard_user')
        await $('#password').setValue('secret_sauce')
        const waitClick = (elem) => {
            elem.waitForClickable({ timeout: 5000 })
            elem.click();
        }
        waitClick($('.btn_action[type="submit"]'))

        await $('#shopping_cart_container').waitForExist({ timeout: 5000 })
        const cartAvailable = await $('#shopping_cart_container').isExisting()
        await expect(cartAvailable).toBe(true)
    });
});
