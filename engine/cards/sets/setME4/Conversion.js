"use strict";
const Constants = require ("../../../Constants");
const ConversionBase = require("../setCED/Conversion");

class Conversion extends ConversionBase {
  constructor(game) {
    super(game, "Conversion", "Masters Edition IV", "ME4");
  }
}

module.exports = Conversion;
