"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FathomFeeder extends UnimplementedCard {
  constructor(game) {
    super(game, "Fathom Feeder", "Battle for Zendikar", "BFZ");
  }
}

module.exports = FathomFeeder;
