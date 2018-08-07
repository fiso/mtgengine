"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AngelofSanctionsToken extends UnimplementedCard {
  constructor (game) {
    super(game, "Angel of Sanctions Token", "Amonkhet Tokens", "TAKH");
  }
}

module.exports = AngelofSanctionsToken;
