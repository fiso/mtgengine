"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FleshReaver extends UnimplementedCard {
  constructor (game) {
    super(game, "Flesh Reaver", "Urza's Saga", "USG");
  }
}

module.exports = FleshReaver;
