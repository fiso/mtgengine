"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AvenInitiateToken extends UnimplementedCard {
  constructor (game) {
    super(game, "Aven Initiate Token", "Amonkhet Tokens", "TAKH");
  }
}

module.exports = AvenInitiateToken;
