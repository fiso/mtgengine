"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const CompulsiveResearchBase = require("../setC14/CompulsiveResearch.js");

class CompulsiveResearch extends CompulsiveResearchBase {
  constructor(game) {
    super(game, "Compulsive Research", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = CompulsiveResearch;
