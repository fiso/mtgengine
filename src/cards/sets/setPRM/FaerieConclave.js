"use strict";
const Constants = require ("../../../Constants");
const FaerieConclaveBase = require("../setCMA/FaerieConclave");

class FaerieConclave extends FaerieConclaveBase {
  constructor (game) {
    super(game, "Faerie Conclave", "Magic Online Promos", "PRM");
  }
}

module.exports = FaerieConclave;
