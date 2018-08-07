"use strict";
const Constants = require ("../../../Constants");
const TemporalManipulationBase = require("../setJ15/TemporalManipulation");

class TemporalManipulation extends TemporalManipulationBase {
  constructor (game) {
    super(game, "Temporal Manipulation", "Magic Online Promos", "PRM");
  }
}

module.exports = TemporalManipulation;
