"use strict";
const Constants = require ("../../../Constants");
const HedgeTrollBase = require("../setPLC/HedgeTroll");

class HedgeTroll extends HedgeTrollBase {
  constructor(game) {
    super(game, "Hedge Troll", "Release Events", "pREL");
  }
}

module.exports = HedgeTroll;
