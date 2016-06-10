"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BlueManaBattery extends UnimplementedCard {
  constructor (game) {
    super(game, "Blue Mana Battery", "Fourth Edition", "4ED");
  }
}

module.exports = BlueManaBattery;
