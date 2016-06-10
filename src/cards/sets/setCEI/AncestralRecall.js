"use strict";
const Constants = require ("../../../Constants");
const AncestralRecallBase = require("../setCED/AncestralRecall");

class AncestralRecall extends AncestralRecallBase {
  constructor (game) {
    super(game, "Ancestral Recall", "International Collector's Edition", "CEI");
  }
}

module.exports = AncestralRecall;
