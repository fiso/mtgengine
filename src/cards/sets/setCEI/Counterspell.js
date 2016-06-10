"use strict";
const Constants = require ("../../../Constants");
const CounterspellBase = require("../setBRB/Counterspell");

class Counterspell extends CounterspellBase {
  constructor (game) {
    super(game, "Counterspell", "International Collector's Edition", "CEI");
  }
}

module.exports = Counterspell;
