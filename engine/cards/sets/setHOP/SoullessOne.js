"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SoullessOneBase = require("../setONS/SoullessOne.js");

class SoullessOne extends SoullessOneBase {
  constructor(game) {
    super(game, "Soulless One", "Planechase", "HOP");
  }
}

module.exports = SoullessOne;
