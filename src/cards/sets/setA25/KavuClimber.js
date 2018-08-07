"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KavuClimber extends UnimplementedCard {
  constructor (game) {
    super(game, "Kavu Climber", "Masters 25", "A25");
  }
}

module.exports = KavuClimber;
