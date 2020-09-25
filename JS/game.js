class Game {
    constructor() {

    }
    getGameState() {
        var countRef = database.ref("gameState")
        countRef.on("value", function(data) {
            gameState = data.val()
        })
    }
    //updates the number of the player count
    updateGameState(State) {
        database.ref("/").update({
            gameState: State
        })
    }
    start() {
        if(gameState == 0) {
            player = new Player()
            player.getCount()

            form = new Form()
            form.display(); 
        }
        car1 = createSprite(100, 300)
        car2 = createSprite(300, 300)
        car3 = createSprite(500, 300)
        car4 = createSprite(700, 300)
        cars = [car1, car2, car3, car4]
    }
    play() {
        form.hide();
        Player.getPlayerInfo();

        if(allPlayers != undefined) {
            var yPosition = 130
            var index = 0
            var x = 0
            var y = 0
            for(var plr in allPlayers) {
                index = index + 1
                x = x + 200
                y = windowHeight - allPlayers[plr].distance
                cars[index-1].x = x
                cars[index-1].y = y
                if(index == player.index) {
                    cars[index-1].shapeColor = "purple"
                    camera.position.x = windowWidth/2
                    camera.position.y = cars[index-1].y
                } else {
                    cars[index-1].shapeColor = "blue"
                }
                //yPosition = yPosition + 30;
                //textSize(20)
                //text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120, yPosition)
            }
        }
        if(keyDown(UP_ARROW) && player.index != null) {
            player.distance = player.distance + 20;
            player.update()
        }
        drawSprites()
    }
}