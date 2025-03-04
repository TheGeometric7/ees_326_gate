let isOpen = false, rotSpeed = 100, rotTime = 500;
servos.P0.setRange(70, 110);
servos.P1.setRange(70, 110);
basic.forever(function () {
    if (input.buttonIsPressed(Button.AB)) {
        servos.P0.run(isOpen ? rotSpeed : -rotSpeed);
        servos.P1.run(isOpen ? -rotSpeed : rotSpeed);
        basic.pause(rotTime);
        servos.P0.stop();
        servos.P1.stop();
    };
});