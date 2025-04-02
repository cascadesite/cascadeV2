function loadEruda() {
    var script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/eruda';
    document.body.appendChild(script);
    script.onload = function () {
        eruda.init();
    };
}

(function () {
    var keyword = '';
    document.addEventListener('keypress', function (event) {
        keyword += event.key.toLowerCase();
        if (keyword.endsWith('eruda')) {
            loadEruda();
            keyword = '';
        }
        if (keyword.length > 5) {
            keyword = keyword.slice(-5);
        }
    });
})();

async function getRandomPhrase() {
    try {
        const response = await fetch('/phrases.json');
        const phrases = await response.json();
      
        const ultraRareIndex = phrases.length - 1;
        const randomNumber = Math.random();
      
        if (randomNumber <= 0.01) {
            return phrases[ultraRareIndex];
        } else {
            const randomIndex = Math.floor(Math.random() * (phrases.length - 1));
            return phrases[randomIndex];
        }
    } catch (error) {
        console.error('Error fetching phrases:', error);
        return "An error occurred. Please try again.";
    }
}
  
document.addEventListener('DOMContentLoaded', async () => {
    const phraseContainer = document.getElementById('phrase-container');
    const randomPhrase = await getRandomPhrase();
    phraseContainer.textContent = randomPhrase;
});

async function loadGames() {
    try {
        const response = await fetch('/games.json');
        const games = await response.json();
        const gamesList = document.getElementById('gamesList');

        games.sort((a, b) => a.name.localeCompare(b.name));

        games.forEach(game => {
            createGameCard(game);
        });
    } catch (error) {
        console.error('Error loading games:', error);
    }
}

function createGameCard(game) {
    const gamesList = document.getElementById('gamesList');

    const card = document.createElement('div');
    card.className = 'card';
    
    const title = document.createElement('h3');
    title.className = 'card-title';
    title.textContent = game.name;
    card.appendChild(title);

    const description = document.createElement('p');
    description.className = 'card-description';
    description.textContent = game.description || '';
    card.appendChild(description);

    gamesList.appendChild(card);

    card.addEventListener('click', () => showIframe(game.path));
}

function showIframe(path) {
    const iframeContainer = document.getElementById('iframeContainer');
    const iframe = document.getElementById('gameIframe');
    const backgroundOverlay = document.getElementById('backgroundOverlay');

    iframe.src = `/${path}`;
    iframeContainer.style.display = 'block';
    backgroundOverlay.style.display = 'block';
}

function hideIframe() {
    const iframeContainer = document.getElementById('iframeContainer');
    const backgroundOverlay = document.getElementById('backgroundOverlay');

    iframeContainer.style.display = 'none';
    document.getElementById('gameIframe').src = '';
    backgroundOverlay.style.display = 'none';
}

function toggleFullscreen() {
    const iframe = document.getElementById('gameIframe');
    if (iframe.requestFullscreen) {
        iframe.requestFullscreen();
    } else if (iframe.mozRequestFullScreen) {
        iframe.mozRequestFullScreen();
    } else if (iframe.webkitRequestFullscreen) {
        iframe.webkitRequestFullscreen();
    } else if (iframe.msRequestFullscreen) {
        iframe.msRequestFullscreen();
    }
}

window.onload = loadGames;