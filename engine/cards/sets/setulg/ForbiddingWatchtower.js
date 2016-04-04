"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ForbiddingWatchtowerBase = require("../set10E/ForbiddingWatchtower.js");

class ForbiddingWatchtower extends ForbiddingWatchtowerBase {
  constructor(game) {
    super(game, "Forbidding Watchtower", "Urza's Legacy", "ULG");
  }
}

module.exports = ForbiddingWatchtower;
