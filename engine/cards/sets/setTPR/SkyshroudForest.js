"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SkyshroudForestBase = require("../setTMP/SkyshroudForest.js");

class SkyshroudForest extends SkyshroudForestBase {
  constructor(game) {
    super(game, "Skyshroud Forest", "Tempest Remastered", "TPR");
  }
}

module.exports = SkyshroudForest;
