"use strict";
const Constants = require ("../../../Constants");
const BountyoftheHuntBase = require("../setALL/BountyoftheHunt");

class BountyoftheHunt extends BountyoftheHuntBase {
  constructor(game) {
    super(game, "Bounty of the Hunt", "Deckmasters", "DKM");
  }
}

module.exports = BountyoftheHunt;
