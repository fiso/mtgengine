"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DeadeyeHarpooner extends UnimplementedCard {
  constructor (game) {
    super(game, "Deadeye Harpooner", "Aether Revolt", "AER");
  }
}

module.exports = DeadeyeHarpooner;
