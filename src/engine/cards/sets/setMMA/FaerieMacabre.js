"use strict";
const Constants = require ("../../../Constants");
const FaerieMacabreBase = require("../setGVL/FaerieMacabre");

class FaerieMacabre extends FaerieMacabreBase {
  constructor (game) {
    super(game, "Faerie Macabre", "Modern Masters", "MMA");
  }
}

module.exports = FaerieMacabre;
