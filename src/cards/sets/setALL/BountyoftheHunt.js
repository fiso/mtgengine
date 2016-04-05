"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BountyoftheHunt extends UnimplementedCard {
  constructor(game) {
    super(game, "Bounty of the Hunt", "Alliances", "ALL");
  }
}

module.exports = BountyoftheHunt;
