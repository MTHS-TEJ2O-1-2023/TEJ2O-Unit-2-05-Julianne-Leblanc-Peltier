/* Copyright (c) 2023 MTHS All rights reserved
 *
 * Created by: Julianne Leblanc-Peltier
 * Created on: Sep 2023
 * This program displays the current temperature in Kelvin on a MicroBit
*/

// variable for random number

let temperature: number
let temperatureKelvin: number

basic.clearScreen()
basic.showIcon(IconNames.Happy)

input.onButtonPressed(Button.A, function () {
  // input
  temperature = input.temperature()

  // process
  temperatureKelvin = (temperature + 273.15)
  temperatureKelvin = Math.round(temperatureKelvin)

  // output
  basic.showString('The temperature is: ' + temperatureKelvin.toString() + 'K.')
})
