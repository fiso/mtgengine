"use strict";
const Constants = require ("../../../Constants");
const GhostQuarterBase = require("../setCM2/GhostQuarter");

class GhostQuarter extends GhostQuarterBase {
  constructor (game) {
    super(game, "Ghost Quarter", "Magic Online Theme Decks", "TD0");
  }
}

module.exports = GhostQuarter;
