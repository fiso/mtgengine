"use strict";
const Constants = require ("../../../Constants");
const DecimateBase = require("../setCNS/Decimate");

class Decimate extends DecimateBase {
  constructor(game) {
    super(game, "Decimate", "Odyssey", "ODY");
  }
}

module.exports = Decimate;
