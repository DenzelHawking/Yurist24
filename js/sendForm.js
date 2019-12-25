formElem.onsubmit = (event) => {
  event.preventDefault();

  fetch('/server/sendForm.php', {
    method: 'POST',
    body: new FormData(formElem)
  })
  .then(alert('Данные отправленны'))
  .catch(err => alert(`Произошла ошибка при попытке отправки данных: \n${err}`))
};
