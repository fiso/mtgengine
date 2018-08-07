"use strict";
const Constants = require ("../../../Constants");
const SoullessOneBase = require("../setHOP/SoullessOne");

class SoullessOne extends SoullessOneBase {
  constructor (game) {
    super(game, "Soulless One", "Onslaught", "ONS");
  }
}

module.exports = SoullessOne;
