"use strict";
const Constants = require ("../../../Constants");
const BountyoftheHuntBase = require("../setME2/BountyoftheHunt");

class BountyoftheHunt extends BountyoftheHuntBase {
  constructor (game) {
    super(game, "Bounty of the Hunt", "Alliances", "ALL");
  }
}

module.exports = BountyoftheHunt;
