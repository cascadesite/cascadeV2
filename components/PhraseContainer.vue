<template>
  <div id="phrase-container"></div>
</template>

<script setup>
import { onMounted } from 'vue';

const loadEruda = () => {
  const script = document.createElement('script');
  script.src = 'https://cdn.jsdelivr.net/npm/eruda';
  document.body.appendChild(script);
  script.onload = () => {
    eruda.init();
  };
};

const getRandomPhrase = async () => {
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
};

onMounted(async () => {
  loadEruda();
  const phraseContainer = document.getElementById('phrase-container');
  const randomPhrase = await getRandomPhrase();
  phraseContainer.textContent = randomPhrase;
});
</script>