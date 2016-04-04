"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class KavuClimber extends Card {
  constructor(game) {
    super(game, "Kavu Climber", "Invasion", "INV");
  }
}

module.exports = KavuClimber;
