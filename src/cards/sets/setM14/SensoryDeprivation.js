"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SensoryDeprivation extends UnimplementedCard {
  constructor (game) {
    super(game, "Sensory Deprivation", "Magic 2014", "M14");
  }
}

module.exports = SensoryDeprivation;
