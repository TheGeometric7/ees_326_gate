let isOpen = false, xdeg = 90;
servos.P0.setAngle(180);
servos.P1.setAngle(0);
basic.forever(function () {
    if (input.buttonIsPressed(Button.AB)) {
        servos.P0.setAngle(180 + (isOpen ? xdeg : -xdeg));
        servos.P1.setAngle(isOpen ? -xdeg : xdeg);
        isOpen = !isOpen;
        basic.pause(250);
    };
});