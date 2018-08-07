"use strict";
const Constants = require ("../../../Constants");
const StalkingTigerBase = require("../setW17/StalkingTiger");

class StalkingTiger extends StalkingTigerBase {
  constructor (game) {
    super(game, "Stalking Tiger", "Classic Sixth Edition", "6ED");
  }
}

module.exports = StalkingTiger;
