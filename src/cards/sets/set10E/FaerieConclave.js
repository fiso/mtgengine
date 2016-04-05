"use strict";
const Constants = require ("../../../Constants");
const FaerieConclaveBase = require("../setC13/FaerieConclave");

class FaerieConclave extends FaerieConclaveBase {
  constructor(game) {
    super(game, "Faerie Conclave", "Tenth Edition", "10E");
  }
}

module.exports = FaerieConclave;
