"use strict";
const Constants = require ("../../../Constants");
const ExtractorDemonBase = require("../setARC/ExtractorDemon");

class ExtractorDemon extends ExtractorDemonBase {
  constructor (game) {
    super(game, "Extractor Demon", "Commander 2015", "C15");
  }
}

module.exports = ExtractorDemon;
