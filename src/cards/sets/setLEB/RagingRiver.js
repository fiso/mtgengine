"use strict";
const Constants = require ("../../../Constants");
const RagingRiverBase = require("../setCED/RagingRiver");

class RagingRiver extends RagingRiverBase {
  constructor(game) {
    super(game, "Raging River", "Limited Edition Beta", "LEB");
  }
}

module.exports = RagingRiver;
