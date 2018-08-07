"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Vampire extends UnimplementedCard {
  constructor (game) {
    super(game, "Vampire", "Ixalan Tokens", "TXLN");
  }
}

module.exports = Vampire;
