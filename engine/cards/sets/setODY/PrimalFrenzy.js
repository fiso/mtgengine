"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PrimalFrenzy extends UnimplementedCard {
  constructor(game) {
    super(game, "Primal Frenzy", "Odyssey", "ODY");
  }
}

module.exports = PrimalFrenzy;
