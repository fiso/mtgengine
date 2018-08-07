"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TrueheartDuelistToken extends UnimplementedCard {
  constructor (game) {
    super(game, "Trueheart Duelist Token", "Amonkhet Tokens", "TAKH");
  }
}

module.exports = TrueheartDuelistToken;
