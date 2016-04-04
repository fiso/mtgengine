"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ExtractorDemonBase = require("../setARC/ExtractorDemon.js");

class ExtractorDemon extends ExtractorDemonBase {
  constructor(game) {
    super(game, "Extractor Demon", "Conflux", "CON");
  }
}

module.exports = ExtractorDemon;
