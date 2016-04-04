"use strict";
const Constants = require ("../../../Constants");
const MeriekeRiBeritBase = require("../setICE/MeriekeRiBerit");

class MeriekeRiBerit extends MeriekeRiBeritBase {
  constructor(game) {
    super(game, "Merieke Ri Berit", "Time Spiral "Timeshifted"", "TSB");
  }
}

module.exports = MeriekeRiBerit;
