"use strict";
const Constants = require ("../../../Constants");
const FaerieConclaveBase = require("../setCMA/FaerieConclave");

class FaerieConclave extends FaerieConclaveBase {
  constructor (game) {
    super(game, "Faerie Conclave", "Summer of Magic", "PSUM");
  }
}

module.exports = FaerieConclave;
