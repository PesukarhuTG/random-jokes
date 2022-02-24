import { getWishes } from './getData.js';
import getRandomInt from "./randomInteger.js";

const showWishes = () => {
  const wishContent = document.querySelector('.wish-content');
  const img = document.querySelector('.current-img');
  const divText = document.querySelector('.wish-info');
  const text = document.querySelector('.wish-text');
  let currentLang = localStorage.getItem('lang') ? localStorage.getItem('lang') : 'ru';

  wishContent.addEventListener('click', e => {
    if (e.target.classList.contains('wish-button')) {
      img.style.animation = 'none';
      if (!divText.classList.contains('show')) divText.classList.add('show'); //show block
      currentLang = localStorage.getItem('lang') ? localStorage.getItem('lang') : 'ru'; //check language
      text.textContent = (currentLang === 'ru') ? 'загрузка...' : 'loading...';

      getWishes()
        .then(data => {
          const randomNum = getRandomInt(0, data.length - 1);
          img.src = `assets/img/${data[randomNum].image}`;
          text.textContent = (currentLang === 'ru') ? data[randomNum].textRu : data[randomNum].textEn;
        })
    }
  });
}

export default showWishes;