(function() {
  const audioElement = document.querySelector('audio');

  if (audioElement) {
    const videoElement = document.createElement('video');
    
    videoElement.className = audioElement.className;
    videoElement.id = audioElement.id;
    videoElement.loop = audioElement.loop;
    videoElement.preload = audioElement.preload;
    videoElement.src = audioElement.querySelector('source').src;
    videoElement.controls = true;
    videoElement.autoplay = true;
    videoElement.name = 'media';

    const sourceElement = document.createElement('source');
    sourceElement.type = 'audio/mpeg';
    sourceElement.src = audioElement.querySelector('source').src;
    videoElement.appendChild(sourceElement);

    const linkElement = document.createElement('a');
    linkElement.href = audioElement.querySelector('source').src;
    linkElement.textContent = audioElement.querySelector('source').src;
    videoElement.appendChild(linkElement);

    videoElement.style.position = 'fixed';
    videoElement.style.top = '10px';
    videoElement.style.left = '10px';
    videoElement.style.width = '300px';
    videoElement.style.height = '200px';
    videoElement.style.zIndex = '1000';

    const mainContentRow = document.getElementById('main-content-row');

    if (mainContentRow) {
      mainContentRow.insertBefore(videoElement, mainContentRow.firstChild);
    } else {
      console.log('Tag com ID main-content-row não encontrada.');
    }

    audioElement.parentNode.removeChild(audioElement);
  } else {
    console.log('Tag <audio> não encontrada.');
  }
})();
