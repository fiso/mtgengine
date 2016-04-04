"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ThousandYearElixir extends Card {
  constructor(game) {
    super(game, "Thousand-Year Elixir", "Commander 2013 Edition", "C13");
  }
}

module.exports = ThousandYearElixir;
