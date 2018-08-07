"use strict";
const Constants = require ("../../../Constants");
const YahennisExpertiseBase = require("../setAER/YahennisExpertise");

class YahennisExpertise extends YahennisExpertiseBase {
  constructor (game) {
    super(game, "Yahenni's Expertise", "Aether Revolt Promos", "PAER");
  }
}

module.exports = YahennisExpertise;
