"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SteppeGlider extends Card {
  constructor(game) {
    super(game, "Steppe Glider", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = SteppeGlider;
