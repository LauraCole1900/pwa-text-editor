const btnInstallEl = document.getElementById('buttonInstall');

// Logic for installing the PWA
// Event listener to trigger btnInstallEl to show
window.addEventListener('beforeinstallprompt', (event) => {
  window.deferredPrompt = event;
  btnInstallEl.classList.toggle('hidden', false);
});

// Click listener on btnInstallEl
butInstallEl.addEventListener('click', async () => {
  const btnEvent = window.deferredPrompt;
  if (!btnEvent) {
    return;
  }
  btnEvent.prompt();
  window.deferredPrompt = null;
  btnInstallEl.classList.toggle('hidden', true);
});

// Hides the prompt once the app is installed
window.addEventListener('appinstalled', (event) => {
  window.deferredPrompt = null;
});
