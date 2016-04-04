"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const KavuClimberBase = require("../setINV/KavuClimber.js");

class KavuClimber extends KavuClimberBase {
  constructor(game) {
    super(game, "Kavu Climber", "Ninth Edition", "9ED");
  }
}

module.exports = KavuClimber;
