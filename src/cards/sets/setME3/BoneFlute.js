"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BoneFlute extends UnimplementedCard {
  constructor (game) {
    super(game, "Bone Flute", "Masters Edition III", "ME3");
  }
}

module.exports = BoneFlute;
