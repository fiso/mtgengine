"use strict";
const Constants = require ("../../../Constants");
const HerosResolveBase = require("../setS00/HerosResolve");

class HerosResolve extends HerosResolveBase {
  constructor (game) {
    super(game, "Hero's Resolve", "Classic Sixth Edition", "6ED");
  }
}

module.exports = HerosResolve;
