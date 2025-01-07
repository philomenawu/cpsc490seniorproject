// Cut scene art
// separate javascript file linked in html file
// replace container when leaving the room
// iframe (use separate html file), load separate html file
// look into sending info/data through

// Responsive design
// Different containers (hide/show depending on scene)

// Initial game state
let gameState = {
    currentRoom: 'start',
    inventory: [],
    action: [],
    dialogueState: false,
    startState: false,
    journalState: false,
};

// Format output for command
function updateGameOutput(message, userInput = '') {
    const outputDiv = document.getElementById('textoutput');
    if (userInput) {
        // Display user input in output
        outputDiv.innerHTML += `<p><strong>You:</strong> <strong><em>${userInput}</em></strong></p>`;
    }
    outputDiv.innerHTML += `<p>${message}</p>`;
    outputDiv.scrollTop = outputDiv.scrollHeight;
}

// Function to calculate Levenshtein distance using two matrix rows
function levenshtein(str1, str2) {
    const m = str1.length;
    const n = str2.length;
 
    // Initialize two arrays to represent the matrix rows
    let prevRow = new Array(n + 1).fill(0);
    let currRow = new Array(n + 1).fill(0);
 
    // Initialize the first row with consecutive numbers
    for (let j = 0; j <= n; j++) {
        prevRow[j] = j;
    }
 
    // Dynamic programming to fill the matrix
    for (let i = 1; i <= m; i++) {
        currRow[0] = i;
 
        for (let j = 1; j <= n; j++) {
            // Check if characters at the current positions are equal
            if (str1[i - 1] === str2[j - 1]) {
                currRow[j] = prevRow[j - 1];
            } else {
                // Choose the minimum of three possible operations (insert, remove, replace)
                currRow[j] = 1 + Math.min(
                    currRow[j - 1],
                    prevRow[j],
                    prevRow[j - 1]
                );
            }
        }
 
        // Update the previous row with the current row for the next iteration
        prevRow = [...currRow];
    }
 
    // The result is the value at the bottom-right corner of the matrix
    return currRow[n];
}

// Parse user input
function parseInput() {
    const inputField = document.getElementById('userinput');
    let userInput = inputField.value.trim().toLowerCase();

    // Clear input field
    inputField.value = '';

    // Get the current room data
    const currentRoom = gameState.currentRoom;
    const roomData = gameData[currentRoom];
    if (!userInput) {
        updateGameOutput("Unable to process command.");
        return;
    }
    
    // Handle typo correction using levenshtein function
    if (!roomData.commands[userInput]) {
        let closestMatch = null;
        const threshold = 2;

        Object.keys(roomData.commands).forEach(command => {
            const distance = levenshtein(userInput, command);
            if (distance <= threshold) {
                closestMatch = command;
            }
        });

        if (closestMatch) {
            console.log(`Closest match found: ${closestMatch}`);
            userInput = closestMatch;
        }
    }

    if (!gameState.startState) {
        if (userInput === 'start') {
            gameState.startState = true;
            updateGameOutput(roomData.commands[userInput].output, userInput);
            roomData.commands[userInput].output = 'The game has already started.';
        }
        else {
            updateGameOutput('Type \'start\' to start the game.', userInput);
        }
        return;
    }

    if (gameState.dialogueState) {
        handleDialogue(userInput); 
        return;
    }

    if (gameState.journalState) {
        handleJournal(userInput);
        return;
    }

    // Check if the command exists in the current room's commands
    if (roomData.commands[userInput]) {
        const command = roomData.commands[userInput];
        // Check if player has ability to look
        if (userInput === 'look') {
            if (!gameState.inventory.includes('glasses')) {
                updateGameOutput('You can not see clearly without your <span style="color: yellow;">GLASSES</span>. <i>It must have fallen to the floor somewhere...</i>', userInput);
            }
            else {
                updateGameOutput(command.output, userInput);
            }
        }
        else if (userInput == 'pick up telephone') {
            if (gameState.action.includes('call_1')) {
                updateGameOutput('You already answered the <span style="color: yellow;">TELEPHONE</span>.', userInput);
            }
            else {
                if (!gameState.inventory.includes('lamp')) {
                    gameData.start.commands['go south'].output = 'You open the front door. It is too dark to treck down the mountain.';
                }
                else {
                    gameData.start.commands['go south'].action = function() {
                        window.location.href = 'transition.html';
                    };
                }
                gameData.start.description = 'You\'re in a dark room. The room is silent now.';
                updateGameOutput(command.output, userInput);
                startDialogueScene();
            }
        }
        // Check if player is moving to different room
        else if (command.nextRoom) {
            gameState.currentRoom = command.nextRoom;
            updateGameOutput(command.output, userInput);
            updateGameOutput(gameData[command.nextRoom].description);
        }
        else {
            updateGameOutput(command.output, userInput);
            if (command.action) {
                command.action();
            }
        }
        console.log('inventory:', gameState.inventory);
        console.log('completed action:', gameState.action);
    } 
    else {
        updateGameOutput(`Unable to process command. Type 'help' to see a list of example commands.` , userInput);
    }
    }


// Event listener for "enter" key to submit command
document.addEventListener('DOMContentLoaded', function () {
    const inputField = document.getElementById('userinput'); 
    if (inputField) {
        inputField.addEventListener('keydown', function (event) {
            if (event.key === 'Enter') {
                parseInput();
            }
        });
    }
});