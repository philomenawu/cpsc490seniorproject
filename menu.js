// Function to handle help popup
document.addEventListener('DOMContentLoaded', function () {
    const menuButton = document.getElementById('menu-button');
    const menuContainer = document.getElementById('menu-container');
    const menucloseBtn = document.querySelector('.menuclose-btn');
    // Show instructions container
    menuButton.addEventListener('click', function () {
        menuContainer.classList.add('visible');
    });

    // When the user clicks the close button, close the popup
    menucloseBtn.onclick = function() {
        menuContainer.classList.remove('visible');
    };

// Close the container when clicking outside of it
window.onclick = function(event) {
    if (event.target == menuContainer) {
        menuContainer.classList.remove('visible');
    }
}

});