"use strict";
const Constants = require ("../../../Constants");
const LodestoneGolemBase = require("../setARC/LodestoneGolem");

class LodestoneGolem extends LodestoneGolemBase {
  constructor (game) {
    super(game, "Lodestone Golem", "Modern Masters 2015 Edition", "MM2");
  }
}

module.exports = LodestoneGolem;
