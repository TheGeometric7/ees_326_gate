let isOpen = 0
let xdeg = 90
servos.P0.setAngle(180)
servos.P1.setAngle(0)
basic.forever(function () {
    if (input.buttonIsPressed(Button.AB)) {
        if (isOpen == 1) {
            servos.P0.setAngle(180 + xdeg);
            servos.P1.setAngle(0 - xdeg);
            isOpen += -1;
            return;
        } else if (isOpen == 0) {
            servos.P0.setAngle(180 - xdeg);
            servos.P1.setAngle(xdeg);
            isOpen += 1;
            return;
        } else return;
    } else return;
});