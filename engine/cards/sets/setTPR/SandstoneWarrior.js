"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SandstoneWarriorBase = require("../set9ED/SandstoneWarrior.js");

class SandstoneWarrior extends SandstoneWarriorBase {
  constructor(game) {
    super(game, "Sandstone Warrior", "Tempest Remastered", "TPR");
  }
}

module.exports = SandstoneWarrior;
