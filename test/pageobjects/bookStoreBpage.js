const Page = require('./page');

class bookStoreBpage extends Page {
    get usernameLabel() {
        return $("#userName-value");
    }

    get logoutButton() {
        return $("button#submit");
    }

    async clickLogout() {
        await this.logoutButton.scrollIntoView();
        await this.logoutButton.click();
    }
}
module.exports = bookStoreBpage;