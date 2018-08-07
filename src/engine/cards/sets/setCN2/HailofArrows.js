"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HailofArrows extends UnimplementedCard {
  constructor (game) {
    super(game, "Hail of Arrows", "Conspiracy: Take the Crown", "CN2");
  }
}

module.exports = HailofArrows;
