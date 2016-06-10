"use strict";
const Constants = require ("../../../Constants");
const SkeletalScryingBase = require("../setC14/SkeletalScrying");

class SkeletalScrying extends SkeletalScryingBase {
  constructor (game) {
    super(game, "Skeletal Scrying", "Magic: The Gathering—Conspiracy", "CNS");
  }
}

module.exports = SkeletalScrying;
