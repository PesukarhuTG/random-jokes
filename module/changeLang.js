import i180bj from "./translate.js";

const changeLang = () => {
  const langSwitch = document.querySelector('.header-lang');
  const langBtns = document.querySelectorAll('.btn-lang');
  const wishInfo = document.querySelector('.wish-info');
  let lang = 'ru';

  function changeActiveClass() {
    langBtns.forEach(btn => {
      btn.classList.remove('active');

      if (lang === btn.dataset.lang) {
        btn.classList.add('active');
      }
    })
  }

  function getTranslate(language) {
    const translateWords = document.querySelectorAll('[data-i18]');
    translateWords.forEach(item => {
      const key = item.dataset.i18;
      const translation = i180bj[language][key];

      item.textContent = translation;
      lang = language;
      localStorage.setItem('lang', lang);
    });
  }

  langSwitch.addEventListener('click', e => {
    e.preventDefault();
    if (e.target.classList.contains('btn-lang')) {
      langBtns.forEach(item => {
        item.classList.remove('active');
        wishInfo.classList.remove('show');
      });

      if (e.target.classList.contains('btn-en')) {
        e.target.classList.add('active');
        getTranslate('en');
      }

      if (e.target.classList.contains('btn-ru')) {
        e.target.classList.add('active');
        getTranslate('ru');
      }
    }
  });

  getTranslate(lang);
  changeActiveClass();
}

export default changeLang;