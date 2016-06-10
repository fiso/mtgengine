"use strict";
const Constants = require ("../../../Constants");
const SoullessOneBase = require("../setONS/SoullessOne");

class SoullessOne extends SoullessOneBase {
  constructor (game) {
    super(game, "Soulless One", "Planechase", "HOP");
  }
}

module.exports = SoullessOne;
