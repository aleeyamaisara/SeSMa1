let strip: neopixel.Strip = null
basic.forever(function () {
    basic.showIcon(IconNames.Giraffe)
    strip = neopixel.create(DigitalPin.P1, 7, NeoPixelMode.RGB)
    strip.setBrightness(50)
    for (let index = 0; index < 4; index++) {
        strip.showColor(neopixel.colors(NeoPixelColors.Green))
        basic.pause(100)
        strip.clear()
        strip.show()
        basic.pause(100)
    }
    strip.showColor(neopixel.colors(NeoPixelColors.Yellow))
})
basic.forever(function () {
    reromicro.ReadLineSensors()
    if (reromicro.LineSensorDetectsLine(LineSensors.Center)) {
        reromicro.MoveForward(35)
    } else if (reromicro.LineSensorDetectsLine(LineSensors.Left)) {
        reromicro.TurnLeft(35)
    } else if (reromicro.LineSensorDetectsLine(LineSensors.Right)) {
        reromicro.TurnRight(35)
    } else {
        reromicro.Brake()
    }
    if (reromicro.ReadUltrasonic() <= 10) {
        reromicro.Brake()
    } else if (reromicro.LineSensorDetectsLine(LineSensors.Left) && (reromicro.LineSensorDetectsLine(LineSensors.Center) && reromicro.LineSensorDetectsLine(LineSensors.Right))) {
        reromicro.Brake()
        basic.pause(1000)
    }
})
