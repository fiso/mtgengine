"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MeriekeRiBeritBase = require("../setICE/MeriekeRiBerit.js");

class MeriekeRiBerit extends MeriekeRiBeritBase {
  constructor(game) {
    super(game, "Merieke Ri Berit", "Time Spiral "Timeshifted"", "TSB");
  }
}

module.exports = MeriekeRiBerit;
