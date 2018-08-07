"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LiberatingCombustion extends UnimplementedCard {
  constructor (game) {
    super(game, "Liberating Combustion", "Kaladesh", "KLD");
  }
}

module.exports = LiberatingCombustion;
