"use strict";
const Constants = require ("../../../Constants");
const FieryConclusionBase = require("../setORI/FieryConclusion");

class FieryConclusion extends FieryConclusionBase {
  constructor (game) {
    super(game, "Fiery Conclusion", "Planechase 2012 Edition", "PC2");
  }
}

module.exports = FieryConclusion;
