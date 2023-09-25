/* Copyright (c) 2023 MTHS All rights reserved
 *
 * Created by: Julianne Leblanc-Peltier
 * Created on: Sep 2023
 * This program displays the current temperature on a MicroBit
*/

basic.clearScreen()
basic.pause(1000)

input.onButtonPressed(Button.A, function () {
    let temperature = input.temperature()
    let temperatureKelvin = (temperature + 273)
    basic.showString("The temperature is" + temperatureKelvin)
    basic.showString("K.")
})
