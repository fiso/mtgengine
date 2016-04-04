"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const LodestoneGolemBase = require("../setARC/LodestoneGolem.js");

class LodestoneGolem extends LodestoneGolemBase {
  constructor(game) {
    super(game, "Lodestone Golem", "Worldwake", "WWK");
  }
}

module.exports = LodestoneGolem;
