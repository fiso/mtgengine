"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Merfolk extends UnimplementedCard {
  constructor (game) {
    super(game, "Merfolk", "Ixalan Tokens", "TXLN");
  }
}

module.exports = Merfolk;
