"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ValorousStance extends UnimplementedCard {
  constructor (game) {
    super(game, "Valorous Stance", "Fate Reforged", "FRF");
  }
}

module.exports = ValorousStance;
