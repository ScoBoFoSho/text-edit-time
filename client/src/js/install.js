const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
//  an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    // Capture the event and store it!!!!
    window.deferredPrompt = event;

    // remove the hidden class
    butInstall.classList.toggle("hidden", false);
});

// a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    const promptEvent = window.defferedPrompt;

    if (!promptEvent) {
        return;
    }
    // create prompt
    promptEvent.prompt();

    // back to the deffered values of varialbe
    window.deferredPrompt = null;
    butInstall.classList.toggle("hidden", true);
});

// an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    // CLEAR PROMPT!
    window.deferredPrompt = null;
});
