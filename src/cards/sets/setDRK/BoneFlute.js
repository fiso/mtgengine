"use strict";
const Constants = require ("../../../Constants");
const BoneFluteBase = require("../setME3/BoneFlute");

class BoneFlute extends BoneFluteBase {
  constructor(game) {
    super(game, "Bone Flute", "The Dark", "DRK");
  }
}

module.exports = BoneFlute;
