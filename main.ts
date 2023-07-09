let drehzahl = 0
let Programm = 0
let Auswahl = 0
pins.servoWritePin(AnalogPin.C16, 0)
basic.showLeds(`
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    `)
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P2) == 1) {
        basic.showIcon(IconNames.Asleep)
        basic.setLedColor(0xff0000)
    }
    if (input.buttonIsPressed(Button.B)) {
        Auswahl += 1
        basic.pause(500)
    }
    if (input.buttonIsPressed(Button.A)) {
        Auswahl += -1
        basic.pause(1000)
    }
    if (Auswahl == -1) {
        Auswahl = 0
    }
})
basic.forever(function () {
    while (Auswahl == 0) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
    }
})
basic.forever(function () {
    while (Auswahl == 1) {
        basic.showNumber(1)
        if (input.buttonIsPressed(Button.AB)) {
            basic.showIcon(IconNames.Yes)
            basic.pause(1000)
            Programm = 1
            basic.pause(100)
            Auswahl = 0
        }
    }
})
basic.forever(function () {
    while (Auswahl == 2) {
        basic.showNumber(2)
        if (input.buttonIsPressed(Button.AB)) {
            basic.showIcon(IconNames.Yes)
            basic.pause(1000)
            Auswahl = 0
            basic.pause(100)
            Programm = 2
        }
    }
})
basic.forever(function () {
    while (Auswahl == 3) {
        basic.showNumber(3)
        if (input.buttonIsPressed(Button.AB)) {
            basic.showIcon(IconNames.Yes)
            basic.pause(1000)
            Auswahl = 0
            basic.pause(100)
            Programm = 3
        }
    }
})
basic.forever(function () {
    while (Programm == 2) {
        basic.showIcon(IconNames.No)
        music.playTone(294, music.beat(BeatFraction.Quarter))
        Programm = 0
        Auswahl = 0
    }
})
basic.forever(function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    while (Programm == 1) {
        drehzahl += pins.analogReadPin(AnalogPin.P1)
        if (pins.digitalReadPin(DigitalPin.P0) == 1 || pins.digitalReadPin(DigitalPin.P2) == 1) {
            basic.setLedColor(0xff0000)
            if (drehzahl > 0 && drehzahl < 29) {
                music.playTone(131, music.beat(BeatFraction.Double))
            } else if (drehzahl > 29 && drehzahl < 58) {
                music.playTone(139, music.beat(BeatFraction.Double))
            } else if (drehzahl > 58 && drehzahl < 87) {
                music.playTone(147, music.beat(BeatFraction.Double))
            } else if (drehzahl > 87 && drehzahl < 116) {
                music.playTone(165, music.beat(BeatFraction.Double))
            } else if (drehzahl > 116 && drehzahl < 145) {
                music.playTone(175, music.beat(BeatFraction.Double))
            } else if (drehzahl > 145 && drehzahl < 174) {
                music.playTone(185, music.beat(BeatFraction.Double))
            } else if (drehzahl > 174 && drehzahl < 203) {
                music.playTone(196, music.beat(BeatFraction.Double))
            } else if (drehzahl > 203 && drehzahl < 232) {
                music.playTone(208, music.beat(BeatFraction.Double))
            } else if (drehzahl > 232 && drehzahl < 261) {
                music.playTone(220, music.beat(BeatFraction.Double))
            } else if (drehzahl > 261 && drehzahl < 290) {
                music.playTone(233, music.beat(BeatFraction.Double))
            } else if (drehzahl > 290 && drehzahl < 319) {
                music.playTone(247, music.beat(BeatFraction.Double))
            } else if (drehzahl > 319 && drehzahl < 348) {
                music.playTone(262, music.beat(BeatFraction.Double))
            } else if (drehzahl > 348 && drehzahl < 377) {
                music.playTone(277, music.beat(BeatFraction.Double))
            } else if (drehzahl > 377 && drehzahl < 406) {
                music.playTone(294, music.beat(BeatFraction.Double))
            } else if (drehzahl > 406 && drehzahl < 435) {
                music.playTone(311, music.beat(BeatFraction.Double))
            } else if (drehzahl > 435 && drehzahl < 464) {
                music.playTone(330, music.beat(BeatFraction.Double))
            } else if (drehzahl > 464 && drehzahl < 493) {
                music.playTone(349, music.beat(BeatFraction.Double))
            } else if (drehzahl > 493 && drehzahl < 522) {
                music.playTone(370, music.beat(BeatFraction.Double))
            } else if (drehzahl > 522 && drehzahl < 551) {
                music.playTone(392, music.beat(BeatFraction.Double))
            } else if (drehzahl > 551 && drehzahl < 580) {
                music.playTone(415, music.beat(BeatFraction.Double))
            } else if (drehzahl > 580 && drehzahl < 609) {
                music.playTone(440, music.beat(BeatFraction.Double))
            } else if (drehzahl > 609 && drehzahl < 638) {
                music.playTone(466, music.beat(BeatFraction.Double))
            } else if (drehzahl > 638 && drehzahl < 667) {
                music.playTone(494, music.beat(BeatFraction.Double))
            } else if (drehzahl > 667 && drehzahl < 696) {
                music.playTone(523, music.beat(BeatFraction.Double))
            } else if (drehzahl > 696 && drehzahl < 725) {
                music.playTone(554, music.beat(BeatFraction.Double))
            } else if (drehzahl > 725 && drehzahl < 754) {
                music.playTone(587, music.beat(BeatFraction.Double))
            } else if (drehzahl > 754 && drehzahl < 783) {
                music.playTone(622, music.beat(BeatFraction.Double))
            } else if (drehzahl > 783 && drehzahl < 812) {
                music.playTone(659, music.beat(BeatFraction.Double))
            } else if (drehzahl > 812 && drehzahl < 841) {
                music.playTone(698, music.beat(BeatFraction.Double))
            } else if (drehzahl > 841 && drehzahl < 670) {
                music.playTone(740, music.beat(BeatFraction.Double))
            } else if (drehzahl > 870 && drehzahl < 899) {
                music.playTone(784, music.beat(BeatFraction.Double))
            } else if (drehzahl > 899 && drehzahl < 928) {
                music.playTone(831, music.beat(BeatFraction.Double))
            } else if (drehzahl > 928 && drehzahl < 957) {
                music.playTone(880, music.beat(BeatFraction.Double))
            } else if (drehzahl > 957 && drehzahl < 986) {
                music.playTone(932, music.beat(BeatFraction.Double))
            } else if (drehzahl > 986 && drehzahl < 1023) {
                music.playTone(988, music.beat(BeatFraction.Double))
            } else {
            	
            }
        } else {
            basic.setLedColor(0x00ff00)
        }
    }
})
basic.forever(function () {
    while (Programm == 1) {
        basic.pause(432000000)
        pins.servoWritePin(AnalogPin.C16, 45)
    }
})
basic.forever(function () {
    while (Programm == 4) {
        basic.showIcon(IconNames.No)
        music.playTone(294, music.beat(BeatFraction.Quarter))
        Programm = 0
        Auswahl = 0
    }
})
