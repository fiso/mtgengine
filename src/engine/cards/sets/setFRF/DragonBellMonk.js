"use strict";
const Constants = require ("../../../Constants");
const DragonBellMonkBase = require("../setIMA/DragonBellMonk");

class DragonBellMonk extends DragonBellMonkBase {
  constructor (game) {
    super(game, "Dragon Bell Monk", "Fate Reforged", "FRF");
  }
}

module.exports = DragonBellMonk;
