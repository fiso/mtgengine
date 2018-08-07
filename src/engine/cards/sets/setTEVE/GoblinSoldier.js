"use strict";
const Constants = require ("../../../Constants");
const GoblinSoldierBase = require("../setTEMA/GoblinSoldier");

class GoblinSoldier extends GoblinSoldierBase {
  constructor (game) {
    super(game, "Goblin Soldier", "Eventide Tokens", "TEVE");
  }
}

module.exports = GoblinSoldier;
