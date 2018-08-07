"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FarbogBoneflinger extends UnimplementedCard {
  constructor (game) {
    super(game, "Farbog Boneflinger", "Conspiracy: Take the Crown", "CN2");
  }
}

module.exports = FarbogBoneflinger;
