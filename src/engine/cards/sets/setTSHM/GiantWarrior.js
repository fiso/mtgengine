"use strict";
const Constants = require ("../../../Constants");
const GiantWarriorBase = require("../setTMM3/GiantWarrior");

class GiantWarrior extends GiantWarriorBase {
  constructor (game) {
    super(game, "Giant Warrior", "Shadowmoor Tokens", "TSHM");
  }
}

module.exports = GiantWarrior;
