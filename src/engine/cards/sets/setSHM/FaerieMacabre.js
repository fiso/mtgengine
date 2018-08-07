"use strict";
const Constants = require ("../../../Constants");
const FaerieMacabreBase = require("../setGVL/FaerieMacabre");

class FaerieMacabre extends FaerieMacabreBase {
  constructor (game) {
    super(game, "Faerie Macabre", "Shadowmoor", "SHM");
  }
}

module.exports = FaerieMacabre;
