"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BountyoftheHunt extends Card {
  constructor(game) {
    super(game, "Bounty of the Hunt", "Alliances", "ALL");
  }
}

module.exports = BountyoftheHunt;
