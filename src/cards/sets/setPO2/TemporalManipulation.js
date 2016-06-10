"use strict";
const Constants = require ("../../../Constants");
const TemporalManipulationBase = require("../setME2/TemporalManipulation");

class TemporalManipulation extends TemporalManipulationBase {
  constructor (game) {
    super(game, "Temporal Manipulation", "Portal Second Age", "PO2");
  }
}

module.exports = TemporalManipulation;
