"use strict";
const Constants = require ("../../../Constants");
const ShimmeringGrottoBase = require("../setIMA/ShimmeringGrotto");

class ShimmeringGrotto extends ShimmeringGrottoBase {
  constructor (game) {
    super(game, "Shimmering Grotto", "Magic 2014", "M14");
  }
}

module.exports = ShimmeringGrotto;
