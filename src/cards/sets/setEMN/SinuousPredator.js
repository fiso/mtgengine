"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SinuousPredator extends UnimplementedCard {
  constructor (game) {
    super(game, "Sinuous Predator", "Eldritch Moon", "EMN");
  }
}

module.exports = SinuousPredator;
