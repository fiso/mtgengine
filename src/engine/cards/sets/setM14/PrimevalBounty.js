"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PrimevalBounty extends UnimplementedCard {
  constructor (game) {
    super(game, "Primeval Bounty", "Magic 2014", "M14");
  }
}

module.exports = PrimevalBounty;
