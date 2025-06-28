document.addEventListener('DOMContentLoaded', () => {
    const giftItems = [
        // QUARTO
        { id: 'quarto1', name: 'Colchão Casal', price: 'R$ 800,00', category: 'quarto', img: 'https://picsum.photos/seed/colchao/200/200' },
        { id: 'quarto2', name: 'Jogo de Lençol Casal', price: 'R$ 150,00', category: 'quarto', img: 'https://picsum.photos/seed/lencol/200/200' },
        { id: 'quarto3', name: 'Travesseiro (par)', price: 'R$ 100,00', category: 'quarto', img: 'https://picsum.photos/seed/travesseiro/200/200' },
        { id: 'quarto4', name: 'Fronha (par)', price: 'R$ 40,00', category: 'quarto', img: 'https://picsum.photos/seed/fronha/200/200' },
        { id: 'quarto5', name: 'Cobertor', price: 'R$ 120,00', category: 'quarto', img: 'https://picsum.photos/seed/cobertor/200/200' },
        { id: 'quarto6', name: 'Abajur', price: 'R$ 90,00', category: 'quarto', img: 'https://picsum.photos/seed/abajur/200/200' },
        { id: 'quarto7', name: 'Cabides (50 un)', price: 'R$ 50,00', category: 'quarto', img: 'https://picsum.photos/seed/cabides/200/200' },
        { id: 'quarto8', name: 'Saco a vácuo + bomba', price: 'R$ 70,00', category: 'quarto', img: 'https://picsum.photos/seed/sacoavacuo/200/200' },
        { id: 'quarto9', name: 'Espelho de corpo', price: 'R$ 250,00', category: 'quarto', img: 'https://picsum.photos/seed/espelho/200/200' },
        
        // COZINHA
        { id: 'cozinha1', name: 'Cooktop de Indução 2 Bocas', price: 'R$ 350,00', category: 'cozinha', img: 'https://picsum.photos/seed/cooktop/200/200' },
        { id: 'cozinha2', name: 'Forno Elétrico', price: 'R$ 400,00', category: 'cozinha', img: 'https://picsum.photos/seed/forno/200/200' },
        { id: 'cozinha3', name: 'Air Fryer', price: 'R$ 300,00', category: 'cozinha', img: 'https://picsum.photos/seed/airfryer/200/200' },
        { id: 'cozinha4', name: 'Liquidificador/Mixer', price: 'R$ 150,00', category: 'cozinha', img: 'https://picsum.photos/seed/liquidificador/200/200' },
        { id: 'cozinha5', name: 'Filtro de Água', price: 'R$ 80,00', category: 'cozinha', img: 'https://picsum.photos/seed/filtro/200/200' },
        { id: 'cozinha6', name: 'Jogo de Panelas', price: 'R$ 250,00', category: 'cozinha', img: 'https://picsum.photos/seed/panelas/200/200' },
        { id: 'cozinha7', name: 'Kit Espátulas de Silicone', price: 'R$ 60,00', category: 'cozinha', img: 'https://picsum.photos/seed/espatulas/200/200' },
        { id: 'cozinha8', name: 'Escorredor de Louça', price: 'R$ 70,00', category: 'cozinha', img: 'https://picsum.photos/seed/escorredor/200/200' },
        { id: 'cozinha9', name: 'Potes Herméticos (kit)', price: 'R$ 90,00', category: 'cozinha', img: 'https://picsum.photos/seed/potes/200/200' },
        { id: 'cozinha10', name: 'Travessa de Vidro', price: 'R$ 50,00', category: 'cozinha', img: 'https://picsum.photos/seed/travessa/200/200' },

        // ÁREA DE SERVIÇO
        { id: 'lavanderia1', name: 'Tanquinho', price: 'R$ 450,00', category: 'area-de-servico', img: 'https://picsum.photos/seed/tanquinho/200/200' },
        { id: 'lavanderia2', name: 'Varal de Chão', price: 'R$ 80,00', category: 'area-de-servico', img: 'https://picsum.photos/seed/varal/200/200' },
        { id: 'lavanderia3', name: 'Ferro de Passar Roupa', price: 'R$ 100,00', category: 'area-de-servico', img: 'https://picsum.photos/seed/ferro/200/200' },
        { id: 'lavanderia4', name: 'Cesto de Roupa Suja', price: 'R$ 60,00', category: 'area-de-servico', img: 'https://picsum.photos/seed/cesto/200/200' },
        { id: 'lavanderia5', name: 'Kit Limpeza (Vassoura, rodo, pá)', price: 'R$ 70,00', category: 'area-de-servico', img: 'https://picsum.photos/seed/limpeza/200/200' },
        { id: 'lavanderia6', name: 'Balde', price: 'R$ 25,00', category: 'area-de-servico', img: 'https://picsum.photos/seed/balde/200/200' },
        { id: 'lavanderia7', name: 'Escada Pequena', price: 'R$ 120,00', category: 'area-de-servico', img: 'https://picsum.photos/seed/escada/200/200' },

        // BANHEIRO
        { id: 'banheiro1', name: 'Kit Banheiro (saboneteira, porta escova)', price: 'R$ 80,00', category: 'banheiro', img: 'https://picsum.photos/seed/kitbanheiro/200/200' },
        { id: 'banheiro2', name: 'Jogo de Toalhas (Banho e Rosto)', price: 'R$ 150,00', category: 'banheiro', img: 'https://picsum.photos/seed/toalhas/200/200' },
        { id: 'banheiro3', name: 'Tapete de Banheiro', price: 'R$ 40,00', category: 'banheiro', img: 'https://picsum.photos/seed/tapete/200/200' },
        { id: 'banheiro4', name: 'Lixeira com Pedal', price: 'R$ 50,00', category: 'banheiro', img: 'https://picsum.photos/seed/lixeira/200/200' },
        { id: 'banheiro5', name: 'Escova Sanitária', price: 'R$ 30,00', category: 'banheiro', img: 'https://picsum.photos/seed/escovasanitaria/200/200' },

        // ITENS GERAIS
        { id: 'gerais1', name: 'Kit de Ferramentas Básicas', price: 'R$ 120,00', category: 'itens-gerais', img: 'https://picsum.photos/seed/ferramentas/200/200' },
        { id: 'gerais2', name: 'Kit de Primeiros Socorros', price: 'R$ 60,00', category: 'itens-gerais', img: 'https://picsum.photos/seed/primeirossocorros/200/200' },
        { id: 'gerais3', name: 'Extensão Elétrica (5m)', price: 'R$ 40,00', category: 'itens-gerais', img: 'https://picsum.photos/seed/extensao/200/200' },
    ];

    const categoryMap = {
        'quarto': document.querySelector('#quarto .items-grid'),
        'cozinha': document.querySelector('#cozinha .items-grid'),
        'area-de-servico': document.querySelector('#area-de-servico .items-grid'),
        'banheiro': document.querySelector('#banheiro .items-grid'),
        'itens-gerais': document.querySelector('#itens-gerais .items-grid'),
    };

    const totalItemsEl = document.getElementById('total-items');
    const reservedItemsEl = document.getElementById('reserved-items');

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

    function handleGift(event) {
        const button = event.target;
        const itemId = button.dataset.id;
        
        const gifterName = prompt('Que legal! Para quem devemos agradecer?\nPor favor, digite seu nome:');

        if (gifterName && gifterName.trim() !== '') {
            localStorage.setItem(itemId, gifterName.trim());
            updateCard(itemId, gifterName.trim());
            updateSummary();
        }
    }

    function updateCard(itemId, gifterName) {
        const card = document.getElementById(`card-${itemId}`);
        if (!card) return;
        const button = card.querySelector('.gift-button');
        
        button.textContent = 'Presente Reservado!';
        button.disabled = true;

        const existingReservedText = card.querySelector('.reserved-by');
        if (!existingReservedText) {
            const reservedByText = document.createElement('p');
            reservedByText.className = 'reserved-by';
            reservedByText.textContent = `Reservado por: ${gifterName}`;
            card.appendChild(reservedByText);
        }
    }
    
    function loadReservations() {
        giftItems.forEach(item => {
            const gifterName = localStorage.getItem(item.id);
            if (gifterName) {
                updateCard(item.id, gifterName);
            }
        });
    }
    
    function updateSummary() {
        const totalItems = giftItems.length;
        let reservedCount = 0;
        giftItems.forEach(item => {
            if (localStorage.getItem(item.id)) {
                reservedCount++;
            }
        });

        totalItemsEl.textContent = totalItems;
        reservedItemsEl.textContent = reservedCount;
    }

    // Initial setup
    renderItems();
    loadReservations();
    updateSummary();
});