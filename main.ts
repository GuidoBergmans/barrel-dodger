controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.isHittingTile(CollisionDirection.Bottom)) {
        mySprite.vy = -200
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    game.over(false)
})
let projectile: Sprite = null
let mySprite: Sprite = null
tiles.setTilemap(tilemap`level7`)
mySprite = sprites.create(img`
    . . . . . . f b b f . . . . . . 
    . . . . f f b b b b f f . . . . 
    . . . f f b b b b b b f f . . . 
    . . f f b b b b b b b b f f . . 
    . . f b b b b b b b b b b f . . 
    . . f b b b b b b b b b b f . . 
    . . f f e e e e e e e e f f . . 
    . f f e e b f 4 4 f b e e f f . 
    . f e e 4 1 f d d f 1 4 e e f . 
    . . f e e d d d d d d e e f . . 
    . . . f e b b b b b b e f . . . 
    . . e 4 f b b b b b b f 4 e . . 
    . . 4 d f 2 b b b b 2 f d 4 . . 
    . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Player)
tiles.placeOnTile(mySprite, tiles.getTileLocation(1, 5))
mySprite.ay = 500
game.onUpdateInterval(2000, function () {
    projectile = sprites.createProjectileFromSide(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . f f f f f f f f . . . . 
        . . . f f f f f f f f f f . . . 
        . . f f f b f f f f f f f f . . 
        . . f f b f f f f f f f f f . . 
        . f f f f f f f f f f f f f f . 
        . f f f f f f f f f f f f f f . 
        . f f f f f f f f f f f f f f . 
        . f f f f f f f f f f f f f f . 
        . . f f f f f f f f f f f f . . 
        . . f f f f f f f f f f f f . . 
        . . . f f f f f f f f f f . . . 
        . . . . f f f f f f f f . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, randint(-100, -80), 0)
    tiles.placeOnTile(projectile, tiles.getTileLocation(9, 5))
    info.changeScoreBy(1)
})
