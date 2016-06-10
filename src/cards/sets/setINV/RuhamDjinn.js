"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RuhamDjinn extends UnimplementedCard {
  constructor (game) {
    super(game, "Ruham Djinn", "Invasion", "INV");
  }
}

module.exports = RuhamDjinn;
