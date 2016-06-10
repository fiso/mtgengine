"use strict";
const Constants = require ("../../../Constants");
const DragonBreathBase = require("../setARC/DragonBreath");

class DragonBreath extends DragonBreathBase {
  constructor (game) {
    super(game, "Dragon Breath", "Scourge", "SCG");
  }
}

module.exports = DragonBreath;
