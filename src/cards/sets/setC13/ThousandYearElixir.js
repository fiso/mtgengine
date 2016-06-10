"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ThousandYearElixir extends UnimplementedCard {
  constructor (game) {
    super(game, "Thousand-Year Elixir", "Commander 2013 Edition", "C13");
  }
}

module.exports = ThousandYearElixir;
