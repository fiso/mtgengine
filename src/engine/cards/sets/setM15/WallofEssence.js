"use strict";
const Constants = require ("../../../Constants");
const WallofEssenceBase = require("../setTPR/WallofEssence");

class WallofEssence extends WallofEssenceBase {
  constructor (game) {
    super(game, "Wall of Essence", "Magic 2015", "M15");
  }
}

module.exports = WallofEssence;
