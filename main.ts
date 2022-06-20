serial.onDataReceived(serial.delimiters(Delimiters.Hash), function () {
    cmd = serial.readUntil(serial.delimiters(Delimiters.Hash))
    if (SENSOR1_CMD.indexOf(cmd) != -1) {
        radio.sendValue("" + RADIO_ID + ":" + SENSOR1_ID + ":" + "LED", parseInt(cmd))
    }
    if (SENSOR2_CMD.indexOf(cmd) != -1) {
        radio.sendValue("" + RADIO_ID + ":" + SENSOR2_ID + ":" + "LED", parseInt(cmd))
    }
})
radio.onReceivedValue(function (name, value) {
    parseName = name.split(":")
    if (parseName.length == 2) {
        sensor__id = parseName[0]
        if (sensor__id == "tizoz") {
            id = "1"
        } else {
            id = "2"
        }
        _type = parseName[1]
        serial.writeString("!" + id + ":" + _type + ":" + value + "#")
    }
})
let _type = ""
let id = ""
let sensor__id = ""
let parseName: string[] = []
let cmd = ""
let SENSOR2_CMD: string[] = []
let SENSOR1_CMD: string[] = []
let SENSOR1_ID = ""
let SENSOR2_ID = ""
let RADIO_ID = ""
RADIO_ID = "9"
SENSOR2_ID = "tupoz"
SENSOR1_ID = "tizoz"
SENSOR1_CMD = [
"0",
"1",
"2",
"3"
]
SENSOR2_CMD = [
"4",
"5",
"6",
"7"
]
serial.redirectToUSB()
serial.setBaudRate(BaudRate.BaudRate115200)
radio.setGroup(68)
basic.showNumber(1)
