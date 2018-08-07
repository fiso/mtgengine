"use strict";
const Constants = require ("../../../Constants");
const GlobalRuinBase = require("../setWC02/GlobalRuin");

class GlobalRuin extends GlobalRuinBase {
  constructor (game) {
    super(game, "Global Ruin", "Invasion", "INV");
  }
}

module.exports = GlobalRuin;
