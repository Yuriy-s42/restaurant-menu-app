import './styles/main.scss';

console.log('JS підключений і працює!');

document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('modal');
  const modalClose = document.getElementById('modalClose');

  modalClose.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  const firstMenuItem = document.querySelector('.menu-item');
  if (firstMenuItem) {
    firstMenuItem.addEventListener('click', () => {
      modal.style.display = 'block';
      document.getElementById('modalTitle').textContent = 'Назва страви';
      document.getElementById('modalDescription').textContent = 'Опис страви...';
    });
  }
});
