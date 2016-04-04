"use strict";
const Constants = require ("../../../Constants");
const SedgeTrollBase = require("../setCED/SedgeTroll");

class SedgeTroll extends SedgeTrollBase {
  constructor(game) {
    super(game, "Sedge Troll", "Revised Edition", "3ED");
  }
}

module.exports = SedgeTroll;
