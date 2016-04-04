"use strict";
const Constants = require ("../../../Constants");
const ShimmeringGrottoBase = require("../setISD/ShimmeringGrotto");

class ShimmeringGrotto extends ShimmeringGrottoBase {
  constructor(game) {
    super(game, "Shimmering Grotto", "Magic 2014 Core Set", "M14");
  }
}

module.exports = ShimmeringGrotto;
