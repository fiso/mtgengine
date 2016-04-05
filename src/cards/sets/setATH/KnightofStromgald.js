"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KnightofStromgald extends UnimplementedCard {
  constructor(game) {
    super(game, "Knight of Stromgald", "Anthologies", "ATH");
  }
}

module.exports = KnightofStromgald;
