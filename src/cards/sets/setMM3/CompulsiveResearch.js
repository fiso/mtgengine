"use strict";
const Constants = require ("../../../Constants");
const CompulsiveResearchBase = require("../setE01/CompulsiveResearch");

class CompulsiveResearch extends CompulsiveResearchBase {
  constructor (game) {
    super(game, "Compulsive Research", "Modern Masters 2017", "MM3");
  }
}

module.exports = CompulsiveResearch;
