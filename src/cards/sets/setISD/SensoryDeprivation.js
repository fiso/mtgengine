"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SensoryDeprivation extends UnimplementedCard {
  constructor (game) {
    super(game, "Sensory Deprivation", "Innistrad", "ISD");
  }
}

module.exports = SensoryDeprivation;
