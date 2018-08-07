"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BoneMask extends UnimplementedCard {
  constructor (game) {
    super(game, "Bone Mask", "Mirage", "MIR");
  }
}

module.exports = BoneMask;
