"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const TalasResearcherBase = require("../setME4/TalasResearcher.js");

class TalasResearcher extends TalasResearcherBase {
  constructor(game) {
    super(game, "Talas Researcher", "Portal Second Age", "PO2");
  }
}

module.exports = TalasResearcher;
