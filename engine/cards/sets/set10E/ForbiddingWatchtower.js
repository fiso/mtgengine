"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ForbiddingWatchtower extends Card {
  constructor(game) {
    super(game, "Forbidding Watchtower", "Tenth Edition", "10E");
  }
}

module.exports = ForbiddingWatchtower;
