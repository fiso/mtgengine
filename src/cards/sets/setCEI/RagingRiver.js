"use strict";
const Constants = require ("../../../Constants");
const RagingRiverBase = require("../setCED/RagingRiver");

class RagingRiver extends RagingRiverBase {
  constructor(game) {
    super(game, "Raging River", "International Collector's Edition", "CEI");
  }
}

module.exports = RagingRiver;
