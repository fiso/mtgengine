"use strict";
const Constants = require ("../../../Constants");
const AuratogBase = require("../setTMP/Auratog");

class Auratog extends AuratogBase {
  constructor (game) {
    super(game, "Auratog", "Time Spiral \"Timeshifted\"", "TSB");
  }
}

module.exports = Auratog;
