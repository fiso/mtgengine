"use strict";
const Constants = require ("../../../Constants");
const PerilousResearchBase = require("../setCSP/PerilousResearch");

class PerilousResearch extends PerilousResearchBase {
  constructor(game) {
    super(game, "Perilous Research", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = PerilousResearch;
