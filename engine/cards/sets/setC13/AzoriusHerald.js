"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AzoriusHerald extends UnimplementedCard {
  constructor(game) {
    super(game, "Azorius Herald", "Commander 2013 Edition", "C13");
  }
}

module.exports = AzoriusHerald;
