"use strict";
const Constants = require ("../../../Constants");
const BoneSplintersBase = require("../setMM3/BoneSplinters");

class BoneSplinters extends BoneSplintersBase {
  constructor (game) {
    super(game, "Bone Splinters", "Duel Decks: Speed vs. Cunning", "DDN");
  }
}

module.exports = BoneSplinters;
