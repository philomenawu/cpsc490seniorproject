// Inside rooms
const gameData = {
    start: {
        description: ``,
        commands: {
            'look': { output: ``},
            'go to pew': { nextRoom: 'pew', output: ``,                 
                action: function () {
                    document.getElementById('topimg').src="2x/pew.png";
                }
            },
            'go to confessional':{ nextRoom: 'confession', output: ``,
                action: function () {
                    document.getElementById('topimg').src="2x/confession.png";
                  }
            },
            'go to altar': { nextRoom: 'altar', output: ``, 
                    action: function () {
                        document.getElementById('topimg').src="2x/altar.png";
                      }
            }
        }
    },
    pew: {
        description: ``,
        commands: {
            'look': { output: ``},
            'go to altar': { nextRoom: 'altar', output: ``,
                action: function () {
                    document.getElementById('topimg').src="2x/altar.png";
                  }
            },
            'go to entrance': { nextRoom: 'start', output: ``,
                action: function () {
                    document.getElementById('topimg').src="2x/church_1.png";
                  }
            },
            'go to confessional':{ nextRoom: 'confession', output: ``,
                action: function () {
                    document.getElementById('topimg').src="2x/confession.png";
                  }
            },
        }
    },
    confession: {
        description: ` `,
        commands: {
            'look': { output: ``},
            'enter confessional': { nextRoom: 'booth', output: ``,
                action: function () {
                    document.getElementById('topimg').src="2x/booth.png";
                  }
            },
            'go to altar': { nextRoom: 'altar', output: ``,
                action: function () {
                    document.getElementById('topimg').src="2x/altar.png";
                  }
            },
            'go to entrance': { nextRoom: 'start', output: ``,
                action: function () {
                    document.getElementById('topimg').src="2x/church_1.png";
                  }
            },
            'go to pew': { nextRoom: 'pew', output: ``,                 
                action: function () {
                    document.getElementById('topimg').src="2x/pew.png";
                }
            }
        }
    },
    booth: {
        description: ``,
        commands: {
            'look': { output: ``},
            'leave confessional': { nextRoom: 'confession', output: ``,
                action: function () {
                    document.getElementById('topimg').src="2x/confession.png";
                  }
            }
        }
    },
    altar: {
        description: ``,
        commands: {
            'look': { output: ``},
            'go to entrance': { nextRoom: 'confession', output: ``,
                action: function () {
                    document.getElementById('topimg').src="2x/church_1.png";
                  }
            },
            'go to confessional':{ nextRoom: 'confession', output: ``,
                action: function () {
                    document.getElementById('topimg').src="2x/confession.png";
                  }
            },
            'go to pew': { nextRoom: 'pew', output: ``,                 
                action: function () {
                    document.getElementById('topimg').src="2x/pew.png";
                }
            }
    }
    }
};