"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ShimmeringGrottoBase = require("../setISD/ShimmeringGrotto.js");

class ShimmeringGrotto extends ShimmeringGrottoBase {
  constructor(game) {
    super(game, "Shimmering Grotto", "Planechase 2012 Edition", "PC2");
  }
}

module.exports = ShimmeringGrotto;
