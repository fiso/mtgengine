"use strict";
const Constants = require ("../../../Constants");
const SedgeTrollBase = require("../setCED/SedgeTroll");

class SedgeTroll extends SedgeTrollBase {
  constructor (game) {
    super(game, "Sedge Troll", "Masters Edition IV", "ME4");
  }
}

module.exports = SedgeTroll;
