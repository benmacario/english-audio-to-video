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
    videoElement.src = audioElement.querySelector('source').src;
    videoElement.controls = true;
    videoElement.autoplay = true;
    videoElement.width = '100%';
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

    // Seleciona a tag com o ID mep_0
    const mepElement = document.getElementById('mep_0');

    // Verifica se a tag mep_0 existe
    if (mepElement) {
      // Insere o vídeo antes da tag mep_0
      mepElement.parentNode.insertBefore(videoElement, mepElement);
    } else {
      console.log('Tag com ID mep_0 não encontrada.');
    }

    // Remove a tag <audio> original
    audioElement.parentNode.removeChild(audioElement);
  } else {
    console.log('Tag <audio> não encontrada.');
  }
})();
