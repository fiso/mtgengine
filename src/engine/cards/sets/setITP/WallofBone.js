"use strict";
const Constants = require ("../../../Constants");
const WallofBoneBase = require("../setGVL/WallofBone");

class WallofBone extends WallofBoneBase {
  constructor (game) {
    super(game, "Wall of Bone", "Introductory Two-Player Set", "ITP");
  }
}

module.exports = WallofBone;
