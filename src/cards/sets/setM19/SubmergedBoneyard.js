"use strict";
const Constants = require ("../../../Constants");
const SubmergedBoneyardBase = require("../setC18/SubmergedBoneyard");

class SubmergedBoneyard extends SubmergedBoneyardBase {
  constructor (game) {
    super(game, "Submerged Boneyard", "Core Set 2019", "M19");
  }
}

module.exports = SubmergedBoneyard;
