"use strict";
const Constants = require ("../../../Constants");
const SkeletalScryingBase = require("../setC17/SkeletalScrying");

class SkeletalScrying extends SkeletalScryingBase {
  constructor (game) {
    super(game, "Skeletal Scrying", "Conspiracy", "CNS");
  }
}

module.exports = SkeletalScrying;
