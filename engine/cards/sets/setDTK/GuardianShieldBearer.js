"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GuardianShieldBearer extends Card {
  constructor(game) {
    super(game, "Guardian Shield-Bearer", "Dragons of Tarkir", "DTK");
  }
}

module.exports = GuardianShieldBearer;
