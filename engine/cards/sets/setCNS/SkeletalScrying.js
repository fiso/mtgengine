"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SkeletalScryingBase = require("../setC14/SkeletalScrying.js");

class SkeletalScrying extends SkeletalScryingBase {
  constructor(game) {
    super(game, "Skeletal Scrying", "Magic: The Gathering—Conspiracy", "CNS");
  }
}

module.exports = SkeletalScrying;
