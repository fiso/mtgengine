"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SubmergedBoneyard extends UnimplementedCard {
  constructor (game) {
    super(game, "Submerged Boneyard", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = SubmergedBoneyard;
