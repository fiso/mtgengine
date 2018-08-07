"use strict";
const Constants = require ("../../../Constants");
const ExtractorDemonBase = require("../setCM2/ExtractorDemon");

class ExtractorDemon extends ExtractorDemonBase {
  constructor (game) {
    super(game, "Extractor Demon", "Commander 2011", "CMD");
  }
}

module.exports = ExtractorDemon;
