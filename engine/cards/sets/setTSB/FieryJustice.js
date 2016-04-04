"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const FieryJusticeBase = require("../setC13/FieryJustice.js");

class FieryJustice extends FieryJusticeBase {
  constructor(game) {
    super(game, "Fiery Justice", "Time Spiral "Timeshifted"", "TSB");
  }
}

module.exports = FieryJustice;
