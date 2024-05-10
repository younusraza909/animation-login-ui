const button = document.getElementById('cta-outline')
const signinWrapper = document.getElementById('signin-form-wrapper')
const signupCTA = document.getElementById("signup-cta-wrapper")

button.addEventListener('click', () => {
    signinWrapper.classList.toggle('toggle')
    signupCTA.classList.toggle('toggle')
})