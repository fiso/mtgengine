"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KnightAlly extends UnimplementedCard {
  constructor (game) {
    super(game, "Knight Ally", "Battle for Zendikar Tokens", "TBFZ");
  }
}

module.exports = KnightAlly;
