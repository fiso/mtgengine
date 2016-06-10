"use strict";
const Constants = require ("../../../Constants");
const ForbiddingWatchtowerBase = require("../set10E/ForbiddingWatchtower");

class ForbiddingWatchtower extends ForbiddingWatchtowerBase {
  constructor (game) {
    super(game, "Forbidding Watchtower", "Urza's Legacy", "ULG");
  }
}

module.exports = ForbiddingWatchtower;
