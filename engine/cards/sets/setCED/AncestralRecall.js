"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AncestralRecall extends UnimplementedCard {
  constructor(game) {
    super(game, "Ancestral Recall", "Collector's Edition", "CED");
  }
}

module.exports = AncestralRecall;
