"use strict";
const Constants = require ("../../../Constants");
const HeedlessOneBase = require("../setDD3_EVG/HeedlessOne");

class HeedlessOne extends HeedlessOneBase {
  constructor (game) {
    super(game, "Heedless One", "Onslaught", "ONS");
  }
}

module.exports = HeedlessOne;
