"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const VerdeloththeAncientBase = require("../setARC/VerdeloththeAncient.js");

class VerdeloththeAncient extends VerdeloththeAncientBase {
  constructor(game) {
    super(game, "Verdeloth the Ancient", "Time Spiral "Timeshifted"", "TSB");
  }
}

module.exports = VerdeloththeAncient;
