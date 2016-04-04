"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GaeasBounty extends Card {
  constructor(game) {
    super(game, "Gaea's Bounty", "Urza's Saga", "USG");
  }
}

module.exports = GaeasBounty;
