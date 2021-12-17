let MoistureReading = 0
basic.forever(function () {
    MoistureReading = Math.map(pins.analogReadPin(AnalogPin.P0), 0, 750, 0, 100)
    led.plotBarGraph(
    MoistureReading,
    100
    )
    basic.pause(500)
    basic.showNumber(Math.round(MoistureReading))
    basic.pause(500)
    basic.clearScreen()
})
