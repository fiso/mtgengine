"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MirrodinsCoreBase = require("../setDST/MirrodinsCore.js");

class MirrodinsCore extends MirrodinsCoreBase {
  constructor(game) {
    super(game, "Mirrodin's Core", "Magic: The Gathering—Conspiracy", "CNS");
  }
}

module.exports = MirrodinsCore;
