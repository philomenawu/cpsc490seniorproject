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
document.addEventListener('click', function (event) {
    if (
        menuContainer.classList.contains('visible') && // Ensure the container is visible
        !instructions.contains(event.target) && // Check if click is outside the instructions
        event.target !== menuButton // Ignore clicks on the menu button
    ) {
        menuContainer.classList.remove('visible');
    }
});

});