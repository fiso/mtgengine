"use strict";
const Constants = require ("../../../Constants");
const WallofBoneBase = require("../setGVL/WallofBone");

class WallofBone extends WallofBoneBase {
  constructor (game) {
    super(game, "Wall of Bone", "Seventh Edition", "7ED");
  }
}

module.exports = WallofBone;
