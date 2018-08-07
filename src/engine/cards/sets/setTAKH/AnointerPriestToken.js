"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AnointerPriestToken extends UnimplementedCard {
  constructor (game) {
    super(game, "Anointer Priest Token", "Amonkhet Tokens", "TAKH");
  }
}

module.exports = AnointerPriestToken;
