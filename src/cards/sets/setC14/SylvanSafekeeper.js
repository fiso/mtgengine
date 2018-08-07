"use strict";
const Constants = require ("../../../Constants");
const SylvanSafekeeperBase = require("../setCMA/SylvanSafekeeper");

class SylvanSafekeeper extends SylvanSafekeeperBase {
  constructor (game) {
    super(game, "Sylvan Safekeeper", "Commander 2014", "C14");
  }
}

module.exports = SylvanSafekeeper;
