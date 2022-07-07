class Point {
    
    constructor({ x = 0, y = 0, name = "" }) {
        this.x = x;
        this.y = y;
        this.name = name;
    }
}

class Sprite {
    constructor({ position, velocity, image }) { 
        this.position = position
        this.image = image
    }

    draw() {
        c.drawImage(this.image, this.position.x, this.position.y)
      //  console.log(this.position)
    }
}

class Player {

    /** @type {Point} */
    position;
    /** @type {Zone.Base} */
    Zone;

    constructor({ position }) {
        this.position = position;
    }

    /** 
     * @param {Zone.Base} zone
     * @param {Point} position 
     */
    MoveTo(zone, position) {
        this.Zone = zone;

        this.position.x = position.x;
        this.position.y = position.y;
    }

    MoveUp(){

    }

    MoveDown() {

    }

    MoveLeft() {

    }

    MoveRight() {

    }
}

Zone.Base = class {

    /** @type {Array<Point>} */
    SpawnPoints = []

    constructor() { }

    /**
     * @param {number} x 
     * @param {number} y 
     * @param {string} name 
     */
    SetSpawnPoint(x, y, name) {
        this.SpawnPoints.push(new Point(x, y, name));
    }

    /** 
     * @param {Player} player 
     * @param {string} spawnpoint
    */
    ArriveAt(player, spawnpoint) {
        let position = this.SpawnPoints.find(x => x.name == spawnpoint);
        player.MoveTo(this, position);
    }
}


