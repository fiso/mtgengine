"use strict";
const Constants = require ("../../../Constants");
const WallofEssenceBase = require("../setM15/WallofEssence");

class WallofEssence extends WallofEssenceBase {
  constructor(game) {
    super(game, "Wall of Essence", "Tempest Remastered", "TPR");
  }
}

module.exports = WallofEssence;
