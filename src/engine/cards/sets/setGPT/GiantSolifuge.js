"use strict";
const Constants = require ("../../../Constants");
const GiantSolifugeBase = require("../setEMA/GiantSolifuge");

class GiantSolifuge extends GiantSolifugeBase {
  constructor (game) {
    super(game, "Giant Solifuge", "Guildpact", "GPT");
  }
}

module.exports = GiantSolifuge;
