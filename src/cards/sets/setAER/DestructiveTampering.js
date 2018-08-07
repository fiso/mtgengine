"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DestructiveTampering extends UnimplementedCard {
  constructor (game) {
    super(game, "Destructive Tampering", "Aether Revolt", "AER");
  }
}

module.exports = DestructiveTampering;
