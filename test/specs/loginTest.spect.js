import { expect, browser, $ } from '@wdio/globals'


// EXAMPLE

// describe('My Login application', () => {
//     it('should login with valid credentials', async () => {
//         await browser.url(`https://the-internet.herokuapp.com/login`)

//         await $('#username').setValue('tomsmith')
//         await $('#password').setValue('SuperSecretPassword!')
//         await $('button[type="submit"]').click()

//         await expect($('#flash')).toBeExisting()
//         await expect($('#flash')).toHaveTextContaining(
//             'You logged into a secure area!')
//     })
// })

//TASK 1
////Successful login
// describe('Login test scenario', ()=> {
//     it('should login with valid credentials', async () => {
//         await browser.url(`https://www.saucedemo.com/v1/`)
//         await $('#user-name').setValue('standard_user')
//         await $('#password').setValue('secret_sauce')
// //      await $('.btn_action[type="submit"]').click()
//         await $('#login-button').click()

//         await expect($('//*[@id="inventory_filter_container"]/div')).toBeDisplayed()
//     })
// })

// //Failed login
// describe('Failed Login test scenario', ()=> {
//     it('Failed login with incorrect credentials', async () => {
//         await browser.url(`https://www.saucedemo.com/v1/`)
//         await $('#user-name').setValue('locked_out_user')
//         await $('#password').setValue('secret_sauce')
//         await $('#login-button').click()

//         await expect($('//*[@id="login_button_container"]/div/form/h3/button')).toBeDisplayed()
//     })
// })

//TASK 2
//Successful login
describe('Login test scenario', ()=> {
    it('should login with valid credentials', async () => {
        await browser.url(`https://www.saucedemo.com/v1/`)
        await $('#user-name').setValue('standard_user')
        await $('#password').setValue('secret_sauce')

        const waitClick = (elem) => {
            elem.waitForClickable({ timeout: 5000 })
            elem.click();
        }
        waitClick($('#login-button'));

        await expect($('//*[@id="inventory_filter_container"]/div')).toBeDisplayed()
    })
})

//Failed login
describe('Failed Login test scenario', ()=> {
    it('Failed login with incorrect credentials', async () => {
        await browser.url(`https://www.saucedemo.com/v1/`)
        await $('#user-name').setValue('locked_out_user')
        await $('#password').setValue('secret_sauce')
        const waitClick = (elem) => {
            elem.waitForClickable({ timeout: 5000 })
            elem.click();
        }
        waitClick($('#login-button'));

        await expect($('//*[@id="login_button_container"]/div/form/h3/button')).toBeDisplayed()
    })
})