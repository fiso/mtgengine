"use strict";
const Constants = require ("../../../Constants");
const SavannahBase = require("../setCED/Savannah");

class Savannah extends SavannahBase {
  constructor(game) {
    super(game, "Savannah", "International Collector's Edition", "CEI");
  }
}

module.exports = Savannah;
