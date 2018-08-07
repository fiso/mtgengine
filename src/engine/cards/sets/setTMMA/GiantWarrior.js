"use strict";
const Constants = require ("../../../Constants");
const GiantWarriorBase = require("../setTMM3/GiantWarrior");

class GiantWarrior extends GiantWarriorBase {
  constructor (game) {
    super(game, "Giant Warrior", "Modern Masters Tokens", "TMMA");
  }
}

module.exports = GiantWarrior;
