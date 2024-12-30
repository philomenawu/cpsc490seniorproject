// Function to handle the journal popup
function handleMirror(userInput) {
    const mirrorPopup = document.getElementById('mirrorpopup');
    const mirrorText = document.getElementById('mirror-text');
    const mirrorcloseBtn = document.querySelector('.mirrorclose-btn');

    // Show the journal pop-up with the latest journal entry
    if (gameState.action.includes('mirror_1')) {
        mirrorPopup.style.display = 'flex';
    }

    // When the user clicks the close button, close the popup
    mirrorcloseBtn.onclick = function() {
        mirrorPopup.style.display = 'none';
        gameState.mirrorState = false;
    }

    // When the user clicks anywhere outside of the popup, close it
    window.onclick = function(event) {
        if (event.target == mirrorPopup) {
            mirrorPopup.style.display = 'none';
            gameState.mirrorState = false;
        }
    }
}