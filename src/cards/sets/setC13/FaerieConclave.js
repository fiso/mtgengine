"use strict";
const Constants = require ("../../../Constants");
const FaerieConclaveBase = require("../setCMA/FaerieConclave");

class FaerieConclave extends FaerieConclaveBase {
  constructor (game) {
    super(game, "Faerie Conclave", "Commander 2013", "C13");
  }
}

module.exports = FaerieConclave;
