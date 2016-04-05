"use strict";
const Constants = require ("../../../Constants");
const CompulsiveResearchBase = require("../setC14/CompulsiveResearch");

class CompulsiveResearch extends CompulsiveResearchBase {
  constructor(game) {
    super(game, "Compulsive Research", "Magic: The Gathering—Conspiracy", "CNS");
  }
}

module.exports = CompulsiveResearch;
