"use strict";
const Constants = require ("../../../Constants");
const WallofBoneBase = require("../setGVL/WallofBone");

class WallofBone extends WallofBoneBase {
  constructor (game) {
    super(game, "Wall of Bone", "Limited Edition Alpha", "LEA");
  }
}

module.exports = WallofBone;
