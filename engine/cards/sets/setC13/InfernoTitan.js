"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class InfernoTitan extends UnimplementedCard {
  constructor(game) {
    super(game, "Inferno Titan", "Commander 2013 Edition", "C13");
  }
}

module.exports = InfernoTitan;
