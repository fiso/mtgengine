"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WindDancer extends UnimplementedCard {
  constructor (game) {
    super(game, "Wind Dancer", "Magic: The Gathering—Conspiracy", "CNS");
  }
}

module.exports = WindDancer;
