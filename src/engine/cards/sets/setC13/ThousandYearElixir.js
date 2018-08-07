"use strict";
const Constants = require ("../../../Constants");
const ThousandYearElixirBase = require("../setCMA/ThousandYearElixir");

class ThousandYearElixir extends ThousandYearElixirBase {
  constructor (game) {
    super(game, "Thousand-Year Elixir", "Commander 2013", "C13");
  }
}

module.exports = ThousandYearElixir;
