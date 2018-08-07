"use strict";
const Constants = require ("../../../Constants");
const FieryConclusionBase = require("../setPCA/FieryConclusion");

class FieryConclusion extends FieryConclusionBase {
  constructor (game) {
    super(game, "Fiery Conclusion", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = FieryConclusion;
