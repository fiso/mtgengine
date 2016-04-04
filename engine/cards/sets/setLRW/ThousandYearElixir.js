"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ThousandYearElixirBase = require("../setC13/ThousandYearElixir.js");

class ThousandYearElixir extends ThousandYearElixirBase {
  constructor(game) {
    super(game, "Thousand-Year Elixir", "Lorwyn", "LRW");
  }
}

module.exports = ThousandYearElixir;
