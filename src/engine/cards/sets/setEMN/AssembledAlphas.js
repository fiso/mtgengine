"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AssembledAlphas extends UnimplementedCard {
  constructor (game) {
    super(game, "Assembled Alphas", "Eldritch Moon", "EMN");
  }
}

module.exports = AssembledAlphas;
