input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 4; index++) {
        Sprite.move(1)
        Sprite.turn(Direction.Right, 90)
    }
})
let Sprite: game.LedSprite = null
Sprite = game.createSprite(0, 0)
