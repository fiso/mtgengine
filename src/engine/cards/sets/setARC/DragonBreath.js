"use strict";
const Constants = require ("../../../Constants");
const DragonBreathBase = require("../setBBD/DragonBreath");

class DragonBreath extends DragonBreathBase {
  constructor (game) {
    super(game, "Dragon Breath", "Archenemy", "ARC");
  }
}

module.exports = DragonBreath;
