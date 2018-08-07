"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CorruptedResolve extends UnimplementedCard {
  constructor (game) {
    super(game, "Corrupted Resolve", "New Phyrexia", "NPH");
  }
}

module.exports = CorruptedResolve;
