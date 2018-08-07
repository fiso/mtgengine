"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class InfernoTitan extends UnimplementedCard {
  constructor (game) {
    super(game, "Inferno Titan", "Commander Anthology Volume II", "CM2");
  }
}

module.exports = InfernoTitan;
