"use strict";
const Constants = require ("../../../Constants");
const ShimmeringGrottoBase = require("../setIMA/ShimmeringGrotto");

class ShimmeringGrotto extends ShimmeringGrottoBase {
  constructor (game) {
    super(game, "Shimmering Grotto", "Conspiracy: Take the Crown", "CN2");
  }
}

module.exports = ShimmeringGrotto;
