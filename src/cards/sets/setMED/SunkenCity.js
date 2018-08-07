"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SunkenCity extends UnimplementedCard {
  constructor (game) {
    super(game, "Sunken City", "Masters Edition", "MED");
  }
}

module.exports = SunkenCity;
