// Function to handle the journal popup
function handleJournal(userInput) {
    const journalPopup = document.getElementById('journal-popup');
    const journalText = document.getElementById('journal-text');
    const journalcloseBtn = document.querySelector('.journalclose-btn');

    // Show the journal pop-up with the latest journal entry
    if (gameState.action.includes('journal_1')) {
        journalText.innerHTML = `Lorem ipsum odor amet, consectetuer adipiscing elit. Velit consequat lacinia turpis fames viverra primis urna dolor dignissim. 
        Pellentesque facilisi est penatibus ad torquent dui ad. Metus fringilla nascetur per habitasse dignissim. Accumsan montes placerat sagittis elit risus luctus in. 
        Eleifend inceptos purus dictumst sed; consequat nostra hac a. Primis massa euismod scelerisque fermentum fermentum potenti. Dictum vitae ac a magnis nunc tempus quis congue.`;
                                
        journalPopup.style.display = 'block';
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