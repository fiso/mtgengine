"use strict";
const Constants = require ("../../../Constants");
const DragonHatchlingBase = require("../setBBD/DragonHatchling");

class DragonHatchling extends DragonHatchlingBase {
  constructor (game) {
    super(game, "Dragon Hatchling", "Magic 2013", "M13");
  }
}

module.exports = DragonHatchling;
