"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ConversionBase = require("../setCED/Conversion.js");

class Conversion extends ConversionBase {
  constructor(game) {
    super(game, "Conversion", "Fourth Edition", "4ED");
  }
}

module.exports = Conversion;
