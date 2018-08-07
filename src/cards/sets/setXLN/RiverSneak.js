"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RiverSneak extends UnimplementedCard {
  constructor (game) {
    super(game, "River Sneak", "Ixalan", "XLN");
  }
}

module.exports = RiverSneak;
