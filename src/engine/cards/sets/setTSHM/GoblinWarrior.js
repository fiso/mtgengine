"use strict";
const Constants = require ("../../../Constants");
const GoblinWarriorBase = require("../setTMM3/GoblinWarrior");

class GoblinWarrior extends GoblinWarriorBase {
  constructor (game) {
    super(game, "Goblin Warrior", "Shadowmoor Tokens", "TSHM");
  }
}

module.exports = GoblinWarrior;
