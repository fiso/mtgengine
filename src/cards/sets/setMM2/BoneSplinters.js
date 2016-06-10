"use strict";
const Constants = require ("../../../Constants");
const BoneSplintersBase = require("../setAVR/BoneSplinters");

class BoneSplinters extends BoneSplintersBase {
  constructor (game) {
    super(game, "Bone Splinters", "Modern Masters 2015 Edition", "MM2");
  }
}

module.exports = BoneSplinters;
