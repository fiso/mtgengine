"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SpreadingRot extends UnimplementedCard {
  constructor (game) {
    super(game, "Spreading Rot", "Ixalan", "XLN");
  }
}

module.exports = SpreadingRot;
