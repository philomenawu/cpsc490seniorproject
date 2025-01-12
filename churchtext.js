// Inside rooms
const gameData = {
    start: {
        description: `You stand by the <span style="color: yellow;">ENTRANCE</span>. It's a quaint little church built by a group of villagers and missionaries a few years before you were born. You consider it your second home,
        seeing as how often your family would bring you as a boy and now your own family. Besides the village market, it serves as the community center- a place to share gossip and stories, but you've never been inside this late. 
        It's rather dark and empty. Only the light from your lamp lights the place. The resident priests and nuns must be asleep in the connecting rectory. 
        Although the church doors remain unlocked at all hours, it feels strange as if you are trespassing...`,
        commands: {
            'look': { output: `The rows of wooden carved <span style="color: yellow;">PEWS</span> span your field of view, leading up to an open sanctuary with a modest <span style="color: yellow;">ALTAR</span>. 
                A large cross hangs above it with stained glass windows on either side. The <span style="color: yellow;">CONFESSIONAL</span> booth is on the far back corner of the sanctuary.`},
            'go to pews': { nextRoom: 'pew', output: `You move to a pew.`,                 
                action: function () {
                    document.getElementById('topimg').src="2x/pew.png";
                }
            },
            'examine pews': { output: `You need to go to a pew before examining it.`},
            'go to confessional':{ nextRoom: 'confession', output: `You move to the confessional booth.`,
                action: function () {
                    document.getElementById('topimg').src="2x/confession.png";
                  }
            },
            'go to altar': { nextRoom: 'altar', output: `You move to the altar.`, 
                    action: function () {
                        document.getElementById('topimg').src="2x/altar.png";
                      }
            }
        }
    },
    pew: {
        description: `You take a seat on a pew closest to the <span style="color: yellow;">ALTAR</span>. You genuflect before taking a seat out of habit. ...`,
        commands: {
            'look': { output: ``},
            'pray': { output: ``},
            'examine missal': { output: ``},
            'go to altar': { nextRoom: 'altar', output: `You move to the altar.`,
                action: function () {
                    document.getElementById('topimg').src="2x/altar.png";
                  }
            },
            'go to entrance': { nextRoom: 'start', output: `You move to the entrance.`,
                action: function () {
                    document.getElementById('topimg').src="2x/church_1.png";
                  }
            },
            'go to confessional':{ nextRoom: 'confession', output: `You move to the confessional booth.`,
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
            'enter confessional': { nextRoom: 'booth', output: `You enter the confessional booth.`,
                action: function () {
                    document.getElementById('topimg').src="2x/booth.png";
                  }
            },
            'go to altar': { nextRoom: 'altar', output: `You move to the altar.`,
                action: function () {
                    document.getElementById('topimg').src="2x/altar.png";
                  }
            },
            'go to entrance': { nextRoom: 'start', output: `You move to the entrance.`,
                action: function () {
                    document.getElementById('topimg').src="2x/church_1.png";
                  }
            },
            'go to pew': { nextRoom: 'pew', output: `You move to a pew and take a seat.`,                 
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