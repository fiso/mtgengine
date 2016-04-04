"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BoneFluteBase = require("../setME3/BoneFlute.js");

class BoneFlute extends BoneFluteBase {
  constructor(game) {
    super(game, "Bone Flute", "The Dark", "DRK");
  }
}

module.exports = BoneFlute;
