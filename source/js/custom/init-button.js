const initButton = () => {
  const but = document.querySelector('[data-button-text]');
  but.addEventListener('click', () => but.classList.toggle('is-clicked'));
};

export {initButton};
