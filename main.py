isOpen = False
rotSpeed = 100
rotTime = 500
servos.P0.set_range(70, 110)
servos.P1.set_range(70, 110)

def on_forever():
    global rotSpeed
    if input.button_is_pressed(Button.AB):
        servos.P0.run(rotSpeed if isOpen else -rotSpeed)
        servos.P1.run(-rotSpeed if isOpen else rotSpeed)
        basic.pause(rotTime)
        servos.P0.stop()
basic.forever(on_forever)
