"use strict";
const Constants = require ("../../../Constants");
const FieryConclusionBase = require("../setORI/FieryConclusion");

class FieryConclusion extends FieryConclusionBase {
  constructor (game) {
    super(game, "Fiery Conclusion", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = FieryConclusion;
