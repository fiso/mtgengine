"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BoneShaman extends Card {
  constructor(game) {
    super(game, "Bone Shaman", "Ice Age", "ICE");
  }
}

module.exports = BoneShaman;
