"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ShieldedPassage extends UnimplementedCard {
  constructor(game) {
    super(game, "Shielded Passage", "Gatecrash", "GTC");
  }
}

module.exports = ShieldedPassage;
