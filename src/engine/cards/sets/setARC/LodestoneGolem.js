"use strict";
const Constants = require ("../../../Constants");
const LodestoneGolemBase = require("../setMM2/LodestoneGolem");

class LodestoneGolem extends LodestoneGolemBase {
  constructor (game) {
    super(game, "Lodestone Golem", "Archenemy", "ARC");
  }
}

module.exports = LodestoneGolem;
