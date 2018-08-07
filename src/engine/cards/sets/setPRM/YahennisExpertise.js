"use strict";
const Constants = require ("../../../Constants");
const YahennisExpertiseBase = require("../setAER/YahennisExpertise");

class YahennisExpertise extends YahennisExpertiseBase {
  constructor (game) {
    super(game, "Yahenni's Expertise", "Magic Online Promos", "PRM");
  }
}

module.exports = YahennisExpertise;
