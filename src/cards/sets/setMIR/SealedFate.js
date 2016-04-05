"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SealedFate extends UnimplementedCard {
  constructor(game) {
    super(game, "Sealed Fate", "Mirage", "MIR");
  }
}

module.exports = SealedFate;
