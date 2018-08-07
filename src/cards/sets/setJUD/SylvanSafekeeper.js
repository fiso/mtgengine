"use strict";
const Constants = require ("../../../Constants");
const SylvanSafekeeperBase = require("../setCMA/SylvanSafekeeper");

class SylvanSafekeeper extends SylvanSafekeeperBase {
  constructor (game) {
    super(game, "Sylvan Safekeeper", "Judgment", "JUD");
  }
}

module.exports = SylvanSafekeeper;
