"use strict";
const Constants = require ("../../../Constants");
const TeferisMoatBase = require("../setINV/TeferisMoat");

class TeferisMoat extends TeferisMoatBase {
  constructor (game) {
    super(game, "Teferi's Moat", "Time Spiral \"Timeshifted\"", "TSB");
  }
}

module.exports = TeferisMoat;
