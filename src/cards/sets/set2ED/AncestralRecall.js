"use strict";
const Constants = require ("../../../Constants");
const AncestralRecallBase = require("../setCED/AncestralRecall");

class AncestralRecall extends AncestralRecallBase {
  constructor (game) {
    super(game, "Ancestral Recall", "Unlimited Edition", "2ED");
  }
}

module.exports = AncestralRecall;
