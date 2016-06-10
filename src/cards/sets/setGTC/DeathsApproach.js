"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DeathsApproach extends UnimplementedCard {
  constructor (game) {
    super(game, "Death's Approach", "Gatecrash", "GTC");
  }
}

module.exports = DeathsApproach;
