radio.onReceivedValue(function (name, value) {
    if (name == "Z" && value != 0) {
        if (TipoControle == "Carro") {
            TipoControle = "Garra"
            music.play(music.tonePlayable(523, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
            music.play(music.tonePlayable(587, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
            music.play(music.tonePlayable(659, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
        } else {
            TipoControle = "Carro"
            music.play(music.tonePlayable(659, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
            music.play(music.tonePlayable(587, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
            music.play(music.tonePlayable(523, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
        }
    }
    if (name == "Y") {
        if (TipoControle == "Carro") {
            SuperBit.MotorRun(SuperBit.enMotors.M1, Math.map(value, 0, 180, 255, -255))
        } else {
            SuperBit.Servo(SuperBit.enServo.S4, Math.map(value, 0, 180, 180, 0))
        }
    }
    if (name == "X") {
        if (TipoControle == "Carro") {
            SuperBit.Servo(SuperBit.enServo.S1, Math.map(value, 0, 180, 160, 80))
        } else {
            SuperBit.Servo(SuperBit.enServo.S2, Math.map(value, 0, 180, 180, 40))
        }
    }
    if (TipoControle == "Garra") {
        if (name == "B1") {
            SuperBit.Servo(SuperBit.enServo.S5, 110)
        } else if (name == "B2") {
            SuperBit.Servo(SuperBit.enServo.S5, 180)
        } else if (name == "B4") {
            SuperBit.Servo(SuperBit.enServo.S3, 120)
        } else if (name == "B3") {
            SuperBit.Servo(SuperBit.enServo.S3, 180)
        }
    }
})
let TipoControle = ""
radio.setGroup(1)
TipoControle = "Carro"
