class Turtle {

    constructor(x,y) {
        this.positions =  [{ x, y }] ;
        this.directionX = 1;
        this.directionY = 0;
    }

    forward(steps) {
        for (let i=1;i<=steps;i++){
        let x = this.positions[this.positions.length - 1].x + this.directionX ;
        let y = this.positions[this.positions.length - 1].y  +this.directionY;
        this.positions.push({ x, y });

        }
       
        return this;
    }
   

    right() {
        let _directionX = this.directionX;
        let _directionY = this.directionY;
        this.directionX = - _directionY;
        this.directionY = _directionX;
        return this;
    }

    left() {
        let _directionX = this.directionX;
        let _directionY = this.directionY;
        this.directionX = _directionY;
        this.directionY = - _directionX;
        return this;
    }
    
    allPoints() {
        let history = [];
        history=this.positions.map(Object.values);
        return history;
    }

    print() {
        let h=this.positions;
        let x = h.map(position => position.x);
        let y = h.map(position => position.y);
        let max_x = Math.max(...x, 0);
        let max_y = Math.max(...y, 0);
        let min_x = Math.min(...x, 0);
        let min_y = Math.min(...y, 0);

        for(let j=min_y;j<=max_y;j++){   
            console.log(`\n`)
            for(let i=min_x;i<=max_x;i++){

                let active = false;
                for(let k=0;k<h.length;k++){  
                    if (h[k].x==i && h[k].y==j) {
                        active = true;
                    }
                }

                if (active) {
                    process.stdout.write(` ■ `)
                } else {
                    process.stdout.write(` □ `)
                }
            }
        }
        console.log(`\n`)
    }
 
}


new Turtle(0, 4)
.forward(3)
.left()
.forward(3)
.right()
.forward(5)
.right()
.forward(8)
.right()
.forward(5)
.right()
.forward(3)
.left()
.forward(3)
.print();