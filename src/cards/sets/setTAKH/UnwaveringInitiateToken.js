"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class UnwaveringInitiateToken extends UnimplementedCard {
  constructor (game) {
    super(game, "Unwavering Initiate Token", "Amonkhet Tokens", "TAKH");
  }
}

module.exports = UnwaveringInitiateToken;
