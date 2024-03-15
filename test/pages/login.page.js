class LoginPage {
    get emailInput(){
        return $('#email')
    }
    get passwordInput(){
        return $('#password')
    }
    get loginButton(){
        return $('#root > div > div > div > div.css-1w7v3tn > div > button')
    }
    get errorMsg(){
        return $('#root > div > div > div > div.css-1w7v3tn > div > div.chakra-alert.css-qwanz3')
    }

    async login(email, password){
        await this.emailInput.setValue(email);
        await this.passwordInput.setValue(password);
        await this.loginButton.click();
    }

    async assertErrorMessage(expectedErrorMessage){
        await expect(this.errorMsg).toHaveTextContaining(expectedErrorMessage);
    }

    async getErrorMessage(){
        return this.errorMsg.getText();
    }
}

module.exports = new LoginPage();