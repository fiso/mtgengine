"use strict";
const Constants = require ("../../../Constants");
const FieryConclusionBase = require("../setPCA/FieryConclusion");

class FieryConclusion extends FieryConclusionBase {
  constructor (game) {
    super(game, "Fiery Conclusion", "Planechase 2012", "PC2");
  }
}

module.exports = FieryConclusion;
