"use strict";
const Constants = require ("../../../Constants");
const SylvanSafekeeperBase = require("../setC14/SylvanSafekeeper");

class SylvanSafekeeper extends SylvanSafekeeperBase {
  constructor(game) {
    super(game, "Sylvan Safekeeper", "Judgment", "JUD");
  }
}

module.exports = SylvanSafekeeper;
