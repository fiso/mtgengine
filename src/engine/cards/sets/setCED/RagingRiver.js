"use strict";
const Constants = require ("../../../Constants");
const RagingRiverBase = require("../setCEI/RagingRiver");

class RagingRiver extends RagingRiverBase {
  constructor (game) {
    super(game, "Raging River", "Collectors’ Edition", "CED");
  }
}

module.exports = RagingRiver;
