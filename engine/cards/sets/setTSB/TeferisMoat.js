"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const TeferisMoatBase = require("../setINV/TeferisMoat.js");

class TeferisMoat extends TeferisMoatBase {
  constructor(game) {
    super(game, "Teferi's Moat", "Time Spiral "Timeshifted"", "TSB");
  }
}

module.exports = TeferisMoat;
