"use strict";
const Constants = require ("../../../Constants");
const GoblinSoldierBase = require("../setTEMA/GoblinSoldier");

class GoblinSoldier extends GoblinSoldierBase {
  constructor (game) {
    super(game, "Goblin Soldier", "Magic Player Rewards 2001", "MPR");
  }
}

module.exports = GoblinSoldier;
