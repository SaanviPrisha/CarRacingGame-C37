var database;
var playerCount = 0;
var gameState = 0;
var form, game;
var player, allPlayers;
var car1, car2, car3, car4
var cars = []

function setup(){
    createCanvas(windowWidth - 20,windowHeight- 10);
    
    database = firebase.database()

    game = new Game()
    game.getGameState();
    game.updateGameState(0);
    game.start();
}

function draw(){
    background(255)
    if(playerCount == 4) {
        game.updateGameState(1)
    }
    if(gameState == 1) {
        game.play();
    }
}

