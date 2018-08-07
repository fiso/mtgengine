"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SlithPredator extends UnimplementedCard {
  constructor (game) {
    super(game, "Slith Predator", "Mirrodin", "MRD");
  }
}

module.exports = SlithPredator;
