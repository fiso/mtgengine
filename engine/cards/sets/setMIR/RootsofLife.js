"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RootsofLife extends UnimplementedCard {
  constructor(game) {
    super(game, "Roots of Life", "Mirage", "MIR");
  }
}

module.exports = RootsofLife;
