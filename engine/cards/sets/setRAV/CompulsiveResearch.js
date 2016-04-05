"use strict";
const Constants = require ("../../../Constants");
const CompulsiveResearchBase = require("../setC14/CompulsiveResearch");

class CompulsiveResearch extends CompulsiveResearchBase {
  constructor(game) {
    super(game, "Compulsive Research", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = CompulsiveResearch;
