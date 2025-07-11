const cameraToggle = document.getElementById('recognition-toggle');
const mirrorToggle = document.getElementById('mirror-toggle');

chrome.storage.sync.get('recognitionActive', (data) => {
  cameraToggle.checked = !!data.recognitionActive;
});

chrome.storage.sync.get('mirrorEnabled', (data) => {
  mirrorToggle.checked = !!data.mirrorEnabled;
});

cameraToggle.addEventListener('change', () => {
  const isActive = cameraToggle.checked;

  chrome.storage.sync.set({ recognitionActive: isActive });

  chrome.runtime.sendMessage({ type: 'toggle-recognition', isActive });
});

mirrorToggle.addEventListener('change', () => {
  const isActive = cameraToggle.checked;

  chrome.storage.sync.set({ mirrorEnabled: isActive });

  chrome.runtime.sendMessage({ type: 'mirrorEnabled', isActive });
});