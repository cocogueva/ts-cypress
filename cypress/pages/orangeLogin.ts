class orangeLogin {
    static selectors = {
        userInput: "[name='username']",
        passwordInput: "[name='password']",
        loginBtn: ".oxd-button"
    }

    static login(username, password) {
        cy
        .get(this.selectors.userInput).type(username)
        .get(this.selectors.passwordInput).type(password)
        .get(this.selectors.loginBtn).click()
        .url().should('contain', '/dashboard/index');
       }

}

export default orangeLogin