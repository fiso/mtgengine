"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SanguineBond extends UnimplementedCard {
  constructor(game) {
    super(game, "Sanguine Bond", "Commander 2013 Edition", "C13");
  }
}

module.exports = SanguineBond;
