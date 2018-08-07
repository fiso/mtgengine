"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PrimevalProtector extends UnimplementedCard {
  constructor (game) {
    super(game, "Primeval Protector", "You Make the Cube", "PZ2");
  }
}

module.exports = PrimevalProtector;
