const createInput = (type, className = '') => {
  const input = document.createElement('input');
  input.type = type;
  if (className) input.classList.add(className);
  input.classList.add('input');
  return input;
};

const createButton = (content, callback, className = '') => {
  const button = document.createElement('button');
  button.innerHTML = content;
  button.classList.add(className);
  button.addEventListener('click', callback);
  return button;
};

const createText = (desc = 'Generic Text', classNames = []) => {
  const text = document.createElement('p');
  const hasClassNames = !!classNames.length;
  if (hasClassNames) {
    classNames.forEach((className) => {
      text.classList.add(className);
    });
  }
  text.classList.add('highlightText')
  text.innerText = desc;
  return text;
};

const addChilds = (childs = []) => {
  const container = document.querySelector('.container');
  childs.forEach((child) => {
    container.appendChild(child);
  });
};

export const createInterface = (fields = [], handleValidate) => {
  fields.forEach((field) => {
    const { fieldName, fieldType } = field;
    const description = createText([`${fieldName}:`]);
    const statusMessage = createText('', [`${fieldName}_status`, 'status']);
    const input = createInput(fieldType, fieldName);
    addChilds([description, input, statusMessage]);
  });

  const submitButton = createButton('Enviar', handleValidate, 'submit');
  addChilds([submitButton]);
};
