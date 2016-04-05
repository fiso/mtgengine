"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WarbreakTrumpeter extends UnimplementedCard {
  constructor(game) {
    super(game, "Warbreak Trumpeter", "Legions", "LGN");
  }
}

module.exports = WarbreakTrumpeter;
