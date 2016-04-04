"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const FaerieMacabreBase = require("../setDD3_GVL/FaerieMacabre.js");

class FaerieMacabre extends FaerieMacabreBase {
  constructor(game) {
    super(game, "Faerie Macabre", "Modern Masters", "MMA");
  }
}

module.exports = FaerieMacabre;
