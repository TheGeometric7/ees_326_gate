let isOpen = false, rotSpeed = 5, rotTime = 500;
servos.P0.setRange(70, 110);
servos.P1.setRange(70, 110);
basic.forever(function () {
    if (input.buttonIsPressed(Button.AB)) {
        servos.P0.run(isOpen ? -rotSpeed * 2 : rotSpeed);
        servos.P1.run(isOpen ? rotSpeed : -rotSpeed * 2);
        isOpen = !isOpen;
        basic.pause(rotTime);
        servos.P0.stop();
        servos.P1.stop();
    };
});