"use strict";
const Constants = require ("../../../Constants");
const TolarianWindsBase = require("../setBTD/TolarianWinds");

class TolarianWinds extends TolarianWindsBase {
  constructor (game) {
    super(game, "Tolarian Winds", "Seventh Edition", "7ED");
  }
}

module.exports = TolarianWinds;
