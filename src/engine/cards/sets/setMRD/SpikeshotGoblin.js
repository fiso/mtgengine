"use strict";
const Constants = require ("../../../Constants");
const SpikeshotGoblinBase = require("../setA25/SpikeshotGoblin");

class SpikeshotGoblin extends SpikeshotGoblinBase {
  constructor (game) {
    super(game, "Spikeshot Goblin", "Mirrodin", "MRD");
  }
}

module.exports = SpikeshotGoblin;
