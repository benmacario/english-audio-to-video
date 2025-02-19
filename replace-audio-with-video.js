(function() {
  // Seleciona a tag <audio>
  const audioElement = document.querySelector('audio');

  // Verifica se a tag <audio> existe
  if (audioElement) {
    // Cria a nova tag <video>
    const videoElement = document.createElement('video');
    
    // Define os atributos da tag <video>
    videoElement.className = audioElement.className;
    videoElement.id = audioElement.id;
    videoElement.loop = audioElement.loop;
    videoElement.preload = audioElement.preload;
    videoElement.style.width = audioElement.style.width;
    videoElement.style.height = audioElement.style.height;
    videoElement.src = audioElement.querySelector('source').src;
    videoElement.controls = true;
    videoElement.autoplay = true;
    videoElement.name = 'media';

    // Adiciona a tag <source> dentro da tag <video>
    const sourceElement = document.createElement('source');
    sourceElement.type = 'audio/mpeg';
    sourceElement.src = audioElement.querySelector('source').src;
    videoElement.appendChild(sourceElement);

    // Adiciona o link dentro da tag <video>
    const linkElement = document.createElement('a');
    linkElement.href = audioElement.querySelector('source').src;
    linkElement.textContent = audioElement.querySelector('source').src;
    videoElement.appendChild(linkElement);

    // Seleciona a tag com o ID main-content-row
    const mainContentRow = document.getElementById('main-content-row');

    // Verifica se a tag main-content-row existe
    if (mainContentRow) {
      // Insere o vídeo no começo da tag main-content-row
      mainContentRow.insertBefore(videoElement, mainContentRow.firstChild);
    } else {
      console.log('Tag com ID main-content-row não encontrada.');
    }

    // Remove a tag <audio> original
    audioElement.parentNode.removeChild(audioElement);
  } else {
    console.log('Tag <audio> não encontrada.');
  }
})();
