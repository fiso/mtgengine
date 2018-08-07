"use strict";
const Constants = require ("../../../Constants");
const SkyshroudForestBase = require("../setTPR/SkyshroudForest");

class SkyshroudForest extends SkyshroudForestBase {
  constructor (game) {
    super(game, "Skyshroud Forest", "Vintage Masters", "VMA");
  }
}

module.exports = SkyshroudForest;
