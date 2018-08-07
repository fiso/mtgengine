"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KaroxBladewing extends UnimplementedCard {
  constructor (game) {
    super(game, "Karox Bladewing", "Dominaria Tokens", "TDOM");
  }
}

module.exports = KaroxBladewing;
