"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NarnamCobra extends UnimplementedCard {
  constructor (game) {
    super(game, "Narnam Cobra", "Kaladesh", "KLD");
  }
}

module.exports = NarnamCobra;
