"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const AncestralRecallBase = require("../setCED/AncestralRecall.js");

class AncestralRecall extends AncestralRecallBase {
  constructor(game) {
    super(game, "Ancestral Recall", "Limited Edition Alpha", "LEA");
  }
}

module.exports = AncestralRecall;
