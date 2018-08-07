"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AethertideWhale extends UnimplementedCard {
  constructor (game) {
    super(game, "Aethertide Whale", "Aether Revolt", "AER");
  }
}

module.exports = AethertideWhale;
