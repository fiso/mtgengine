"use strict";
const Constants = require ("../../../Constants");
const FaerieConclaveBase = require("../setC13/FaerieConclave");

class FaerieConclave extends FaerieConclaveBase {
  constructor(game) {
    super(game, "Faerie Conclave", "Urza's Legacy", "ULG");
  }
}

module.exports = FaerieConclave;
