"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ForbiddingWatchtower extends UnimplementedCard {
  constructor(game) {
    super(game, "Forbidding Watchtower", "Tenth Edition", "10E");
  }
}

module.exports = ForbiddingWatchtower;
