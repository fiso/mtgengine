"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class AncestralRecall extends Card {
  constructor(game) {
    super(game, "Ancestral Recall", "Collector's Edition", "CED");
  }
}

module.exports = AncestralRecall;
