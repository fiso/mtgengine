"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const PerilousResearchBase = require("../setCSP/PerilousResearch.js");

class PerilousResearch extends PerilousResearchBase {
  constructor(game) {
    super(game, "Perilous Research", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = PerilousResearch;
