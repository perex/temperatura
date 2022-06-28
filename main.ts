let temperatura = 0
basic.forever(function () {
    temperatura = input.temperature()
    basic.showNumber(temperatura)
    basic.pause(100)
    basic.showString("PEREX")
})
