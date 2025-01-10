// Function to handle the journal popup
function handleJournal(userInput) {
    const journalPopup = document.getElementById('journal-popup');
    const journalText = document.getElementById('journal-text');
    const journalcloseBtn = document.querySelector('.journalclose-btn');

    // Show the journal pop-up with the latest journal entry
    if (gameState.action.includes('journal_1')) {
        journalPopup.style.display = 'flex';
    }

    // When the user clicks the close button, close the popup
    journalcloseBtn.onclick = function() {
        journalPopup.style.display = 'none';
        gameState.journalState = false;
    }

    // When the user clicks anywhere outside of the popup, close it
    window.onclick = function(event) {
        if (event.target == journalPopup) {
            journalPopup.style.display = 'none';
            gameState.journalState = false;
        }
    }
}