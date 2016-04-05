"use strict";
const Constants = require ("../../../Constants");
const ConversionBase = require("../setCED/Conversion");

class Conversion extends ConversionBase {
  constructor(game) {
    super(game, "Conversion", "Fourth Edition", "4ED");
  }
}

module.exports = Conversion;
