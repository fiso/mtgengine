"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GreenManaBattery extends UnimplementedCard {
  constructor (game) {
    super(game, "Green Mana Battery", "Fourth Edition", "4ED");
  }
}

module.exports = GreenManaBattery;
