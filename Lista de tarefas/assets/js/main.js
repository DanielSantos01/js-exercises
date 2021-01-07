
(function main() {
  const input = document.querySelector('.insert-input');
  const button = document.querySelector('.add-event');
  const list = document.querySelector('.events-list');

  const createNewEvent = () => {
    const newEvent = document.createElement('li');
    return newEvent;
  };

  const createDeleteButton = () => {
    const newButton = document.createElement('button');
    newButton.innerHTML = 'Apagar';
    return newButton;
  };

  const addDeleteListener = (button) => {
    button.addEventListener('click', () => {
      button.parentElement.remove();
      saveData();
    });
  };

  const addDeleteButton = (li) => {
    const button = createDeleteButton();
    addDeleteListener(button);
    li.appendChild(button);
  };

  const addEventContent = (li, content) => {
    li.innerHTML = `${content} `;
  };

  const isValidInput = () => {
    return !!input.value;
  };

  const addToList = (newEvent) => {
    list.appendChild(newEvent);
    input.value = '';
    input.focus();
  };

  const saveData = () => {
    const allEvents = [];
    list.childNodes.forEach(event => allEvents.push(event.firstChild.textContent));
    const stringEvents = JSON.stringify(allEvents);
    localStorage.setItem('@myEvents', stringEvents);
  };

  const handleAdd = () => {
    if (!isValidInput()) return;
    const newEvent = createNewEvent();
    addEventContent(newEvent, input.value);
    addDeleteButton(newEvent);
    addToList(newEvent);
    saveData();
  };

  const getData = () => {
    let previousEvents = localStorage.getItem('@myEvents');
    if (!previousEvents) return;
    previousEvents = JSON.parse(previousEvents);
    previousEvents.forEach(value => {
      input.value = value;
      handleAdd();
    });
    input.value = '';
  };

  const checkIfEnterPressed = (evt) => {
    if (evt.keyCode === 13) handleAdd();
  }

  document.addEventListener('keypress', checkIfEnterPressed);

  button.addEventListener('click', handleAdd);

  getData();
})();
