radio.onReceivedNumber(function (receivedNumber) {
    DadaDemandada = receivedNumber
    EnviaValors()
})
input.onButtonPressed(Button.A, function () {
    mBit2()
})
function Sensors () {
    basic.pause(1000)
    dht11_dht22.queryData(
    DHTtype.DHT11,
    DigitalPin.P16,
    true,
    false,
    true
    )
    HumDHT11 = dht11_dht22.readData(dataType.humidity)
    TempDHT11 = dht11_dht22.readData(dataType.temperature)
    HumSolP1 = pins.analogReadPin(AnalogReadWritePin.P1)
    LlumP2 = pins.analogReadPin(AnalogReadWritePin.P2)
}
function Tot_a_0 () {
    LlumP2 = 0
    HumSolP1 = 0
    HumDHT11 = 0
    TempDHT11 = 0
}
function EnviaValors () {
    if (DadaDemandada == 1) {
        radio.sendValue("Temp:", TempDHT11)
    } else if (DadaDemandada == 2) {
        radio.sendValue("Hum:", HumDHT11)
    } else if (DadaDemandada == 3) {
        radio.sendValue("Lux:", LlumP2)
    } else {
        radio.sendValue("Reg:", HumSolP1)
    }
}
function mBit2 () {
    basic.showString("Temp ")
    basic.showNumber(TempDHT11)
    basic.showString("*C ")
    basic.showString("Hum ")
    basic.showNumber(HumDHT11)
    basic.showString("% ")
    basic.showString("Llum")
    basic.showNumber(LlumP2)
    basic.showString("Reg")
    basic.showNumber(HumSolP1)
    basic.pause(2000)
    basic.showString("")
}
let LlumP2 = 0
let HumSolP1 = 0
let TempDHT11 = 0
let HumDHT11 = 0
let DadaDemandada = 0
basic.pause(500)
radio.setGroup(1)
Tot_a_0()
dht11_dht22.queryData(
DHTtype.DHT11,
DigitalPin.P0,
true,
false,
true
)
Sensors()
loops.everyInterval(60000, function () {
    Sensors()
})
