"use strict";
const Constants = require ("../../../Constants");
const GoblinWarrensBase = require("../setATH/GoblinWarrens");

class GoblinWarrens extends GoblinWarrensBase {
  constructor(game) {
    super(game, "Goblin Warrens", "Masters Edition IV", "ME4");
  }
}

module.exports = GoblinWarrens;
