const { $ } = require('@wdio/globals');
const bookStoreBpage = require('./bookStoreBpage');

class LoginPage extends bookStoreBpage {
    get inputUsername() {
        return $('#userName');
    }

    get inputPassword() {
        return $('#password');
    }

    get btnLogin() {
        return $('#login');
    }

    async login(username, password) {
        await this.inputUsername.waitForExist();
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnLogin.scrollIntoView();
        await this.btnLogin.click();
    }

    async open() {
        return super.open('login');
    }
}

module.exports = new LoginPage();