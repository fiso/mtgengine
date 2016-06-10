"use strict";
const Constants = require ("../../../Constants");
const ConversionBase = require("../setCED/Conversion");

class Conversion extends ConversionBase {
  constructor (game) {
    super(game, "Conversion", "Limited Edition Beta", "LEB");
  }
}

module.exports = Conversion;
