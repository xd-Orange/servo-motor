input.onButtonPressed(Button.A, function () {
    pins.servoWritePin(AnalogPin.P0, 360)
    basic.pause(1000)
})
input.onButtonPressed(Button.B, function () {
    pins.servoWritePin(AnalogPin.P0, 0)
    basic.pause(1000)
})
