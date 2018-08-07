"use strict";
const Constants = require ("../../../Constants");
const StalkingTigerBase = require("../setW17/StalkingTiger");

class StalkingTiger extends StalkingTigerBase {
  constructor (game) {
    super(game, "Stalking Tiger", "Portal Three Kingdoms", "PTK");
  }
}

module.exports = StalkingTiger;
