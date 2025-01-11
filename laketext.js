// Inside rooms
const gameData = {
    start: {
        description: `.`,
        commands: {
            'look': { output: `You're at a small lake hidden deep within the mountains. It's been a while since you last came here...it's the kind of place you just have to stumble upon, and 
                      it's been many summers since you strayed this way. You wonder if your children ever play around here. The thickets are overgrown and the
                      water level is much lower than you remember. You swing your lamp to check for any leeches around your feet. The large milky moon shines brightly over you. 
                      You see a large tree <span style="color: yellow;">STUMP</span> in the distance and the broken pieces 
                      of a small wooden <span style="color: yellow;">BOAT</span>. The chorus of crickets and frogs are awfully loud tonight. You notice a lone <span style="color: yellow;">FROG</span> leaping by the 
                      <span style="color: yellow;">SHORE</span>. <i>You wonder if you can catch it...</i>`},
            'examine frog': { output: `You need to catch the <span style="color: yellow;">FROG</span> first before you can examine it.`},
            'examine boat': { output: `The <span style="color: yellow;">BOAT</span> is too far for you to examine.`},
            'examine stump': { output: `The <span style="color: yellow;">STUMP</span> is too far for you to examine.`},
            'go to boat': { nextRoom: 'boat', output: `You move to the <span style="color: yellow;">BOAT</span>.`,
                action: function () {
                  document.getElementById('topimg').src="2x/boat.png";
                }
            },
            'go to stump': { nextRoom: 'stump', output: `You move to the <span style="color: yellow;">STUMP</span>.`,
                action: function () {
                  document.getElementById('topimg').src="2x/stump.png";
                }
            },
            'go to shore': { nextRoom: 'shore', output: `You move to the <span style="color: yellow;">SHORE</span>.`,
                action: function () {
                  document.getElementById('topimg').src="2x/shore.png";
                }
            },
            'go to frog': { output: `The frog is by the <span style="color: yellow;">SHORE</span>.`},
            'put down lamp': { output: `You should find a flat surface to safely put your lamp down.`},
            'help': { output: `VALID COMMAND EXAMPLES: look, examine [item], go to [].<br>
                <i>HINT: Look around to search for clues and see what items can be interacted with.</i>`}
        }
    },
    stump: {
        description: `Jagged roots sprawl across the ground surrounding the stump. You make sure to watch your step, <i> you shudder at the thought
        of tripping over and having to walk all the way back with a sprained ankle.</i> The top of the stump is smooth and flat. You wonder when it was chopped down.`,
        commands: {
            'look': { output: `You look around the stump. Its roots claw out from the ground like bony fingers scraping at the earth.`},
            'examine stump': { output: `You bring your face closer and trace your fingers around the cool flat wood as you count its rings. It's definitely older than you are.
                                You can tell from just how wide the trunk is that it was quite the mighty tree. You wonder if it was one of the many trees you liked to climb as a kid.`},
            'put down lamp': { output:  `You carefully put down your lamp on top of the stump.`,
                               action: function() {
                                gameState.inventory.push('lamp');
                                gameData.shore.commands['put down lamp'].output = `You already put down your lamp on the tree stump.`
                                if (gameState.inventory.includes('net')) {
                                    gameData.shore.commands['pick up frog'].output = `You slowly approach the frog before swiftly sweeping your net over it...</i>`
                                    gameState.inventory.push('frog');
                                    gameData.shore.commands['pick up frog'].action = function () {
                                        document.getElementById('topimg').src="2x/frog.png";
                                    }
                                    gameData.shore.commands['examine frog'].action = function() {
                                        window.location.href = 'transition.html';
                                    };
                                }
                                else {
                                gameData.shore.commands['pick up frog'].output = `You try picking up the frog with your bare hands but it's too quick. 
                                <i>You wonder if there's a contraption you can use...</i>`
                               }
                            }
            },
            'go to boat': { nextRoom: 'boat', output: `You move to the <span style="color: yellow;">BOAT</span>.`,
                action: function () {
                  document.getElementById('topimg').src="2x/boat.png";
                }
            },
            'go to shore': { nextRoom: 'shore', output: `You move to the <span style="color: yellow;">SHORE</span>.`,
                action: function () {
                  document.getElementById('topimg').src="2x/shore.png";
                }
            },
        }
    },
    boat: {
        description: `You walk over to what appears to be the remains of a small wooden boat. While the lake is tucked away deep within the mountains, you can recall a time when villagers would
        frequent it to catch fish and tell ghost stories around campfires during the cool summer nights. The boat seems to have been abandoned and worn down from the elements. `,
        commands: {
            'look': { output: `Pieces of a small broken wooden boat are strewn across the grass. `},
            'examine boat': { output: `You check inside the piece of the boat most intact and see forgetten items- bait, a broken fishing wire, and a net.`},
            'pick up net': { output: `You pick up the net. The wooden handle is broken and the threads are coming apart, but enough of it is still intact for you to use.`,
                             action: function() {
                                gameState.inventory.push('net');
                                if (gameState.inventory.includes('lamp')) {
                                    gameData.shore.commands['pick up frog'].output = `You slowly approach the frog before swiftly sweeping your net over it...</i>`
                                    gameState.inventory.push('frog');
                                    gameData.shore.commands['pick up frog'].action = function () {
                                        document.getElementById('topimg').src="2x/frog.png";
                                    }
                                    gameData.shore.commands['examine frog'].action = function() {
                                        window.location.href = 'transition.html';
                                    };
                                }
                                else {
                                    gameData.shore.commands['pick up frog'].output = `You should put down your lamp before you attempt catching a frog.`
                                }
                             }
            },
            'go to stump': { nextRoom: 'stump', output: `You move to the <span style="color: yellow;">STUMP</span>.`,
                action: function () {
                  document.getElementById('topimg').src="2x/stump.png";
                }
            },
            'go to shore': { nextRoom: 'shore', output: `You move to the <span style="color: yellow;">SHORE</span>.`,
                action: function () {
                  document.getElementById('topimg').src="2x/shore.png";
                }
            },
        }
    },
    shore : {
        description: `The shore of the lake is covered in small rocks and twigs. The reflection of the moon shines brightly across the still water. The tall grass gently sways with the
                      warm breeze.`,
        commands: {
            'look': { output: `You can see towering trees across the lake. Rocks and twigs cover the shore. You see a lone <span style="color: yellow;">FROG</span> resting on a larger rock nearby.`},
            'pick up frog': { output: `You should put down your lamp before you attempt catching a frog.`},
            'put down lamp': { output: `The ground is much too rocky for you to trust putting down your lamp here.`},
            'examine frog': { output: `You need to catch the frog first before you can examine it.`},
            'go to boat': { nextRoom: 'boat', output: `You move to the <span style="color: yellow;">BOAT</span>.`,
                action: function () {
                  document.getElementById('topimg').src="2x/boat.png";
                }
            },
            'go to stump': { nextRoom: 'stump', output: `You move to the <span style="color: yellow;">STUMP</span>.`,
                action: function () {
                  document.getElementById('topimg').src="2x/stump.png";
                }
            },
        }
    }
};