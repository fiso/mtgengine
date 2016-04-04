"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const PerilousResearchBase = require("../setCSP/PerilousResearch.js");

class PerilousResearch extends PerilousResearchBase {
  constructor(game) {
    super(game, "Perilous Research", "Modern Masters", "MMA");
  }
}

module.exports = PerilousResearch;
