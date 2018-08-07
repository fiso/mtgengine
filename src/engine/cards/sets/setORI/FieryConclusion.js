"use strict";
const Constants = require ("../../../Constants");
const FieryConclusionBase = require("../setPCA/FieryConclusion");

class FieryConclusion extends FieryConclusionBase {
  constructor (game) {
    super(game, "Fiery Conclusion", "Magic Origins", "ORI");
  }
}

module.exports = FieryConclusion;
