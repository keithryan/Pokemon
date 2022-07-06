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
        this.width = 48
        this.length = 48
    }

    draw() {
        
        c.fillStyle = 'red'
        c.fillRect(this.position.x, this.position.y, this.width, this.height)
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
image.src = 'Pokemon Game Map.png'

const playerImage = new Image()
playerImage.src = './Game Assets/playerDown.png'

class Sprite {
    constructor({
        position,
        velocity,
        image
    }) { 
        this.position = position
        this.image = image
    }
    draw() {
        c.drawImage(this.image, this.position.x, this.position.y)
      //  console.log(this.position)
    }
}

const background = new Sprite({
    position: {
    x: offset.x,
    y: offset.y
},
image: image
})

const keys = {
    ArrowUp: {
        pressed: false
    },
    ArrowLeft: {
        pressed: false
    },
    ArrowRight: {
        pressed: false
    },
    ArrowDown: {
        pressed: false
    }
}

const testBoundary = new Boundary({
position: {
    x: -600,
    y: -300
}
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
        if (keys.ArrowUp.pressed && lastKey === 'ArrowUp') background.position.y += 3
        else if (keys.ArrowDown.pressed && lastKey === 'ArrowDown') background.position.y -= 3
        else if (keys.ArrowLeft.pressed && lastKey === 'ArrowLeft') background.position.x += 3
        else if (keys.ArrowRight.pressed && lastKey === 'ArrowRight') background.position.x -= 3
     }
animate()

let lastKey = ''
    window.addEventListener('keydown',  (e)  => {
        switch (e.code) {
            case 'ArrowUp': // up
                keys.ArrowUp.pressed = true
                lastKey = 'ArrowUp'
            break
            case 'ArrowLeft': //left
                keys.ArrowLeft.pressed = true
                lastKey = 'ArrowLeft'
            break
            case 'ArrowRight':  //right
                keys.ArrowRight.pressed = true
                lastKey = 'ArrowRight'
            break
            case 'ArrowDown':  //down 
                keys.ArrowDown.pressed = true
                lastKey = 'ArrowDown'
            break
        }
    })

    window.addEventListener('keyup',  (e)  => {
        switch (e.code) {
            case 'ArrowUp': // up
                keys.ArrowUp.pressed = false
            break
            case 'ArrowLeft': //left
                keys.ArrowLeft.pressed = false
            break
            case 'ArrowRight':  //right
                keys.ArrowRight.pressed = false
            break
            case 'ArrowDown':  //down 
                keys.ArrowDown.pressed = false
            break
        }
    })