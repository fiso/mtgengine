"use strict";
const Constants = require ("../../../Constants");
const PavelMalikiBase = require("../setLEG/PavelMaliki");

class PavelMaliki extends PavelMalikiBase {
  constructor (game) {
    super(game, "Pavel Maliki", "Masters Edition III", "ME3");
  }
}

module.exports = PavelMaliki;
