"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Guttersnipe extends UnimplementedCard {
  constructor(game) {
    super(game, "Guttersnipe", "Commander 2013 Edition", "C13");
  }
}

module.exports = Guttersnipe;
