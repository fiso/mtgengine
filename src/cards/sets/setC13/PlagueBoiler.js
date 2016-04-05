"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PlagueBoiler extends UnimplementedCard {
  constructor(game) {
    super(game, "Plague Boiler", "Commander 2013 Edition", "C13");
  }
}

module.exports = PlagueBoiler;
