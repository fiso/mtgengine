"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MonstrousGrowth extends UnimplementedCard {
  constructor(game) {
    super(game, "Monstrous Growth", "Eighth Edition", "8ED");
  }
}

module.exports = MonstrousGrowth;
