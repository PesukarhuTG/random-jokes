import changeLang from "./module/changeLang.js";
import showWishes from "./module/showWishes.js";
import changeBackgroundText from "./module/changeBgrText.js"

showWishes();
changeLang();
changeBackgroundText();

console.log(`
Самооценка: 70/70

1. Вёрстка +10, а именно:
- на странице есть цитата и кнопка для смены цитаты +5
- в футере приложения есть ссылка на гитхаб автора приложения, год создания приложения, логотип курса со ссылкой на курс +5
2. При загрузке страницы приложения отображается рандомная цитата (на фоне приложения) +10
3. При перезагрузке страницы цитата обновляется (заменяется на другую) +10
4. Есть кнопка, при клике по которой цитата обновляется (заменяется на другую) +10
5. Смена цитаты сопровождается любым другим эффектом, например, изменяется изображение или меняется фоновый цвет страницы, или проигрывается звук и т.д * +10
6. Можно выбрать один из двух языков отображения цитат: en/ru или en/be ** +10
7. Очень высокое качество оформления приложения и/или дополнительный не предусмотренный в задании функционал, улучшающий качество приложения +10
высокое качество оформления приложения предполагает собственное оригинальное оформление равное или отличающееся в лучшую сторону по сравнению с демо`);
