"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SunkenCity extends UnimplementedCard {
  constructor (game) {
    super(game, "Sunken City", "Fourth Edition", "4ED");
  }
}

module.exports = SunkenCity;
