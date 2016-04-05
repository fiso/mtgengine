"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HarvestHand extends UnimplementedCard {
  constructor(game) {
    super(game, "Harvest Hand", "Shadows over Innistrad", "SOI");
  }
}

module.exports = HarvestHand;
