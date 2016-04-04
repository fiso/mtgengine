"use strict";
const Constants = require ("../../../Constants");
const WallofBoneBase = require("../setCED/WallofBone");

class WallofBone extends WallofBoneBase {
  constructor(game) {
    super(game, "Wall of Bone", "International Collector's Edition", "CEI");
  }
}

module.exports = WallofBone;
