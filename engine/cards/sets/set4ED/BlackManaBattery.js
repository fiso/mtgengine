"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BlackManaBattery extends UnimplementedCard {
  constructor(game) {
    super(game, "Black Mana Battery", "Fourth Edition", "4ED");
  }
}

module.exports = BlackManaBattery;
