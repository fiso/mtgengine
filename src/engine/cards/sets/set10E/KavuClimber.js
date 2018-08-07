"use strict";
const Constants = require ("../../../Constants");
const KavuClimberBase = require("../setA25/KavuClimber");

class KavuClimber extends KavuClimberBase {
  constructor (game) {
    super(game, "Kavu Climber", "Tenth Edition", "10E");
  }
}

module.exports = KavuClimber;
