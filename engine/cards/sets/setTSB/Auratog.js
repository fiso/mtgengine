"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const AuratogBase = require("../setTMP/Auratog.js");

class Auratog extends AuratogBase {
  constructor(game) {
    super(game, "Auratog", "Time Spiral "Timeshifted"", "TSB");
  }
}

module.exports = Auratog;
