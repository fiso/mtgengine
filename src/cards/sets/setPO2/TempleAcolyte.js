"use strict";
const Constants = require ("../../../Constants");
const TempleAcolyteBase = require("../setDDF/TempleAcolyte");

class TempleAcolyte extends TempleAcolyteBase {
  constructor (game) {
    super(game, "Temple Acolyte", "Portal Second Age", "PO2");
  }
}

module.exports = TempleAcolyte;
