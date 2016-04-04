"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const RubblehulkBase = require("../setGTC/Rubblehulk.js");

class Rubblehulk extends RubblehulkBase {
  constructor(game) {
    super(game, "Rubblehulk", "Prerelease Events", "pPRE");
  }
}

module.exports = Rubblehulk;
