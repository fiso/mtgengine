"use strict";
const Constants = require ("../../../Constants");
const BlackSunsZenithBase = require("../setC14/BlackSunsZenith");

class BlackSunsZenith extends BlackSunsZenithBase {
  constructor (game) {
    super(game, "Black Sun's Zenith", "Magic Online Promos", "PRM");
  }
}

module.exports = BlackSunsZenith;
