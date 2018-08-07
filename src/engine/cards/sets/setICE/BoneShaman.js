"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BoneShaman extends UnimplementedCard {
  constructor (game) {
    super(game, "Bone Shaman", "Ice Age", "ICE");
  }
}

module.exports = BoneShaman;
