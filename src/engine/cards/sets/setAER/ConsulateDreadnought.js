"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ConsulateDreadnought extends UnimplementedCard {
  constructor (game) {
    super(game, "Consulate Dreadnought", "Aether Revolt", "AER");
  }
}

module.exports = ConsulateDreadnought;
