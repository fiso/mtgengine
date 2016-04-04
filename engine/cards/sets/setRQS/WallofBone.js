"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const WallofBoneBase = require("../setCED/WallofBone.js");

class WallofBone extends WallofBoneBase {
  constructor(game) {
    super(game, "Wall of Bone", "Rivals Quick Start Set", "RQS");
  }
}

module.exports = WallofBone;
