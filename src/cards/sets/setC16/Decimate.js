"use strict";
const Constants = require ("../../../Constants");
const DecimateBase = require("../setC18/Decimate");

class Decimate extends DecimateBase {
  constructor (game) {
    super(game, "Decimate", "Commander 2016", "C16");
  }
}

module.exports = Decimate;
