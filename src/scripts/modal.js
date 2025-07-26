const pizzasData = {
  'Маргарита': {
    description: 'Томатний соус, моцарела, базилік, ковбаса',
    sizes: [
      { size: 'Мала', price: '120₴' },
      { size: 'Середня', price: '170₴' },
      { size: 'Велика', price: '210₴' },
    ]
  },
  'Папероні': {
    description: 'Томатний соус, моцарела, салямі',
    sizes: [
      { size: 'Мала', price: '130₴' },
      { size: 'Середня', price: '180₴' },
      { size: 'Велика', price: '230₴' },
    ]
  },
  'Гавайська': {
    description: 'Шинка, ананаси, моцарела',
    sizes: [
      { size: 'Мала', price: '140₴' },
      { size: 'Середня', price: '190₴' },
      { size: 'Велика', price: '240₴' },
    ]
  },
  '4 Сири': {
    description: 'Моцарелла, горгонзола, пармезан, чедер',
    sizes: [
      {size: 'Мала', price: '130₴'},
      { size: 'Середня', price: '390₴' },
      { size: 'Велика', price: '440₴' },
    ]
  },
  'BBQ': {
    description: 'Курка, соус BBQ, цибуля, сир',
    sizes: [
      { size: 'Мала', price: '160₴' },
      { size: 'Середня', price: '210₴' },
      { size: 'Велика', price: '340₴' },
    ]
  },
  'Карбонара': {
    description: 'Бекон, вершковий соус, сир, жовток',
    sizes: [
      { size: 'Мала', price: '190₴' },
      { size: 'Середня', price: '410₴' },
      { size: 'Велика', price: '540₴' },
    ]
  },
  'Вегетеріанська': {
    description: 'Овочі, томати, гриби, моцарела',
    sizes: [
      { size: 'Мала', price: '165₴' },
      { size: 'Середня', price: '240₴' },
      { size: 'Велика', price: '320₴' },
    ]
  },
  'Тоскана': {
    description: 'Салямі, артишоки, маслини',
    sizes: [
      { size: 'Мала', price: '159₴' },
      { size: 'Середня', price: '190₴' },
      { size: 'Велика', price: '220₴' },
    ]
  },
  'Цезар': {
    description: 'Курка, листя салату, сир, соус',
    sizes: [
      { size: 'Мала', price: '250₴' },
      { size: 'Середня', price: '390₴' },
      { size: 'Велика', price: '420₴' },
    ]
  },
  'Дьябло': {
    description: 'Перець чилі, салямі, соус',
    sizes: [
      { size: 'Мала', price: '250₴' },
      { size: 'Середня', price: '330₴' },
      { size: 'Велика', price: '410₴' },
    ]
  },
  'Мясна': {
    description: 'Бекон, шинка, ковбаса, сир',
    sizes: [
      { size: 'Мала', price: '200₴' },
      { size: 'Середня', price: '290₴' },
      { size: 'Велика', price: '340₴' },
    ]
  },
  'Грибна': {
    description: 'Гриби, вершки, сир, зелень',
    sizes: [
      { size: 'Мала', price: '180₴' },
      { size: 'Середня', price: '250₴' },
      { size: 'Велика', price: '340₴' },
    ]
  },
  
};

document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('modal');
  const modalClose = document.getElementById('modalClose');
  const modalTitle = document.getElementById('modalTitle');
  const modalDescription = document.getElementById('modalDescription');
  const modalSizesPrices = document.getElementById('modalSizesPrices');

  const menuItems = document.querySelectorAll('.menu-item');

  menuItems.forEach(item => {
    item.addEventListener('click', () => {
      const title = item.querySelector('.menu-item__title').textContent.trim();
      const pizza = pizzasData[title];

      if (pizza) {
        modalTitle.textContent = title;
        modalDescription.textContent = pizza.description;

        modalSizesPrices.innerHTML = '';
        pizza.sizes.forEach(({ size, price }) => {
          const li = document.createElement('li');
          li.textContent = `${size}: ${price}`;
          modalSizesPrices.appendChild(li);
        });

        modal.classList.add('modal--open');
      } else {
        console.warn(`Піца з назвою "${title}" не знайдена у pizzasData`);
      }
    });
  });

  modalClose.addEventListener('click', () => {
    modal.classList.remove('modal--open');
  });

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.remove('modal--open');
    }
  });
});
