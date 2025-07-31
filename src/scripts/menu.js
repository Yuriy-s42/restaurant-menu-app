console.log('menu.js підключений!');

document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('modal');
  const modalClose = document.getElementById('modalClose');

  modalClose.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  const menuItems = document.querySelectorAll('.menu-item');
  menuItems.forEach((item) => {
    item.addEventListener('click', () => {
      modal.style.display = 'block';
      document.getElementById('modalTitle').textContent = 'Назва страви';
      document.getElementById('modalDescription').textContent = 'Опис страви...';
    });
  });
});
