"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Equilibrium extends UnimplementedCard {
  constructor (game) {
    super(game, "Equilibrium", "Seventh Edition", "7ED");
  }
}

module.exports = Equilibrium;
