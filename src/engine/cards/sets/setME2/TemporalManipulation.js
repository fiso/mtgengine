"use strict";
const Constants = require ("../../../Constants");
const TemporalManipulationBase = require("../setJ15/TemporalManipulation");

class TemporalManipulation extends TemporalManipulationBase {
  constructor (game) {
    super(game, "Temporal Manipulation", "Masters Edition II", "ME2");
  }
}

module.exports = TemporalManipulation;
