"use strict";
const Constants = require ("../../../Constants");
const TolarianWindsBase = require("../set7ED/TolarianWinds");

class TolarianWinds extends TolarianWindsBase {
  constructor (game) {
    super(game, "Tolarian Winds", "Urza's Saga", "USG");
  }
}

module.exports = TolarianWinds;
