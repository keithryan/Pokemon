const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = 1024
canvas.height = 576

const collisionsMap = []
for (let i = 0; i < collisions.length; i += 70) {
    collisionsMap.push(collisions.slice(i, 70 + i))
}

class Boundary {
    static width = 48
    static height = 48
    constructor({position}) {
        this.position = position        
    }

    draw() {        
        c.fillStyle = 'red'
        c.fillRect(this.position.x, this.position.y, Boundary.width, Boundary.height)
        //console.log(this.position)
    }
}

const boundaries = []
const offset = {
    x: -600,
    y: -300
    }

collisionsMap.forEach((row, i) => {
    row.forEach((symbol, j) => {
        if (symbol === 1025)
            boundaries.push(
                new Boundary({
                    position: {
                        x: j * Boundary.width + offset.x,
                        y: i * Boundary.height + offset.y
                    }
                })
            )
    })
})

const image = new Image()
image.src = './Zones/Starting Island/Starting Island Map.png'

const playerImage = new Image()
playerImage.src = './Game Assets/playerDown.png'


const background = new Sprite({
    position: {
    x: offset.x,
    y: offset.y
},
image: image
})


    function animate() {
        window.requestAnimationFrame(animate)
        background.draw()
        // boundaries.forEach(boundary => {
        //     boundary.draw()
        // })
        testBoundary.draw()
     c.drawImage(playerImage,
        0, 
        0,
        playerImage.width / 4,
        playerImage.height,
        canvas.width / 2 - (playerImage.width / 4) / 2,
        canvas.height / 2 - playerImage.height / 2,
        playerImage.width / 4,
        playerImage.height
        )

        keysPressed.forEach((keyCode) => {
            if(keys[keyCode])
                keys[keyCode].action();
        })
     }

animate()


var keysPressed = [];

window.addEventListener('keydown',  (e)  => {
    keysPressed = keysPressed.filter(x => x != e.code);
    keysPressed.push(e.code);        
})

window.addEventListener('keyup',  (e)  => {
    keysPressed = keysPressed.filter(x => x != e.code);        
})