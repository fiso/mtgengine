"use strict";
const Constants = require ("../../../Constants");
const AncestralRecallBase = require("../setVMA/AncestralRecall");

class AncestralRecall extends AncestralRecallBase {
  constructor (game) {
    super(game, "Ancestral Recall", "Magic Online Promos", "PRM");
  }
}

module.exports = AncestralRecall;
