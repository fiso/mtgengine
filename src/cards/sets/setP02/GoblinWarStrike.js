"use strict";
const Constants = require ("../../../Constants");
const GoblinWarStrikeBase = require("../setSCG/GoblinWarStrike");

class GoblinWarStrike extends GoblinWarStrikeBase {
  constructor (game) {
    super(game, "Goblin War Strike", "Portal Second Age", "P02");
  }
}

module.exports = GoblinWarStrike;
