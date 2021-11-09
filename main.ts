basic.forever(function () {
    basic.showString("Hello,")
    basic.showString("my name is")
    basic.showString("Abhinav")
    basic.showIcon(IconNames.Target)
    basic.showIcon(IconNames.SmallSquare)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.clearScreen()
})
