"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Equilibrium extends UnimplementedCard {
  constructor (game) {
    super(game, "Equilibrium", "Exodus", "EXO");
  }
}

module.exports = Equilibrium;
