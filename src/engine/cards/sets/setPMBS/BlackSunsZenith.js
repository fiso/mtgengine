"use strict";
const Constants = require ("../../../Constants");
const BlackSunsZenithBase = require("../setC14/BlackSunsZenith");

class BlackSunsZenith extends BlackSunsZenithBase {
  constructor (game) {
    super(game, "Black Sun's Zenith", "Mirrodin Besieged Promos", "PMBS");
  }
}

module.exports = BlackSunsZenith;
