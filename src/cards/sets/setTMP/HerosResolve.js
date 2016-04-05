"use strict";
const Constants = require ("../../../Constants");
const HerosResolveBase = require("../set6ED/HerosResolve");

class HerosResolve extends HerosResolveBase {
  constructor(game) {
    super(game, "Hero's Resolve", "Tempest", "TMP");
  }
}

module.exports = HerosResolve;
