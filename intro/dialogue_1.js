// Call_1 Dialogue Script
const dialogue = [
    `You: Hello? This is ဆရာဝန် speaking.`,
    `Nurse: ဆရာဝန်, I apologize for the late call, but a villager is here in regards to his wife.`,
    `You: I see, what's wrong?`,
    `Nurse: Apparently his wife has been vomitting all night with a fever that has not gone down since earlier this morning, 
     and her symptoms seem to have worsened. She remains bedridden back in their house as he was unable to bring her to the hospital.`,
    `You: Can you put the husband on the phone? `,
    `Villager: Hello, ဆရာဝန်? Can you hear me? ဆရာဝန်, please, I don't know what to do. My wife- she's a sickly woman and tends to get
     the cold every once and a while, but she's never gone through anything like this. She can barely speak. I'm begging you, please come take a look at her.`,
     {
        options: [
            {text: `You: I'll meet you at the hospital and you can bring me to her. Since I live farther up the mountain, it'll take me 20 minutes or so to get down there.`, 
            output: `Villager: Oh, thank you, ဆရာဝန်, thank you. I understand, I'll be waiting for you here.`},
        ]
     },
];

// Track current dialogue line
let dialogueIndex = 0;

// Show container
function startDialogueScene() {
    gameState.action.push('call_1');
    gameState.dialogueState = true;
    dialogueIndex = 0;
    document.getElementById('text-container').style.display = 'block';
    document.getElementById('dialogue-container').style.display = 'flex';
    document.getElementById('next-button').style.display = 'block';
    handleDialogue();
}

// Iterate through dialogue lines
function handleDialogue() {
    const dialogueContainer = document.getElementById('dialogue-container');
    const textContainer = document.getElementById('text-container');
    const nextButton = document.getElementById('next-button');


    // Make links for options
    if (dialogueIndex < dialogue.length) {
        if (typeof dialogue[dialogueIndex] === 'object' && dialogue[dialogueIndex].options) {
            dialogue[dialogueIndex].options.forEach((option, index) => {
                nextButton.style.display = 'none';
                const optionElement = document.createElement('a');
                optionElement.href = '#';
                optionElement.innerText = option.text;
                optionElement.style.color = 'white';
                optionElement.addEventListener('click', () => {
                    textContainer.innerHTML += `<p>${option.output}</p>`;
                    nextButton.style.display = 'block';
                    textContainer.scrollTop = textContainer.scrollHeight;
                });
                textContainer.appendChild(optionElement);
                textContainer.appendChild(document.createElement('br'));
                textContainer.appendChild(document.createElement('br'));
            });
            dialogueIndex++; 
        }
        // Display dialogue lines
        else {
            textContainer.innerHTML += `<p>${dialogue[dialogueIndex]}</p>`;
            dialogueIndex++;
            textContainer.scrollTop = textContainer.scrollHeight;
        }
    } 
    // Close dialogue scene
    else {
        dialogueContainer.style.display = 'none';
        textContainer.style.display='none';
        nextButton.style.display = 'none';
        gameState.dialogueState = false;
    }
}

// Event listener for "next" button in dialogue scene
document.getElementById('next-button').addEventListener('click', handleDialogue);