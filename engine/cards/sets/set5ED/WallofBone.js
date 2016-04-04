"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const WallofBoneBase = require("../setCED/WallofBone.js");

class WallofBone extends WallofBoneBase {
  constructor(game) {
    super(game, "Wall of Bone", "Fifth Edition", "5ED");
  }
}

module.exports = WallofBone;
