"use strict";
const Constants = require ("../../../Constants");
const RubblehulkBase = require("../setGTC/Rubblehulk");

class Rubblehulk extends RubblehulkBase {
  constructor(game) {
    super(game, "Rubblehulk", "Prerelease Events", "pPRE");
  }
}

module.exports = Rubblehulk;
