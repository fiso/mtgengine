"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SubmergedBoneyard extends Card {
  constructor(game) {
    super(game, "Submerged Boneyard", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = SubmergedBoneyard;
