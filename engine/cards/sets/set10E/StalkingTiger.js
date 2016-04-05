"use strict";
const Constants = require ("../../../Constants");
const StalkingTigerBase = require("../set6ED/StalkingTiger");

class StalkingTiger extends StalkingTigerBase {
  constructor(game) {
    super(game, "Stalking Tiger", "Tenth Edition", "10E");
  }
}

module.exports = StalkingTiger;
