"use strict";
const Constants = require ("../../../Constants");
const BoneSplintersBase = require("../setMM3/BoneSplinters");

class BoneSplinters extends BoneSplintersBase {
  constructor (game) {
    super(game, "Bone Splinters", "Battle for Zendikar", "BFZ");
  }
}

module.exports = BoneSplinters;
