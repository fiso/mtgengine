"use strict";
const Constants = require ("../../../Constants");
const ThousandYearElixirBase = require("../setCMA/ThousandYearElixir");

class ThousandYearElixir extends ThousandYearElixirBase {
  constructor (game) {
    super(game, "Thousand-Year Elixir", "Lorwyn", "LRW");
  }
}

module.exports = ThousandYearElixir;
