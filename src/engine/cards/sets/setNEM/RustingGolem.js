"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RustingGolem extends UnimplementedCard {
  constructor (game) {
    super(game, "Rusting Golem", "Nemesis", "NEM");
  }
}

module.exports = RustingGolem;
