"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Disallow extends UnimplementedCard {
  constructor (game) {
    super(game, "Disallow", "Aether Revolt", "AER");
  }
}

module.exports = Disallow;
