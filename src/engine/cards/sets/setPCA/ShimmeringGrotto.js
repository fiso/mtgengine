"use strict";
const Constants = require ("../../../Constants");
const ShimmeringGrottoBase = require("../setIMA/ShimmeringGrotto");

class ShimmeringGrotto extends ShimmeringGrottoBase {
  constructor (game) {
    super(game, "Shimmering Grotto", "Planechase Anthology", "PCA");
  }
}

module.exports = ShimmeringGrotto;
