"use strict";
const Constants = require ("../../../Constants");
const BoneSplintersBase = require("../setMM3/BoneSplinters");

class BoneSplinters extends BoneSplintersBase {
  constructor (game) {
    super(game, "Bone Splinters", "Modern Masters 2015", "MM2");
  }
}

module.exports = BoneSplinters;
