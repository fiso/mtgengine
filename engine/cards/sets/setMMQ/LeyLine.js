"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LeyLine extends UnimplementedCard {
  constructor(game) {
    super(game, "Ley Line", "Mercadian Masques", "MMQ");
  }
}

module.exports = LeyLine;
