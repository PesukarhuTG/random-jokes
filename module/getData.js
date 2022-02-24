const getData = url => fetch(url)
  .then(response => {
    if (response.ok) {
      return response.json();
    }
    throw `Упс, что-то пошло не так: ${response.status}`
  })
  .catch(err => console.error(err));

export const getWishes = async () => {
  const url = './quotes.json';
  return await getData(url);
}