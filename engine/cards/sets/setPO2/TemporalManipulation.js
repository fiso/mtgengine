"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const TemporalManipulationBase = require("../setME2/TemporalManipulation.js");

class TemporalManipulation extends TemporalManipulationBase {
  constructor(game) {
    super(game, "Temporal Manipulation", "Portal Second Age", "PO2");
  }
}

module.exports = TemporalManipulation;
