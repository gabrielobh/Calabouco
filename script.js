document.addEventListener('DOMContentLoaded', () => {
    const giftItems = [/* seus itens aqui (sem alteração) */];

    const categoryMap = {
        'quarto': document.querySelector('#quarto .items-grid'),
        'cozinha': document.querySelector('#cozinha .items-grid'),
        'area-de-servico': document.querySelector('#area-de-servico .items-grid'),
        'banheiro': document.querySelector('#banheiro .items-grid'),
        'itens-gerais': document.querySelector('#itens-gerais .items-grid'),
    };

    const totalItemsEl = document.getElementById('total-items');
    const reservedItemsEl = document.getElementById('reserved-items');

    const SCRIPT_URL = 'https://script.google.com/macros/s/SEU_SCRIPT_ID/exec';

    function renderItems() {
        giftItems.forEach(item => {
            const container = categoryMap[item.category];
            if (container) {
                const card = document.createElement('div');
                card.className = 'item-card';
                card.id = `card-${item.id}`;

                card.innerHTML = `
                    <img src="${item.img}" alt="${item.name}">
                    <h3>${item.name}</h3>
                    <p class="price">${item.price}</p>
                    <button class="gift-button" data-id="${item.id}">Quero Presentear</button>
                `;
                container.appendChild(card);
            }
        });

        document.querySelectorAll('.gift-button').forEach(button => {
            button.addEventListener('click', handleGift);
        });
    }

    async function handleGift(event) {
        const button = event.target;
        const itemId = button.dataset.id;

        const gifterName = prompt('Que legal! Para quem devemos agradecer?\nPor favor, digite seu nome:');
        if (!gifterName || gifterName.trim() === '') return;

        try {
            const response = await fetch(SCRIPT_URL, {
                method: 'POST',
                body: new URLSearchParams({ itemId, gifterName: gifterName.trim() }),
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
            });

            const result = await response.json();
            if (result.success) {
                updateCard(itemId, gifterName.trim());
                updateSummary();
            } else {
                alert('Erro ao reservar. Tente novamente.');
            }
        } catch (error) {
            console.error('Erro na reserva:', error);
            alert('Erro na conexão. Tente novamente mais tarde.');
        }
    }

    function updateCard(itemId, gifterName) {
        const card = document.getElementById(`card-${itemId}`);
        if (!card) return;

        const button = card.querySelector('.gift-button');
        button.textContent = 'Presente Reservado!';
        button.disabled = true;

        if (!card.querySelector('.reserved-by')) {
            const reservedByText = document.createElement('p');
            reservedByText.className = 'reserved-by';
            reservedByText.textContent = `Reservado por: ${gifterName}`;
            card.appendChild(reservedByText);
        }
    }

    async function loadReservations() {
        try {
            const response = await fetch(SCRIPT_URL);
            const reservations = await response.json(); // esperado: { itemId: gifterName, ... }

            let reservedCount = 0;
            for (const item of giftItems) {
                const name = reservations[item.id];
                if (name) {
                    updateCard(item.id, name);
                    reservedCount++;
                }
            }

            totalItemsEl.textContent = giftItems.length;
            reservedItemsEl.textContent = reservedCount;
        } catch (error) {
            console.error('Erro ao carregar reservas:', error);
        }
    }

    function updateSummary() {
        // Contagem será feita durante o loadReservations
        // Para evitar chamadas duplas, essa função pode ser deixada vazia ou removida
    }

    renderItems();
    loadReservations();
});
