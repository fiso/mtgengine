"use strict";
const Constants = require ("../../../Constants");
const HerosResolveBase = require("../setS00/HerosResolve");

class HerosResolve extends HerosResolveBase {
  constructor (game) {
    super(game, "Hero's Resolve", "Tempest", "TMP");
  }
}

module.exports = HerosResolve;
