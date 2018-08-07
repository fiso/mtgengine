"use strict";
const Constants = require ("../../../Constants");
const StalkingTigerBase = require("../setW17/StalkingTiger");

class StalkingTiger extends StalkingTigerBase {
  constructor (game) {
    super(game, "Stalking Tiger", "Portal", "POR");
  }
}

module.exports = StalkingTiger;
