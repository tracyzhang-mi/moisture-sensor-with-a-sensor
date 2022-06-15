input.onButtonPressed(Button.A, function () {
    MoistureReading = Math.map(pins.analogReadPin(AnalogPin.P0), 0, CalibrateWet, 0, 100)
    basic.showNumber(Math.round(MoistureReading))
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    CalibrateWet = pins.analogReadPin(AnalogPin.P0)
    basic.showIcon(IconNames.Yes)
})
let MoistureReading = 0
let CalibrateWet = 0
CalibrateWet = 750
basic.forever(function () {
    MoistureReading = Math.map(pins.analogReadPin(AnalogPin.P0), 0, CalibrateWet, 0, 3)
    if (MoistureReading <= 1) {
        basic.showLeds(`
            # . . . #
            # # . # #
            . # . # .
            . # . # .
            . # # # .
            `)
    } else if (MoistureReading <= 1 && MoistureReading <= 2) {
        basic.showLeds(`
            # . . . #
            # # . # #
            . # # # .
            . # # # .
            . # # # .
            `)
    } else {
        basic.showLeds(`
            # # # # #
            # # # # #
            . # # # .
            . # # # .
            . # # # .
            `)
    }
})
