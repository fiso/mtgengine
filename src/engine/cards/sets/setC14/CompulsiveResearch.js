"use strict";
const Constants = require ("../../../Constants");
const CompulsiveResearchBase = require("../setE01/CompulsiveResearch");

class CompulsiveResearch extends CompulsiveResearchBase {
  constructor (game) {
    super(game, "Compulsive Research", "Commander 2014", "C14");
  }
}

module.exports = CompulsiveResearch;
