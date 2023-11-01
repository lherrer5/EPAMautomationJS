// const LoginPage = require('../pageobjects/login.page');

// describe('Login Module Test Suite', () => {
//     beforeEach(async () => {
//         await LoginPage.open();
//     });


//     it('should login', async () => {
//         await LoginPage.login('lina_h64', 'Lina2023@');
//         await expect(LoginPage.usernameLabel).toHaveTextContaining('lina_h64');
//         LoginPage.open();
//         LoginPage.clickLogout();
//         await expect(LoginPage.usernameLabel).not.toBeExisting();
//     });

//     it('should not login', async () => {
//         await LoginPage.login('lina_h64', 'Lina223@');
//         await expect(LoginPage.usernameLabel).not.toBeDisplayed();
//     });
// });