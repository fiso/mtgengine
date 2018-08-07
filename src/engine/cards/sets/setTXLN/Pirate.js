"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Pirate extends UnimplementedCard {
  constructor (game) {
    super(game, "Pirate", "Ixalan Tokens", "TXLN");
  }
}

module.exports = Pirate;
