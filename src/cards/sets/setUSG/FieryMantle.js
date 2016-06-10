"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FieryMantle extends UnimplementedCard {
  constructor (game) {
    super(game, "Fiery Mantle", "Urza's Saga", "USG");
  }
}

module.exports = FieryMantle;
