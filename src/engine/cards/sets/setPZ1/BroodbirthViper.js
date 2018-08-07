"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BroodbirthViper extends UnimplementedCard {
  constructor (game) {
    super(game, "Broodbirth Viper", "Legendary Cube", "PZ1");
  }
}

module.exports = BroodbirthViper;
