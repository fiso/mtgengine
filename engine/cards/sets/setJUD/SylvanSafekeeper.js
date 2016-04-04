"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SylvanSafekeeperBase = require("../setC14/SylvanSafekeeper.js");

class SylvanSafekeeper extends SylvanSafekeeperBase {
  constructor(game) {
    super(game, "Sylvan Safekeeper", "Judgment", "JUD");
  }
}

module.exports = SylvanSafekeeper;
