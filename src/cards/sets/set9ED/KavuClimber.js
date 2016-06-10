"use strict";
const Constants = require ("../../../Constants");
const KavuClimberBase = require("../setINV/KavuClimber");

class KavuClimber extends KavuClimberBase {
  constructor (game) {
    super(game, "Kavu Climber", "Ninth Edition", "9ED");
  }
}

module.exports = KavuClimber;
