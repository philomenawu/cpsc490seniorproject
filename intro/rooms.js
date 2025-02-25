// Inside rooms
const gameData = {
    start: {
        description: `You're in a dark room. There's a telephone ringing.`,
        commands: {
            'start': { 
                        output: `You're in a dark room. There's a <span style="color: yellow;">TELEPHONE</span> across the room loudly ringing. You don't know how long it's
                        been going off. It's been a long day at the hospital, and you always find yourself in a deep slumber shortly after 
                        arriving home. You don't know when you fell asleep (or for how long), on the <span style="color: yellow;">COUCH</span> nonetheless, but you pick yourself up and stretch your arms
                        and neck. There's a deep ache in your bones, <i>God you're getting old</i>. You grope the <span style="color: yellow;">COUCH</span> looking for your <span style="color: yellow;">GLASSES</span> until
                        you realize it must have fallen to the <span style="color: yellow;">FLOOR</span>.`},
            'go north': { nextRoom: 'bedroom', output: `You move north and walk into your bedroom.`},
            'go south': { output: `You really should answer the <span style="color: yellow;">TELEPHONE</span> call before you leave the house.`},
            'go east': { nextRoom: 'kitchen', output: `You move east and walk into the kitchen.` },
            'go west': { nextRoom: 'diningroom', output: `You move west and walk into the dining room.` },
            'pick up glasses': {
                        output: `You bend over and pick up your <span style="color: yellow;">GLASSES</span>. They're a rather small pair of round frames that have lasted you almost
                        a decade by now despite how many times they've been tossed around. You put them on.`, 
                        action: function() {
                            if (!gameState.inventory.includes('glasses')) {
                                gameState.inventory.push('glasses');
                            }
                            gameData.start.commands['pick up glasses'].output = `You already have your <span style="color: yellow;">GLASSES</span> on.`;
                            gameData.start.commands['examine floor'].output = `<i>It's quite dusty.</i>`;
                        }},
            'look': { 
                        output: `You're in the living room. You just got up from the <span style="color: yellow;">COUCH</span> which seems to be your new favorite sleeping spot. 
                        A large maroon patterned <span style="color: yellow;">RUG</span> covers the dusty wooden <span style="color: yellow;">FLOOR</span>. There's a taxidermied <span style="color: yellow;">TIGER</span> that you and your friends hunted last year on 
                        display on top of a small table by the staircase. Next to it is a lone black <span style="color: yellow;">TELEPHONE</span>. Being the only doctor in the village, your house is one of the few 
                        to have a <span style="color: yellow;">TELEPHONE</span> in order to take emergency calls from the village hospital, but you can't say you've ever gotten used to the noise. 
                        It feels like just yesterday when you first encountered electricity. You still remember the awe you felt 
                        seeing light from a tiny glass bulb...You check your watch and see that it's a quarter past midnight.`},
            'pick up telephone': { output: `You carefully place the telephone back down.`},
            'examine tiger': { output: `The skin of the tiger hangs limply over the wooden model. Its glass eyes seem to follow your every step. You run your fingers through the vibrant fur and make a silent blessing to its spirit.`},
            'examine rug': {output: `You remember when the decorated rug was first on display at the shop...it wasn't there for long before you came home to find it suddenly moved to the living room.`},
            'examine floor': {output: `You've been finding yourself waking up to your <span style="color: yellow;">GLASSES</span> on the floor lately. You should try to take better care of them. 
                        It'll be quite the trip to have to buy new ones which you know your wife wouldn't be too pleased about.`},
            'examine couch': {output: `The couch has been broken in and worn down throughout the years from being your second bed. Despite how often your wife brings up the idea of replacing it, 
                        you're reluctant to let it go.`},
            'help': { output: `VALID COMMAND EXAMPLES: look, go north, go south, go east, go west, examine [item], pick up [item].<br>
                <i>HINT: Look around the room to search for clues and see what items can be interacted with.</i>
                `}
        }
    },
    bedroom: {
        description: `Your <span style="color: yellow;">WIFE</span> is asleep on the bed. The pale light of the moon casts a soft glow on her face. 
                        Despite the years together, she doesn't look to have aged since the two of you first met. 
                        She looks even younger when she's asleep. You don't know how she does it all, running the shop while taking
                        care of the three little runts. The two of you were never the most talkative. You sometimes wonder how she truly feels about you.`,
        commands: {
            'go north': { output: `You can not move north from here.`},
            'go south': { nextRoom: 'start', output: `You move south.` },
            'go east': { nextRoom: 'children', output: `You move east and walk into your children's bedroom.`},
            'go west': { output: `You can not move west from here.`},
            'look': { output: `A large mosquito net surrounds the bed, tied to the wooden frames. You <span style="color: yellow;">WIFE</span> is soundly asleep. A <span style="color: yellow;">MIRROR</span> hangs by the bedroom door. 
                                There's a small nightstand next to your side of the bed. Your pocket <span style="color: yellow;">JOURNAL</span> is neatly placed on top.`},
            'check mirror': { output: `You look at your reflection.`,
                              action: function() {
                                gameState.action.push('mirror_1');
                                gameState.mirrorState = true;
                                handleMirror();
                              }
            },
            'examine journal': { 
                        output: `You flip open the journal to the latest entry.`,
                        action: function() {
                                gameState.action.push('journal_1');
                                gameState.journalState = true;
                                handleJournal();
                        }},
            'take journal': { output: `You pick up the journal and slide it into the pocket of your jacket.`,
                              action: function() {
                                    gameData.bedroom.commands['take journal'].output = 'You already have your journal.';
                                    gameData.bedroom.commands['look'].output = `A large mosquito net surrounds the bed, tied to the wooden frames. You <span style="color: yellow;">WIFE</span> is soundly asleep. 
                                    A <span style="color: yellow;">MIRROR</span> hangs by the bedroom door. There's a small nightstand next to your side of the bed.`;
                                }
            },
            'examine wife':{output: `Despite the years together, she doesn't look to have aged since the two of you first met. 
                        She looks even younger when she's asleep.`},
            'wake up wife':{ output: `Seeing how tired she looked when you got home, you'd rather not wake her up right now and risk facing her wrath.`},
            'help': { output: `VALID COMMAND EXAMPLES: look, go north, go south, go east, go west, examine [item], take [item], check [item], etc.`}
        }
    },
    children: {
        description: ``,
        commands: {
            'go north': { output: `You can not move north from here.`},
            'go south': { output: `You can not move south from here.`},
            'go east': { output: `You can not move east from here.`},
            'go west': { nextRoom: 'bedroom', output: `You move west and walk into your bedroom.`},
            'look': { output: ``},
            'wake up children': { output:  ``},
        }
    },
    kitchen: {
        description: `The kitchen countertops are cluttered with scribbled <span style="color: yellow;">NOTES</span> on curious medical cases 
                        and old <span style="color: yellow;">LISTS</span> of ingredients to buy from the village market.`,
        commands: {
            'go north': { output: `You can not move north from here.`},
            'go south': { output: `You can not move south from here`},
            'go east': { output: `You can not move east from here`},
            'go west': { nextRoom: 'start', output: `You move west.` },
            'look': { output: `The kitchen countertops are cluttered with scribbled <span style="color: yellow;">NOTES</span> and grocery <span style="color: yellow;">LISTS</span>.` },
            // Make into popup container
            'examine notes': {
                    output: `You have to squint in order to read over the messy note. The note recalls a recent incident of a young man suddenly losing
                    all feelings in both his legs after a nightmare. There was no history of diseases or recent illness, but you distinctly remember him being delirious about a 
                    'mountain spirit' seeking out its vengeance on him...`},
            'examine lists': {output: `Corn, Pumpkin, Oxtail...looks like we're having sabuti for dinner tomorrow.`},
            'help': { output: `VALID COMMAND EXAMPLES: look, go north, go south, go east, go west, examine [item], pick up [item].<br>
                <i>HINT: Examine an item in order to read it or give it a closer inspection.</i>`}
        }
    },
    diningroom: {
        description: `The dining table is cluttered with crumpled up homework sheets and dull pencils. Despite how many times you've
                        scolded your children to keep the room tidy, it always seems to undo itself by the end of the day.  An unlit gas <span style="color: yellow;">LAMP</span> sits at the end of the table with a matchbox beside it.`,
        commands: {
            'go north': { output: `You can not move north from here.`},
            'go south': { output: `You can not move south from here`}, 
            'go east': { nextRoom: 'start', output: `You move east.` },
            'go west': { output: `You can not move west from here.`},
            'look': { output: `The dining table is cluttered with crumpled up homework sheets and dull pencils. An unlit gas <span style="color: yellow;">LAMP</span> sits at the end of the table.` },
            'pick up lamp': { 
                      output: `You shake a match out of the matchbox and light the lamp. The light flickers wildly against the walls as you pick it up.`,
                      action: function() {
                        if (!gameState.inventory.includes('lamp')) {
                            gameState.inventory.push('lamp');
                            document.getElementById('body').classList.add('glowing-background');
                        }
                        if (gameState.action.includes('call_1')) {
                            gameData.start.commands['go south'].action = function() {
                                window.location.href = 'transition.html';
                            };
                        }
                        else {
                        gameData.start.commands['go south'].output = `You really should answer the telephone call before you leave the house.`;
                        gameData.diningroom.commands['pick up lamp'].output = `You are already holding the lamp.`;
                        gameData.diningroom.commands['look'].output = `The dining table is cluttered with crumpled up homework sheets and dull pencils.`
                        }
                      }},
            'help': { output: `VALID COMMAND EXAMPLES: look, go north, go south, go east, go west, examine [item], pick up [item].`}
            }
        }
    };