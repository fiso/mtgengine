"use strict";
const Constants = require ("../../../Constants");
const WallofBoneBase = require("../setCED/WallofBone");

class WallofBone extends WallofBoneBase {
  constructor (game) {
    super(game, "Wall of Bone", "Unlimited Edition", "2ED");
  }
}

module.exports = WallofBone;
