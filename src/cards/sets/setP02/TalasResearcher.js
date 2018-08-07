"use strict";
const Constants = require ("../../../Constants");
const TalasResearcherBase = require("../setME4/TalasResearcher");

class TalasResearcher extends TalasResearcherBase {
  constructor (game) {
    super(game, "Talas Researcher", "Portal Second Age", "P02");
  }
}

module.exports = TalasResearcher;
