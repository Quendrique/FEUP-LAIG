var DEGREE_TO_RAD = Math.PI / 180;

class CircularAnimation extends Animation {

    constructor(scene, deltaTime, centre, radius, initAngle, rotAngle) {
        super(scene, deltaTime);
        this.centre = centre;
        this.radius = radius;
        this.initAngle = initAngle * DEGREE_TO_RAD;
        this.rotAngle = rotAngle * DEGREE_TO_RAD;
        this.velocity = 0;
        this.angularVelocity = 0;
        this.currAngle = 0;
    }

    initCircularAnimation() {
        this.currAngle = this.initAngle * DEGREE_TO_RAD;
        let arcLength = 2 * Math.PI * this.radius * (this.rotAngle/360);
        this.velocity = arcLength / deltaTime;
        this.angularVelocity = this.velocity / this.radius;
    }

    apply() {
        this.scene.translate(centre[0], centre[1], centre[2]);
        this.scene.rotate(this.currAngle, 0, 1, 0);
        this.scene.translate(0, 0, this.radius);
    }

    update(deltaTime) {
        this.currAngle += this.angularVelocity * deltaTime;
    }

}