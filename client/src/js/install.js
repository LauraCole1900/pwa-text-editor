const btnInstallEl = document.getElementById('buttonInstall');

// Logic for installing the PWA
// Event listener to trigger btnInstallEl to show
window.addEventListener('beforeinstallprompt', (e) => {
  window.deferredPrompt = e;
  btnInstallEl.classList.toggle('hidden', false);
});

// Click listener on btnInstallEl
btnInstallEl.addEventListener('click', async () => {
  const btnEvent = window.deferredPrompt;
  if (!btnEvent) {
    return;
  }
  btnEvent.prompt();
  window.deferredPrompt = null;
  btnInstallEl.classList.toggle('hidden', true);
});

// Hides the prompt once the app is installed
window.addEventListener('appinstalled', (e) => {
  window.deferredPrompt = null;
});
