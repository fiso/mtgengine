"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Illusion extends UnimplementedCard {
  constructor (game) {
    super(game, "Illusion", "Ixalan Tokens", "TXLN");
  }
}

module.exports = Illusion;
