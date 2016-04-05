"use strict";
const Constants = require ("../../../Constants");
const SkeletalScryingBase = require("../setC14/SkeletalScrying");

class SkeletalScrying extends SkeletalScryingBase {
  constructor(game) {
    super(game, "Skeletal Scrying", "Odyssey", "ODY");
  }
}

module.exports = SkeletalScrying;
