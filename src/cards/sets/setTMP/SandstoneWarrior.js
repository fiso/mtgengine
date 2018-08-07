"use strict";
const Constants = require ("../../../Constants");
const SandstoneWarriorBase = require("../setTPR/SandstoneWarrior");

class SandstoneWarrior extends SandstoneWarriorBase {
  constructor (game) {
    super(game, "Sandstone Warrior", "Tempest", "TMP");
  }
}

module.exports = SandstoneWarrior;
