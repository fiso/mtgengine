"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SlipperyScoundrel extends UnimplementedCard {
  constructor (game) {
    super(game, "Slippery Scoundrel", "Rivals of Ixalan", "RIX");
  }
}

module.exports = SlipperyScoundrel;
