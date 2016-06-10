"use strict";
const Constants = require ("../../../Constants");
const ThousandYearElixirBase = require("../setC13/ThousandYearElixir");

class ThousandYearElixir extends ThousandYearElixirBase {
  constructor (game) {
    super(game, "Thousand-Year Elixir", "Lorwyn", "LRW");
  }
}

module.exports = ThousandYearElixir;
