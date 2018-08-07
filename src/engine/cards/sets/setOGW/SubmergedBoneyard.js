"use strict";
const Constants = require ("../../../Constants");
const SubmergedBoneyardBase = require("../setC18/SubmergedBoneyard");

class SubmergedBoneyard extends SubmergedBoneyardBase {
  constructor (game) {
    super(game, "Submerged Boneyard", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = SubmergedBoneyard;
