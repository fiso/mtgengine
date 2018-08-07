"use strict";
const Constants = require ("../../../Constants");
const TolariaWestBase = require("../setV16/TolariaWest");

class TolariaWest extends TolariaWestBase {
  constructor (game) {
    super(game, "Tolaria West", "Future Sight", "FUT");
  }
}

module.exports = TolariaWest;
