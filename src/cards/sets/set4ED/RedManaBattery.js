"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RedManaBattery extends UnimplementedCard {
  constructor (game) {
    super(game, "Red Mana Battery", "Fourth Edition", "4ED");
  }
}

module.exports = RedManaBattery;
