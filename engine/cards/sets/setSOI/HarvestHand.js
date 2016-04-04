"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HarvestHand extends Card {
  constructor(game) {
    super(game, "Harvest Hand", "Shadows over Innistrad", "SOI");
  }
}

module.exports = HarvestHand;
