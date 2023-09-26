/* Copyright (c) 2023 MTHS All rights reserved
 *
 * Created by: Julianne Leblanc-Peltier
 * Created on: Sep 2023
 * This program displays the current temperature on a MicroBit
*/
//variable for random number

let temperature: number
let temperatureKelvin: number

basic.clearScreen()
basic.showIcon(IconNames.Happy)

input.onButtonPressed(Button.A, function () {
  //get the temperature in Kelvin

  temperature = input.temperature()
  temperatureKelvin = (temperature + 273.15)
  temperatureKelvin = Math.round(temperatureKelvin)

  //output answer

  basic.showString('The temperature is: ' + temperatureKelvin.toString() + 'K.')
})
