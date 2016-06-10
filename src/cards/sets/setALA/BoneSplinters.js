"use strict";
const Constants = require ("../../../Constants");
const BoneSplintersBase = require("../setAVR/BoneSplinters");

class BoneSplinters extends BoneSplintersBase {
  constructor (game) {
    super(game, "Bone Splinters", "Shards of Alara", "ALA");
  }
}

module.exports = BoneSplinters;
