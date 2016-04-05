"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WhiteManaBattery extends UnimplementedCard {
  constructor(game) {
    super(game, "White Mana Battery", "Fourth Edition", "4ED");
  }
}

module.exports = WhiteManaBattery;
