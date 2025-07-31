const sushiData = {
  'Філадельфія': {
    description: 'Лосось, сир філадельфія, рис, норі',
    sizes: [
      { size: '6 шт', price: '160₴' },
      { size: '8 шт', price: '200₴' },
    ]
  },
  'Рол Ітачі': {
    description: 'Краб, огірок, авокадо, соус унагі',
    sizes: [
      { size: '6 шт', price: '170₴' },
      { size: '8 шт', price: '215₴' },
    ]
  },
  'Самурай': {
    description: 'Лосось, тунець, сир, огірок, ікра',
    sizes: [
      { size: '6 шт', price: '185₴' },
      { size: '8 шт', price: '230₴' },
    ]
  },
  'Такусан': {
    description: 'Вугор, огірок, сир, кунжут',
    sizes: [
      { size: '6 шт', price: '190₴' },
      { size: '8 шт', price: '240₴' },
    ]
  },
  'Мінато': {
    description: 'Лосось, крем-сир, зелена цибуля',
    sizes: [
      { size: '6 шт', price: '175₴' },
      { size: '8 шт', price: '220₴' },
    ]
  },
  'Кранч рол': {
    description: 'Темпура, креветка, крем-сир, соус',
    sizes: [
      { size: '6 шт', price: '185₴' },
      { size: '8 шт', price: '235₴' },
    ]
  },
  'Каліфорнія з вугрем': {
    description: 'Вугор, ікра, огірок, авокадо',
    sizes: [
      { size: '6 шт', price: '200₴' },
      { size: '8 шт', price: '260₴' },
    ]
  },
  'Мідорі': {
    description: 'Огірок, авокадо, соєвий соус, кунжут',
    sizes: [
      { size: '6 шт', price: '140₴' },
      { size: '8 шт', price: '185₴' },
    ]
  },
};

document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('modal');
  const modalClose = document.getElementById('modalClose');
  const modalTitle = document.getElementById('modalTitle');
  const modalDescription = document.getElementById('modalDescription');
  const modalSizesPrices = document.getElementById('modalSizesPrices'); // Ти мав саме такий ID

  const menuItems = document.querySelectorAll('.menu-item');

  menuItems.forEach(item => {
    item.addEventListener('click', () => {
      const title = item.querySelector('.menu-item__title').textContent.trim();
      const sushi = sushiData[title];

      if (sushi) {
        modalTitle.textContent = title;
        modalDescription.textContent = sushi.description;

        modalSizesPrices.innerHTML = '';
        sushi.sizes.forEach(({ size, price }) => {
          const li = document.createElement('li');
          li.textContent = `${size}: ${price}`;
          modalSizesPrices.appendChild(li);
        });

        modal.classList.add('modal--open');
      } else {
        console.warn(`Суші з назвою "${title}" не знайдено в sushiData`);
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