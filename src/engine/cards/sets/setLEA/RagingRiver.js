"use strict";
const Constants = require ("../../../Constants");
const RagingRiverBase = require("../setCEI/RagingRiver");

class RagingRiver extends RagingRiverBase {
  constructor (game) {
    super(game, "Raging River", "Limited Edition Alpha", "LEA");
  }
}

module.exports = RagingRiver;
