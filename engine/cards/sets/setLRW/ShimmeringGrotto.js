"use strict";
const Constants = require ("../../../Constants");
const ShimmeringGrottoBase = require("../setISD/ShimmeringGrotto");

class ShimmeringGrotto extends ShimmeringGrottoBase {
  constructor(game) {
    super(game, "Shimmering Grotto", "Lorwyn", "LRW");
  }
}

module.exports = ShimmeringGrotto;
