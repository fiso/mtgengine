"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BoneSplintersBase = require("../setAVR/BoneSplinters.js");

class BoneSplinters extends BoneSplintersBase {
  constructor(game) {
    super(game, "Bone Splinters", "Duel Decks: Speed vs. Cunning", "DDN");
  }
}

module.exports = BoneSplinters;
