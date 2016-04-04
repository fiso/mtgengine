"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DragonBreathBase = require("../setARC/DragonBreath.js");

class DragonBreath extends DragonBreathBase {
  constructor(game) {
    super(game, "Dragon Breath", "Scourge", "SCG");
  }
}

module.exports = DragonBreath;
