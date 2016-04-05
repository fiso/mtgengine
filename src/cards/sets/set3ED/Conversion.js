"use strict";
const Constants = require ("../../../Constants");
const ConversionBase = require("../setCED/Conversion");

class Conversion extends ConversionBase {
  constructor(game) {
    super(game, "Conversion", "Revised Edition", "3ED");
  }
}

module.exports = Conversion;
