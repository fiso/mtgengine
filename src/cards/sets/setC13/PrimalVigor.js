"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PrimalVigor extends UnimplementedCard {
  constructor(game) {
    super(game, "Primal Vigor", "Commander 2013 Edition", "C13");
  }
}

module.exports = PrimalVigor;
