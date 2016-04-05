"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GaeasBounty extends UnimplementedCard {
  constructor(game) {
    super(game, "Gaea's Bounty", "Urza's Saga", "USG");
  }
}

module.exports = GaeasBounty;
