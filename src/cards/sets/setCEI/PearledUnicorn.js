"use strict";
const Constants = require ("../../../Constants");
const PearledUnicornBase = require("../setCED/PearledUnicorn");

class PearledUnicorn extends PearledUnicornBase {
  constructor(game) {
    super(game, "Pearled Unicorn", "International Collector's Edition", "CEI");
  }
}

module.exports = PearledUnicorn;
