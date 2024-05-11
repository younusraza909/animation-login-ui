const buttons = document.getElementsByClassName('cta-outline')
const signinWrapper = document.getElementById('form-wrapper')
const signupCTA = document.getElementById("cta-wrapper")


for (let i = 0; i < buttons.length; i++) {
    const button = buttons[i]
    button.addEventListener('click', () => {
        signinWrapper.classList.toggle('toggle')
        signupCTA.classList.toggle('toggle')
    })
}
