"use strict";
const Constants = require ("../../../Constants");
const TamiyoFieldResearcherBase = require("../setEMN/TamiyoFieldResearcher");

class TamiyoFieldResearcher extends TamiyoFieldResearcherBase {
  constructor (game) {
    super(game, "Tamiyo, Field Researcher", "Eldritch Moon Promos", "PEMN");
  }
}

module.exports = TamiyoFieldResearcher;
