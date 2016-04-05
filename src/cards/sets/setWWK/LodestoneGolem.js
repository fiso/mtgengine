"use strict";
const Constants = require ("../../../Constants");
const LodestoneGolemBase = require("../setARC/LodestoneGolem");

class LodestoneGolem extends LodestoneGolemBase {
  constructor(game) {
    super(game, "Lodestone Golem", "Worldwake", "WWK");
  }
}

module.exports = LodestoneGolem;
