"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PlagueSpores extends UnimplementedCard {
  constructor(game) {
    super(game, "Plague Spores", "Invasion", "INV");
  }
}

module.exports = PlagueSpores;
