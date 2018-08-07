"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RuinRaider extends UnimplementedCard {
  constructor (game) {
    super(game, "Ruin Raider", "Ixalan", "XLN");
  }
}

module.exports = RuinRaider;
