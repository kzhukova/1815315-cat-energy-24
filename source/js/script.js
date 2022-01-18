const navMain = document.querySelector('.main-nav');
const navToggle = document.querySelector('.main-nav__toggle');

const form = document.querySelector('.form');
const nameInput = document.querySelector('#name');
const weightInput = document.querySelector('#weight');
const emailInput = document.querySelector('#email');
const telInput = document.querySelector('#tel');
const requiredFields = [nameInput, weightInput, emailInput, telInput];

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});

form.addEventListener("submit", ( evt) => {
  let validated = true
  evt.preventDefault();
  requiredFields.forEach((el) => {
    if (el.value.length === 0) {
      el.classList.add('form__input-error')
      validated = false
    }
  })
  if (validated) {
    form.submit()
  } else {
    requiredFields.forEach((el) => {
      el.addEventListener('change', () => {
        if (el.classList.contains('form__input-error')) {
          el.classList.remove('form__input-error')
        }
      }, {once: true})
    });
  }
});
