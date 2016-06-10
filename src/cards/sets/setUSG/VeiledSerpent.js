"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VeiledSerpent extends UnimplementedCard {
  constructor (game) {
    super(game, "Veiled Serpent", "Urza's Saga", "USG");
  }
}

module.exports = VeiledSerpent;
