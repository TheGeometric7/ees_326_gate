let isGateOpen = false
let rotSpeed = 5
let negRotSpeed = -5
let rotTime = 700
servos.P0.setRange(70, 110)
servos.P1.setRange(70, 110)
basic.forever(function () {
    if (input.buttonIsPressed(Button.AB)) {
        if (isGateOpen == false) {
            servos.P0.run(rotSpeed)
            servos.P1.run(negRotSpeed)
        } else {
            servos.P0.run(negRotSpeed)
            servos.P1.run(rotSpeed)
        }
        isGateOpen = !(isGateOpen)
        basic.pause(rotTime)
        servos.P0.stop()
        servos.P1.stop()
    }
})
