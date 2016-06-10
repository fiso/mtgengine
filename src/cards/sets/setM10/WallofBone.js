"use strict";
const Constants = require ("../../../Constants");
const WallofBoneBase = require("../setCED/WallofBone");

class WallofBone extends WallofBoneBase {
  constructor (game) {
    super(game, "Wall of Bone", "Magic 2010", "M10");
  }
}

module.exports = WallofBone;
