"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CapturedSunlight extends Card {
  constructor(game) {
    super(game, "Captured Sunlight", "Alara Reborn", "ARB");
  }
}

module.exports = CapturedSunlight;
