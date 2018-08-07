"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SpiritSpirit extends UnimplementedCard {
  constructor (game) {
    super(game, "Spirit // Spirit", "Unstable Tokens", "TUST");
  }
}

module.exports = SpiritSpirit;
