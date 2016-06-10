"use strict";
const Constants = require ("../../../Constants");
const WallofBoneBase = require("../setCED/WallofBone");

class WallofBone extends WallofBoneBase {
  constructor (game) {
    super(game, "Wall of Bone", "Duel Decks: Garruk vs. Liliana", "DDD");
  }
}

module.exports = WallofBone;
