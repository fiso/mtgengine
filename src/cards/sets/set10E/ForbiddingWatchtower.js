"use strict";
const Constants = require ("../../../Constants");
const ForbiddingWatchtowerBase = require("../setTD2/ForbiddingWatchtower");

class ForbiddingWatchtower extends ForbiddingWatchtowerBase {
  constructor (game) {
    super(game, "Forbidding Watchtower", "Tenth Edition", "10E");
  }
}

module.exports = ForbiddingWatchtower;
