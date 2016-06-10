"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KavuClimber extends UnimplementedCard {
  constructor (game) {
    super(game, "Kavu Climber", "Invasion", "INV");
  }
}

module.exports = KavuClimber;
