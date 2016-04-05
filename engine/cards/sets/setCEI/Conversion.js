"use strict";
const Constants = require ("../../../Constants");
const ConversionBase = require("../setCED/Conversion");

class Conversion extends ConversionBase {
  constructor(game) {
    super(game, "Conversion", "International Collector's Edition", "CEI");
  }
}

module.exports = Conversion;
