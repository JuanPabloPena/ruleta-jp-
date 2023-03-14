let premio = 0
input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 1; index++) {
        basic.showNumber(randint(0, 37))
        basic.pause(200)
        basic.showArrow(ArrowNames.North)
    }
    premio += randint(0, 37)
    basic.pause(1000)
    basic.showLeds(`
        . # . # .
        # . # . #
        # . # . #
        . . # . .
        . . # . .
        `)
    basic.pause(1000)
    if (premio == 37) {
        basic.showString("00")
        basic.showString("DOBLE CERO")
    } else if (premio == 1) {
        basic.showString("1")
        basic.showString("UNO")
    } else if (premio == 2) {
        basic.showString("2")
        basic.showString("DOS")
    } else {
        basic.showNumber(36)
        basic.showString("T S")
    }
    basic.pause(1000)
    if (premio == 37) {
        basic.showString("00")
    } else {
        if (Math.randomBoolean()) {
            if (true) {
                basic.showString("R")
            } else {
                basic.showString("N")
            }
        }
    }
})
