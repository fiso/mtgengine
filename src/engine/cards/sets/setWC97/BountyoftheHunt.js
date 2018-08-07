"use strict";
const Constants = require ("../../../Constants");
const BountyoftheHuntBase = require("../setME2/BountyoftheHunt");

class BountyoftheHunt extends BountyoftheHuntBase {
  constructor (game) {
    super(game, "Bounty of the Hunt", "World Championship Decks 1997", "WC97");
  }
}

module.exports = BountyoftheHunt;
