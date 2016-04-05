"use strict";
const Constants = require ("../../../Constants");
const StasisBase = require("../setCED/Stasis");

class Stasis extends StasisBase {
  constructor(game) {
    super(game, "Stasis", "International Collector's Edition", "CEI");
  }
}

module.exports = Stasis;
