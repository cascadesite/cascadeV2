---
title: Games
---

# Games

<input type="text" id="searchInput" class="search-input" placeholder="Search for a game...">

<div id="gamesList" class="games-list"></div>

::card-grid
#title
Available Games

#root
:ellipsis

#default
::

<div id="backgroundOverlay" class="background-overlay hidden"></div>
<div id="iframeContainer" class="iframe-container hidden">
    <iframe id="gameIframe" class="game-iframe"></iframe>
    <div class="iframe-controls">
        <button class="iframe-button" onclick="hideIframe()">&lt;</button>
        <button class="iframe-button" onclick="toggleFullscreen()">⛶</button>
    </div>
</div>

<script>
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
</script>

<style>
  body {
    font-family: 'Quicksand', sans-serif;
  }

  .search-input {
    margin: 20px auto;
    padding: 15px;
    width: 50%;
    text-align: center;
    border: 1px solid #ccc;
    border-radius: 15px;
    display: block;
  }

  .games-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    list-style: none;
    padding: 0;
    gap: 20px;
  }

  .card {
    width: 200px;
    padding: 15px;
    background: #fff;
    border: 1px solid #eee;
    border-radius: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    text-align: center;
    cursor: pointer;
    transition: transform 0.2s;
  }

  .card:hover {
    transform: scale(1.05);
  }

  .card-title {
    font-size: 1.2em;
    margin-bottom: 10px;
  }

  .card-description {
    font-size: 0.9em;
    color: #666;
  }

  .background-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: 1000;
  }

  .iframe-container {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 80%;
    height: 80%;
    background: #fff;
    border-radius: 10px;
    overflow: hidden;
    z-index: 1001;
  }

  .game-iframe {
    width: 100%;
    height: calc(100% - 40px);
    border: none;
  }

  .iframe-controls {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 40px;
    background: #007bff;
    color: #fff;
  }

  .iframe-button {
    background: none;
    border: none;
    color: #fff;
    font-size: 1.5em;
    cursor: pointer;
    padding: 0 20px;
  }

  .hidden {
    display: none;
  }
</style>