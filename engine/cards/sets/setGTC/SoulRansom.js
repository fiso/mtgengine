"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SoulRansom extends UnimplementedCard {
  constructor(game) {
    super(game, "Soul Ransom", "Gatecrash", "GTC");
  }
}

module.exports = SoulRansom;
