"use strict";
const Constants = require ("../../../Constants");
const SylvanSafekeeperBase = require("../setCMA/SylvanSafekeeper");

class SylvanSafekeeper extends SylvanSafekeeperBase {
  constructor (game) {
    super(game, "Sylvan Safekeeper", "World Championship Decks 2002", "WC02");
  }
}

module.exports = SylvanSafekeeper;
