const buttons = document.getElementsByClassName('cta-outline')
const formWrapper = document.getElementById('form-wrapper')
const ctaWrapper = document.getElementById("cta-wrapper")

const signupFormWrapper = document.getElementById('form-wrapper-signup')
const signInFormWrapper = document.getElementById('form-wrapper-signin')

function toggleClasses(element, class1, class2) {
    element.classList.remove(class1);
    element.classList.add(class2);
}

function toggleMoveClasses(element1, element2) {
    if (element1.classList.contains('moveIn')) {
        toggleClasses(element1, "moveIn", 'moveOut')
    } else if (element1.classList.contains('moveOut')) {
        toggleClasses(element1, "moveOut", 'moveIn')
    }

    if (element2.classList.contains('moveIn')) {
        toggleClasses(element2, "moveIn", 'moveOut')
    } else if (element2.classList.contains('moveOut')) {
        toggleClasses(element2, "moveOut", 'moveIn')
    }
}



for (let i = 0; i < buttons.length; i++) {
    const button = buttons[i]
    button.addEventListener('click', () => {
        formWrapper.classList.toggle('toggle')
        ctaWrapper.classList.toggle('toggle')

        toggleMoveClasses(signupFormWrapper, signInFormWrapper);
    })
}
