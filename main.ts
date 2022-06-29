basic.forever(function () {
    basic.showIcon(IconNames.Happy)
    dht11_dht22.queryData(
    DHTtype.DHT11,
    DigitalPin.P1,
    true,
    false,
    true
    )
    basic.showNumber(dht11_dht22.readData(dataType.humidity))
    basic.showIcon(IconNames.Heart)
    basic.showNumber(dht11_dht22.readData(dataType.temperature))
    datalogger.log(
    datalogger.createCV("H", dht11_dht22.readData(dataType.humidity)),
    datalogger.createCV("T", dht11_dht22.readData(dataType.temperature)),
    datalogger.createCV("t", input.temperature())
    )
    basic.showIcon(IconNames.SmallHeart)
    basic.showNumber(input.temperature())
    basic.pause(1000)
})
