const sushiData = {
    "\u0424\u0456\u043B\u0430\u0434\u0435\u043B\u044C\u0444\u0456\u044F": {
        description: "\u041B\u043E\u0441\u043E\u0441\u044C, \u0441\u0438\u0440 \u0444\u0456\u043B\u0430\u0434\u0435\u043B\u044C\u0444\u0456\u044F, \u0440\u0438\u0441, \u043D\u043E\u0440\u0456",
        sizes: [
            {
                size: "6 \u0448\u0442",
                price: "160\u20B4"
            },
            {
                size: "8 \u0448\u0442",
                price: "200\u20B4"
            }
        ]
    },
    "\u0420\u043E\u043B \u0406\u0442\u0430\u0447\u0456": {
        description: "\u041A\u0440\u0430\u0431, \u043E\u0433\u0456\u0440\u043E\u043A, \u0430\u0432\u043E\u043A\u0430\u0434\u043E, \u0441\u043E\u0443\u0441 \u0443\u043D\u0430\u0433\u0456",
        sizes: [
            {
                size: "6 \u0448\u0442",
                price: "170\u20B4"
            },
            {
                size: "8 \u0448\u0442",
                price: "215\u20B4"
            }
        ]
    },
    "\u0421\u0430\u043C\u0443\u0440\u0430\u0439": {
        description: "\u041B\u043E\u0441\u043E\u0441\u044C, \u0442\u0443\u043D\u0435\u0446\u044C, \u0441\u0438\u0440, \u043E\u0433\u0456\u0440\u043E\u043A, \u0456\u043A\u0440\u0430",
        sizes: [
            {
                size: "6 \u0448\u0442",
                price: "185\u20B4"
            },
            {
                size: "8 \u0448\u0442",
                price: "230\u20B4"
            }
        ]
    },
    "\u0422\u0430\u043A\u0443\u0441\u0430\u043D": {
        description: "\u0412\u0443\u0433\u043E\u0440, \u043E\u0433\u0456\u0440\u043E\u043A, \u0441\u0438\u0440, \u043A\u0443\u043D\u0436\u0443\u0442",
        sizes: [
            {
                size: "6 \u0448\u0442",
                price: "190\u20B4"
            },
            {
                size: "8 \u0448\u0442",
                price: "240\u20B4"
            }
        ]
    },
    "\u041C\u0456\u043D\u0430\u0442\u043E": {
        description: "\u041B\u043E\u0441\u043E\u0441\u044C, \u043A\u0440\u0435\u043C-\u0441\u0438\u0440, \u0437\u0435\u043B\u0435\u043D\u0430 \u0446\u0438\u0431\u0443\u043B\u044F",
        sizes: [
            {
                size: "6 \u0448\u0442",
                price: "175\u20B4"
            },
            {
                size: "8 \u0448\u0442",
                price: "220\u20B4"
            }
        ]
    },
    "\u041A\u0440\u0430\u043D\u0447 \u0440\u043E\u043B": {
        description: "\u0422\u0435\u043C\u043F\u0443\u0440\u0430, \u043A\u0440\u0435\u0432\u0435\u0442\u043A\u0430, \u043A\u0440\u0435\u043C-\u0441\u0438\u0440, \u0441\u043E\u0443\u0441",
        sizes: [
            {
                size: "6 \u0448\u0442",
                price: "185\u20B4"
            },
            {
                size: "8 \u0448\u0442",
                price: "235\u20B4"
            }
        ]
    },
    "\u041A\u0430\u043B\u0456\u0444\u043E\u0440\u043D\u0456\u044F \u0437 \u0432\u0443\u0433\u0440\u0435\u043C": {
        description: "\u0412\u0443\u0433\u043E\u0440, \u0456\u043A\u0440\u0430, \u043E\u0433\u0456\u0440\u043E\u043A, \u0430\u0432\u043E\u043A\u0430\u0434\u043E",
        sizes: [
            {
                size: "6 \u0448\u0442",
                price: "200\u20B4"
            },
            {
                size: "8 \u0448\u0442",
                price: "260\u20B4"
            }
        ]
    },
    "\u041C\u0456\u0434\u043E\u0440\u0456": {
        description: "\u041E\u0433\u0456\u0440\u043E\u043A, \u0430\u0432\u043E\u043A\u0430\u0434\u043E, \u0441\u043E\u0454\u0432\u0438\u0439 \u0441\u043E\u0443\u0441, \u043A\u0443\u043D\u0436\u0443\u0442",
        sizes: [
            {
                size: "6 \u0448\u0442",
                price: "140\u20B4"
            },
            {
                size: "8 \u0448\u0442",
                price: "185\u20B4"
            }
        ]
    }
};
document.addEventListener('DOMContentLoaded', ()=>{
    const modal = document.getElementById('modal');
    const modalClose = document.getElementById('modalClose');
    const modalTitle = document.getElementById('modalTitle');
    const modalDescription = document.getElementById('modalDescription');
    const modalSizesPrices = document.getElementById('modalSizesPreces'); // Ти мав саме такий ID
    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach((item)=>{
        item.addEventListener('click', ()=>{
            const title = item.querySelector('.menu-item__title').textContent.trim();
            const sushi = sushiData[title];
            if (sushi) {
                modalTitle.textContent = title;
                modalDescription.textContent = sushi.description;
                modalSizesPrices.innerHTML = '';
                sushi.sizes.forEach(({ size, price })=>{
                    const li = document.createElement('li');
                    li.textContent = `${size}: ${price}`;
                    modalSizesPrices.appendChild(li);
                });
                modal.classList.add('modal--open');
            } else console.warn(`\u{421}\u{443}\u{448}\u{456} \u{437} \u{43D}\u{430}\u{437}\u{432}\u{43E}\u{44E} "${title}" \u{43D}\u{435} \u{437}\u{43D}\u{430}\u{439}\u{434}\u{435}\u{43D}\u{43E} \u{432} sushiData`);
        });
    });
    modalClose.addEventListener('click', ()=>{
        modal.classList.remove('modal--open');
    });
    modal.addEventListener('click', (e)=>{
        if (e.target === modal) modal.classList.remove('modal--open');
    });
});

//# sourceMappingURL=sushi.9a635bec.js.map
