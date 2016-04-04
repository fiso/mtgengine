"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BountyoftheHuntBase = require("../setALL/BountyoftheHunt.js");

class BountyoftheHunt extends BountyoftheHuntBase {
  constructor(game) {
    super(game, "Bounty of the Hunt", "Coldsnap Theme Decks", "CST");
  }
}

module.exports = BountyoftheHunt;
