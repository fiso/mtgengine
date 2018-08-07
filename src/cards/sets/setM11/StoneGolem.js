"use strict";
const Constants = require ("../../../Constants");
const StoneGolemBase = require("../setBBD/StoneGolem");

class StoneGolem extends StoneGolemBase {
  constructor (game) {
    super(game, "Stone Golem", "Magic 2011", "M11");
  }
}

module.exports = StoneGolem;
