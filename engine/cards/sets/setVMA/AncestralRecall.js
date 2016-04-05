"use strict";
const Constants = require ("../../../Constants");
const AncestralRecallBase = require("../setCED/AncestralRecall");

class AncestralRecall extends AncestralRecallBase {
  constructor(game) {
    super(game, "Ancestral Recall", "Vintage Masters", "VMA");
  }
}

module.exports = AncestralRecall;
