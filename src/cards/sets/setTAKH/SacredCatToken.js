"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SacredCatToken extends UnimplementedCard {
  constructor (game) {
    super(game, "Sacred Cat Token", "Amonkhet Tokens", "TAKH");
  }
}

module.exports = SacredCatToken;
