"""
Created by: Julianne Leblanc-Peltier
Created on: Sep 2023
This module is a Micro:bit MicroPython program
This program outputs the temperature in Kelvin on a Micro:Bit
"""

from microbit import *

display.clear()
display.show(Image.HAPPY)

while True:
    if button_a.is_pressed():
        temperature = input.temperature()
        temperature_kelvin = temperature + 273.15
        display.show(str(temperature_kelvin))
