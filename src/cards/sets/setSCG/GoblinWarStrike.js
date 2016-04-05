"use strict";
const Constants = require ("../../../Constants");
const GoblinWarStrikeBase = require("../setPO2/GoblinWarStrike");

class GoblinWarStrike extends GoblinWarStrikeBase {
  constructor(game) {
    super(game, "Goblin War Strike", "Scourge", "SCG");
  }
}

module.exports = GoblinWarStrike;
