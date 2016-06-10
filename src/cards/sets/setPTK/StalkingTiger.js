"use strict";
const Constants = require ("../../../Constants");
const StalkingTigerBase = require("../set6ED/StalkingTiger");

class StalkingTiger extends StalkingTigerBase {
  constructor (game) {
    super(game, "Stalking Tiger", "Portal Three Kingdoms", "PTK");
  }
}

module.exports = StalkingTiger;
