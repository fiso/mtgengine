"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ExtractorDemonBase = require("../setARC/ExtractorDemon.js");

class ExtractorDemon extends ExtractorDemonBase {
  constructor(game) {
    super(game, "Extractor Demon", "Commander 2015", "C15");
  }
}

module.exports = ExtractorDemon;
