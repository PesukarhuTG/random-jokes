import getRandomInt from "./randomInteger.js";
import { getWishes } from './getData.js';

const changeBackgroundText = () => {
  const phrases = document.querySelectorAll('.random-text');

  phrases.forEach(item => {
    getWishes()
      .then(data => {
        const randomNum = getRandomInt(0, data.length - 1);
        item.textContent = data[randomNum].textRu;
      })
  })
}

export default changeBackgroundText;