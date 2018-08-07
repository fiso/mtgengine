"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ReversalofFortune extends UnimplementedCard {
  constructor (game) {
    super(game, "Reversal of Fortune", "Fifth Dawn", "5DN");
  }
}

module.exports = ReversalofFortune;
