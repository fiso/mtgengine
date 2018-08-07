"use strict";
const Constants = require ("../../../Constants");
const SandstoneWarriorBase = require("../setTPR/SandstoneWarrior");

class SandstoneWarrior extends SandstoneWarriorBase {
  constructor (game) {
    super(game, "Sandstone Warrior", "Ninth Edition", "9ED");
  }
}

module.exports = SandstoneWarrior;
