"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HailofArrows extends UnimplementedCard {
  constructor (game) {
    super(game, "Hail of Arrows", "Saviors of Kamigawa", "SOK");
  }
}

module.exports = HailofArrows;
