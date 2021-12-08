class Player {
    constructor() {
        this.name = null;
        this.index = null;
        this.positionX = null;
        this.positionY = null;
        this.rank = 0
        this.life = 185
        this.score = 0
    }
    getCount() {
        var gameStateref = database.ref("playerCount")
        gameStateref.on("value", data => {
            playerCount = data.val()
        })
        


    }
    update() {
        var playerIndex = "players/player" + this.index;
        database.ref(playerIndex).update({
          positionX: this.positionX,
          positionY: this.positionY,
          rank: this.rank,
          score: this.score,
          life: this.life
        });
      }
    addPlayers() {
        var playerIndex = "players/player" + this.index
        if (this.index == 1) {
            this.positionX = width / 2 - 100
        } else {
            this.positionX = width / 2 + 100
        }
        database.ref(playerIndex).set({
            name: this.name,
            positionX: this.positionX,
            positionY: 0,
            rank : this.rank,
            score : this.score,
            life : this.life
        });
    }
    getDistance() {
        var playerDistanceRef = database.ref("players/player" + this.index);
        playerDistanceRef.on("value", data => {
          var data = data.val();
          this.positionX = data.positionX;
          this.positionY = data.positionY;
        });
      }

     updateCount(count) {

        database.ref("/").update({
            playerCount: count
        });
    }
    static getPlayersInfo() {
        var playerInfoRef = database.ref("players");
        playerInfoRef.on("value", data => {
            allPlayers = data.val();
        });
    }
}
