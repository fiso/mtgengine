"use strict";
const Constants = require ("../../../Constants");
const ConversionBase = require("../setME4/Conversion");

class Conversion extends ConversionBase {
  constructor (game) {
    super(game, "Conversion", "Intl. Collectors’ Edition", "CEI");
  }
}

module.exports = Conversion;
