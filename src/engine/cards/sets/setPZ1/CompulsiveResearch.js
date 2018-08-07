"use strict";
const Constants = require ("../../../Constants");
const CompulsiveResearchBase = require("../setE01/CompulsiveResearch");

class CompulsiveResearch extends CompulsiveResearchBase {
  constructor (game) {
    super(game, "Compulsive Research", "Legendary Cube", "PZ1");
  }
}

module.exports = CompulsiveResearch;
