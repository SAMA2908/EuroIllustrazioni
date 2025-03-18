// Array delle monete
let coins = [
    { "img": "src/1cent.jpg", "title": "1 cent", "link": "1cent.html", "bgColor": "#FFCC00", "btnColor": "#003366" },
    { "img": "src/2cent.jpg", "title": "2 cent", "link": "#", "bgColor": "#FFD700", "btnColor": "#002147" },
    { "img": "src/5cent.jpg", "title": "5 cent", "link": "#", "bgColor": "#DAA520", "btnColor": "#001F3F" },
    { "img": "src/10cent.jpg", "title": "10 cent", "link": "#", "bgColor": "#B8860B", "btnColor": "#0033CC" },
    { "img": "src/20cent.jpg", "title": "20 cent", "link": "#", "bgColor": "#C0C0C0", "btnColor": "#0033CC" },
    { "img": "src/50cent.jpg", "title": "50 cent", "link": "#", "bgColor": "#C0C0C0", "btnColor": "#0033CC" },
    { "img": "src/1euro.jpg", "title": "1 euro", "link": "#", "bgColor": "#C0C0C0", "btnColor": "#0033CC" },
    { "img": "src/2euro.jpg", "title": "2 euro", "link": "#", "bgColor": "#C0C0C0", "btnColor": "#0033CC" },
    { "img": "src/atene.jpg", "title": "Olimpiadi di Atene svolte nel 2004", "link": "#", "bgColor": "#C0C0C0", "btnColor": "#FF4500" },
    { "img": "src/verdi.jpg", "title": "200 anni di Giuseppe Verdi", "link": "#", "bgColor": "#C0C0C0", "btnColor": "#FF4500" },
    { "img": "src/falconeBorsellino.jpg", "title": "30 anni dalla scomparsa di Falcone e Borsellino", "link": "#", "bgColor": "#C0C0C0", "btnColor": "#FF4500" },
    { "img": "src/covid.jpeg", "title": "Ringraziamento ai medici per il covid-19", "link": "#", "bgColor": "#C0C0C0", "btnColor": "#FF4500" }
];

// Variabili di stato
let currentPage = 1;
const coinsPerPage = 4;

// Funzione per generare le card
function displayCoins() {
    const startIndex = (currentPage - 1) * coinsPerPage;
    const endIndex = currentPage * coinsPerPage;
    const coinsToShow = coins.slice(startIndex, endIndex);
    const imageContainer = document.getElementById('imageContainer');
    imageContainer.innerHTML = ''; // Pulisce il contenuto precedente

    // Crea le card per ogni moneta
    coinsToShow.forEach(coin => {
        const coinCard = document.createElement('div');
        coinCard.classList.add('col-md-3', 'mb-4');
        coinCard.innerHTML = `
            <div class="card">
                <img src="${coin.img}" class="card-img-top" alt="${coin.title}">
                <div class="card-body">
                    <h5 class="card-title">${coin.title}</h5>
                    <a href="${coin.link}" class="btn">Scopri di più</a>
                </div>
            </div>
        `;
        imageContainer.appendChild(coinCard);
    });

    // Aggiorna la numerazione della pagina
    document.getElementById('pageNumber').textContent = currentPage;
}

// Funzione per gestire la navigazione tra le pagine
document.getElementById('prevPage').addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        displayCoins();
    }
});

document.getElementById('nextPage').addEventListener('click', () => {
    const totalPages = Math.ceil(coins.length / coinsPerPage);
    if (currentPage < totalPages) {
        currentPage++;
        displayCoins();
    }
});

document.addEventListener("DOMContentLoaded", function () {
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });
});


// Inizializza la pagina
displayCoins();

