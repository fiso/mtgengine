"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const FaerieConclaveBase = require("../setC13/FaerieConclave.js");

class FaerieConclave extends FaerieConclaveBase {
  constructor(game) {
    super(game, "Faerie Conclave", "Urza's Legacy", "ULG");
  }
}

module.exports = FaerieConclave;
